var chai = require('chai');
var sinon = require('sinon');
var child = require('child_process');
var exec = child.exec;
var fs = require('fs');
var rewire = require('rewire');
var suitcss = rewire('../lib');
var path = require('path');
var sinonChai = require('sinon-chai');
var chaiAsPromised = require('chai-as-promised');
require('sinon-as-promised');

chai.use(sinonChai);
chai.use(chaiAsPromised);
var expect = chai.expect;

/**
 * Node API tests.
 */

describe('suitcss', function() {
  it('should return a css string', function(done) {
    suitcss('body {}').then(function(result) {
      expect(result.css).to.be.a('string');
      done();
    });
  });

  it('should handle invalid input', function() {
    expect(function() {
      suitcss(null);
    }).to.throw(TypeError);
  });

  describe('using options', function() {
    var mergeOptions, defaults;

    beforeEach(function() {
      mergeOptions = suitcss.__get__('mergeOptions');
      defaults = suitcss.__get__('defaults');
    });

    it('should use default options when nothing is passed', function() {
      var keys = Object.keys(defaults);
      expect(mergeOptions({})).to.have.keys(keys);
      expect(mergeOptions()).to.have.keys(keys);
      expect(mergeOptions({}).use).to.eql(defaults.use);
      expect(mergeOptions().use).to.eql(defaults.use);
    });

    it('should allow an import root to be set', function() {
      var opts = mergeOptions({root: 'test/root'});
      expect(opts['postcss-easy-import'].root).to.equal('test/root');
    });

    it('should allow a debug function to be ran on plugins', function (done) {
      var debug = sinon.spy(function (plugins) {
        return plugins;
      });

      suitcss('body {}', {
        debug: debug
      }).then(function () {
        expect(debug.calledOnce).to.be.true;
        done();
      }).catch(done);
    });

    it('should allow stylelint to be disabled', function() {
      var opts = mergeOptions({lint: false});
      expect(opts.lint).to.be.false;
    });

    it('should allow a minify option to be set', function() {
      var opts = mergeOptions({minify: true});
      expect(opts.minify).to.be.true;
    });

    it('should merge config options with existing defaults', function() {
      var autoprefixer = {browsers: ['> 1%', 'IE 7'], cascade: false};
      var opts = mergeOptions({
        root: 'test/root',
        autoprefixer: autoprefixer
      });

      expect(opts.use).to.eql([
        'postcss-easy-import',
        'postcss-custom-properties',
        'postcss-calc',
        'postcss-color-function',
        'postcss-custom-media',
        'postcss-apply',
        'autoprefixer',
        'postcss-reporter'
      ]);
      expect(opts.autoprefixer).to.eql(autoprefixer);
      expect(opts['postcss-easy-import'].root).to.equal('test/root');
    });

    describe('passing options to postcss', function() {
      var postcssStub, processMethodStub, revert;

      beforeEach(function() {
        postcssStub = sinon.stub();
        processMethodStub = sinon.stub();

        postcssStub.returns({
          use: sinon.spy(),
          process: processMethodStub
        });
        revert = suitcss.__set__('postcss', postcssStub);
        suitcss('body {}', {
          root: 'something',
          postcss: {
            from: 'somefile.css'
          }
        });
      });

      afterEach(function() {
        revert();
      });

      it('should pass postcss options to the processor', function() {
        expect(processMethodStub.getCall(0).args[1]).to.eql({
          from: 'somefile.css'
        });
      });
    });

    describe('using the transform option in postcss-import', function() {
      it('should use a default transform function that just returns the css', function(done) {
        suitcss('@import "./util.css";', {
          root: 'test/fixtures'
        }).then(function(result) {
          expect(result.css).to.equal('.u-img {\n  border-radius: 50%;\n}');
          done();
        })
        .catch(done);
      });

      it('should call a custom transform function with the imported component', function(done) {
        var transformStub = sinon.stub().returns('body { color: blue; }');

        suitcss('@import "./util.css";', {
          root: 'test/fixtures',
          'postcss-easy-import': {
            transform: transformStub
          }
        }).then(function(result) {
          expect(transformStub.calledOnce).to.be.true;
          expect(transformStub.getCall(0).args[0]).to.equal('.u-img {\n  border-radius: 50%;\n}\n');
          expect(result.css).to.equal('body { color: blue; }');
          done();
        })
        .catch(done);
      });

      it('should also work with a promise returned from the custom transform function', function(done) {
        suitcss('@import "./util.css";', {
          root: 'test/fixtures',
          'postcss-easy-import': {
            transform: function() {
              return Promise.resolve('body { font: red; }');
            }
          }
        }).then(function(result) {
          expect(result.css).to.equal('body { font: red; }');
          done();
        })
        .catch(done);
      });
    });

    describe('using the onImport option postcss-import', function() {
      var updateWatchTaskFilesSpy, revert;

      beforeEach(function() {
        updateWatchTaskFilesSpy = sinon.spy();
        revert = suitcss.__set__('updateWatchTaskFiles', updateWatchTaskFilesSpy);
      });

      afterEach(function() {
        revert();
      });

      it('should call the updateWatchTaskFiles function with the file paths', function(done) {
        suitcss('@import "./util.css";', {
          root: 'test/fixtures'
        }).then(function() {
          expect(updateWatchTaskFilesSpy.getCall(0).args[0][0]).to.contain('util.css');
          done();
        })
        .catch(done);
      });

      it('should call a custom onImport function', function(done) {
        var onImportSpy = sinon.spy();

        suitcss('@import "./util.css";', {
          root: 'test/fixtures',
          'postcss-easy-import': {
            onImport: onImportSpy
          }
        }).then(function() {
          expect(onImportSpy.getCall(0).args[0][0]).to.contain('util.css');
          expect(updateWatchTaskFilesSpy.getCall(0).args[0][0]).to.contain('util.css');
          done();
        })
        .catch(done);
      });
    });

    describe('re-ordering plugins', function() {
      it('should allow reordering of use array and remove duplicates', function() {
        var opts = mergeOptions({
          use: ['autoprefixer', 'postcss-at2x', 'postcss-calc', 'postcss-reporter']
        });

        expect(opts.use).to.eql([
          'postcss-easy-import',
          'postcss-custom-properties',
          'postcss-color-function',
          'postcss-custom-media',
          'postcss-apply',
          'autoprefixer',
          'postcss-at2x',
          'postcss-calc',
          'postcss-reporter'
        ]);
      });

      it('should just append plugins if no duplicates are used', function() {
        var opts = mergeOptions({
          use: ['postcss-at2x', 'postcss-property-lookup']
        });

        expect(opts.use).to.eql([
          'postcss-easy-import',
          'postcss-custom-properties',
          'postcss-calc',
          'postcss-color-function',
          'postcss-custom-media',
          'postcss-apply',
          'autoprefixer',
          'postcss-reporter',
          'postcss-at2x',
          'postcss-property-lookup'
        ]);
      });
    });

    describe('stylelint', function() {
      it('should lint the component', function() {
        return expect(
          suitcss(read('fixtures/component'), {
            root: 'test/fixtures',
            'postcss-reporter': {
              throwError: true
            }
          })
        ).to.be.fulfilled;
      });

      it('should allow the config to be overidden', function() {
        return expect(
          suitcss('@import "./stylelint.css"', {
            root: 'test/fixtures',
            stylelint: {
              extends: 'stylelint-config-suitcss',
              rules: {
                indentation: 4
              }
            },
            'postcss-reporter': {
              throwError: true
            }
          })
        ).to.be.fulfilled;
      });

      it('should throw an error if stylelint fails', function() {
        return expect(
          suitcss('@import "./stylelint.css"', {
            root: 'test/fixtures',
            'postcss-reporter': {
              throwError: true
            }
          })
        ).to.be.rejectedWith(Error, 'postcss-reporter: warnings or errors were found');
      });
    });
  });
});

/**
 * Feature tests.
 */

describe('features', function() {
  it('should preprocess CSS correctly', function(done) {
    var input = read('fixtures/component');
    var output = read('fixtures/component.out');

    suitcss(input, {
      root: 'test/fixtures',
      // disable autoprefixer
      autoprefixer: {add: false, remove: false}
    }).then(function(result) {
      expect(result.css.trim()).to.be.equal(output.trim());
      done();
    }).catch(done);
  });

  it('should add vendor prefixes', function(done) {
    var input = '.test { filter: blur(1px) }';
    var output = '.test { -webkit-filter: blur(1px); filter: blur(1px) }';

    suitcss(input, {
      autoprefixer: {
        browsers: 'Chrome 50'
      }
    }).then(function(result) {
      expect(result.css.trim()).to.be.equal(output.trim());
      done();
    }).catch(done);
  });
});

/**
 * CLI tests.
 */

describe('cli', function() {
  var input = read('fixtures/cli/input');
  var output = read('fixtures/cli/input.out');

  afterEach(function() {
    remove('fixtures/cli/output');
  });

  it('should read from a file and write to a file', function(done) {
    exec('node bin/suitcss -c test/noautoprefixer.config.js test/fixtures/cli/input.css test/fixtures/cli/output.css', function(err) {
      if (err) return done(err);
      var res = read('fixtures/cli/output');
      expect(res).to.equal(output);
      done();
    });
  });

  it('should read from a file and write to stdout', function(done) {
    exec('node bin/suitcss -c test/noautoprefixer.config.js test/fixtures/cli/input.css', function(err, stdout) {
      if (err) return done(err);
      expect(stdout).to.equal(output);
      done();
    });
  });

  it('should read from stdin and write to stdout', function(done) {
    var testChild = exec('node bin/suitcss -c test/noautoprefixer.config.js', function(err, stdout) {
      if (err) return done(err);
      expect(stdout).to.equal(output);
      done();
    });

    testChild.stdin.write(new Buffer(input));
    testChild.stdin.end();
  });

  it('should log on verbose', function(done) {
    exec('node bin/suitcss -v  -c test/noautoprefixer.config.js test/fixtures/cli/input.css test/fixtures/cli/output.css', function(err, stdout) {
      if (err) return done(err);
      expect(stdout).to.contain('write');
      done();
    });
  });

  it('should allow configurable import root', function(done) {
    exec('node bin/suitcss -i test/fixtures -c test/noautoprefixer.config.js test/fixtures/import.css test/fixtures/cli/output.css', function(err) {
      if (err) return done(err);
      var res = read('fixtures/cli/output');
      var expected = read('fixtures/component.out');
      expect(res).to.equal(expected);
      done();
    });
  });

  it('should output stylelint warnings', function(done) {
    exec('node bin/suitcss -i test/fixtures -c test/noautoprefixer.config.js test/fixtures/stylelint-import.css test/fixtures/cli/output.css -l', function(err, stdout) {
      if (err) return done(err);
      expect(stdout).to.contain('Expected indentation of 2 spaces');
      done();
    });
  });

  it('should minify the output', function(done) {
    exec('node bin/suitcss -i test/fixtures -c test/noautoprefixer.config.js test/fixtures/import.css test/fixtures/cli/output.css -m', function(err) {
      if (err) return done(err);
      var res = read('fixtures/cli/output');
      var expected = read('fixtures/minify.out');
      expect(res).to.equal(expected);
      done();
    });
  });

  it('should allow a config file to be passed', function(done) {
    exec('node bin/suitcss -i test/fixtures -c test/test.config.js test/fixtures/config.css test/fixtures/cli/output.css', function(err) {
      if (err) return done(err);
      var res = read('fixtures/cli/output');
      var expected = read('fixtures/config.out');
      expect(res).to.equal(expected);
      done();
    });
  });

  it('should output an error to stderr on conformance failure when throwError is set', function(done) {
    exec('node bin/suitcss -i test/fixtures -c test/error.config.json test/fixtures/import-error.css test/fixtures/cli/output.css', function(err, stdout, stderr) {
      expect(err).to.be.an('error');
      expect(err.code).to.equal(1);
      expect(stderr).to.contain('postcss-reporter: warnings or errors were found');
      done();
    });
  });

  it('should log on non-existant file', function(done) {
    exec('node bin/suitcss -c test/noautoprefixer.config.js test/fixtures/cli/non-existant.css', function(err, stdout, stderr) {
      expect(err).to.be.an('error');
      expect(err.code).to.equal(1);
      expect(stderr).to.contain('not found');
      done();
    });
  });
});

/**
 * Read a fixture by `filename`.
 *
 * @param {String} filename
 * @return {String}
 */

function read(filename) {
  var file = resolve(filename);
  return fs.readFileSync(file, 'utf8');
}

/**
 * Remove a fixture by `filename`.
 *
 * @param {String} filename
 */

function remove(filename) {
  var file = resolve(filename);
  if (!fs.existsSync(file)) return;
  fs.unlinkSync(file);
}

/**
 * Resolve a fixture by `filename`.
 *
 * @param {String} filename
 * @return {String}
 */

function resolve(filename) {
  return path.resolve(__dirname, filename + '.css');
}
