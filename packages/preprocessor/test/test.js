var expect = require('chai').expect;
var sinon = require('sinon');
var child = require('child_process');
var exec = child.exec;
var fs = require('fs');
var rewire = require('rewire');
var suitcss = rewire('../lib');
var path = require('path');

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
    expect(function() {suitcss(null);}).to.throw(TypeError);
  });

  describe('using options', function() {
    var mergeOptions, defaults;

    beforeEach(function() {
      mergeOptions = suitcss.__get__('mergeOptions');
      defaults = suitcss.__get__('defaults');
    });

    it('should use default options when nothing is passed', function() {
      var keys = [
        'minify',
        'use',
        'lint',
        'postcss-import',
        'postcss-reporter',
        'cssnano'
      ];
      expect(mergeOptions({})).to.have.keys(keys);
      expect(mergeOptions()).to.have.keys(keys);
      expect(mergeOptions({}).use).to.eql(defaults.use);
      expect(mergeOptions().use).to.eql(defaults.use);
    });

    it('should allow an import root to be set', function() {
      var opts = mergeOptions({root: 'test/root'});
      expect(opts['postcss-import'].root).to.equal('test/root');
    });

    it('should allow stylelint to be enabled', function() {
      var opts = mergeOptions({lint: true});
      expect(opts.lint).to.be.true;
    });

    it('should allow an minify option to be set', function() {
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
        'postcss-import',
        'postcss-custom-properties',
        'postcss-calc',
        'postcss-custom-media',
        'autoprefixer',
        'postcss-reporter'
      ]);
      expect(opts.autoprefixer).to.eql(autoprefixer);
      expect(opts['postcss-import'].root).to.equal('test/root');
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

    describe('re-ordering plugins', function() {
      it('should allow reordering of use array and remove duplicates', function() {
        var opts = mergeOptions({
          use: ['autoprefixer', 'postcss-at2x', 'postcss-calc', 'postcss-reporter']
        });

        expect(opts.use).to.eql([
          'postcss-import',
          'postcss-custom-properties',
          'postcss-custom-media',
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
          'postcss-import',
          'postcss-custom-properties',
          'postcss-calc',
          'postcss-custom-media',
          'autoprefixer',
          'postcss-reporter',
          'postcss-at2x',
          'postcss-property-lookup'
        ]);
      });
    });

    describe('stylelint', function() {
      it('should check the input conforms to SUIT style rules', function(done) {
        suitcss('@import ./stylelint.css', {
          lint: true,
          root: 'test/fixtures',
          'postcss-reporter': {
            throwError: true
          }
        }).then(function() {
          done(new Error('stylelint should have failed conformance'));
        }).catch(function(err) {
          expect(err.message).to.contain('postcss-reporter: warnings or errors were found');
          done();
        });
      });
    });

    describe('beforeLint option', function() {
      var lintImportedFilesStub, bemLintStub, beforeLintStub, revert;

      beforeEach(function() {
        lintImportedFilesStub = sinon.stub();
        bemLintStub = sinon.stub().returns('/* lint */');
        beforeLintStub = sinon.stub().returns('/* before lint */');

        lintImportedFilesStub.onFirstCall().returns(bemLintStub);
        revert = suitcss.__set__('lintImportedFiles', lintImportedFilesStub);
      });

      afterEach(function() {
        revert();
      });

      it('should call user supplied function before linting', function(done) {
        suitcss(read('fixtures/component'), {
          root: 'test/fixtures',
          beforeLint: beforeLintStub
        }).catch(done);

        expect(bemLintStub.calledOnce).to.be.ok;
        expect(beforeLintStub.calledOnce).to.be.ok;
        expect(beforeLintStub.calledBefore(bemLintStub)).to.be.ok;

        done();
      });

      it('should pass processed CSS to the linting transform function', function(done) {
        suitcss(read('fixtures/component'), {
          root: 'test/fixtures',
          beforeLint: beforeLintStub
        }).catch(done);

        expect(bemLintStub.args[0][0]).to.equal('/* before lint */');

        done();
      });

      it('should pass the merged options to the beforeLint function', function(done) {
        suitcss(read('fixtures/component'), {
          root: 'test/fixtures',
          beforeLint: beforeLintStub
        }).catch(done);

        expect(beforeLintStub.args[0][2].root).to.equal('test/fixtures');

        done();
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

    suitcss(input, {root: 'test/fixtures'}).then(function(result) {
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
    exec('bin/suitcss test/fixtures/cli/input.css test/fixtures/cli/output.css', function(err) {
      if (err) return done(err);
      var res = read('fixtures/cli/output');
      expect(res).to.equal(output);
      done();
    });
  });

  it('should read from a file and write to stdout', function(done) {
    exec('bin/suitcss test/fixtures/cli/input.css', function(err, stdout) {
      if (err) return done(err);
      expect(stdout).to.equal(output);
      done();
    });
  });

  it('should read from stdin and write to stdout', function(done) {
    var testChild = exec('bin/suitcss', function(err, stdout) {
      if (err) return done(err);
      expect(stdout).to.equal(output);
      expect(stdout).to.not.contain('beforeLint ran');
      done();
    });

    testChild.stdin.write(new Buffer(input));
    testChild.stdin.end();
  });

  it('should log on verbose', function(done) {
    exec('bin/suitcss -v test/fixtures/cli/input.css test/fixtures/cli/output.css', function(err, stdout) {
      if (err) return done(err);
      expect(stdout).to.contain('write');
      expect(stdout).to.not.contain('beforeLint ran');
      done();
    });
  });

  it('should allow configurable import root', function(done) {
    exec('bin/suitcss -i test/fixtures test/fixtures/import.css test/fixtures/cli/output.css', function(err, stdout) {
      if (err) return done(err);
      var res = read('fixtures/cli/output');
      var expected = read('fixtures/component.out');
      expect(res).to.equal(expected);
      expect(stdout).to.not.contain('beforeLint ran');
      done();
    });
  });

  it('should output stylelint warnings', function(done) {
    exec('bin/suitcss -i test/fixtures test/fixtures/stylelint-import.css test/fixtures/cli/output.css -l', function(err, stdout) {
      if (err) return done(err);
      expect(stdout).to.contain('Expected property "box-sizing" to come before property "flex"');
      done();
    });
  });

  it('should minify the output', function(done) {
    exec('bin/suitcss -i test/fixtures test/fixtures/import.css test/fixtures/cli/output.css -m', function(err, stdout) {
      if (err) return done(err);
      var res = read('fixtures/cli/output');
      var expected = read('fixtures/minify.out');
      expect(stdout).to.not.contain('beforeLint ran');
      expect(res).to.equal(expected);
      done();
    });
  });

  it('should allow a config file to be passed', function(done) {
    exec('bin/suitcss -i test/fixtures -c test/test.config.js test/fixtures/config.css test/fixtures/cli/output.css', function(err, stdout) {
      if (err) return done(err);
      var res = read('fixtures/cli/output');
      var expected = read('fixtures/config.out');
      expect(stdout).to.contain('beforeLint ran');
      expect(res).to.equal(expected);
      done();
    });
  });

  it('should output an error to stderr on conformance failure when throwError is set', function(done) {
    exec('bin/suitcss -i test/fixtures -c test/error.config.json test/fixtures/import-error.css test/fixtures/cli/output.css', function(err, stdout, stderr) {
      expect(err).to.be.an('error');
      expect(err.code).to.equal(1);
      expect(stderr).to.contain('postcss-reporter: warnings or errors were found');
      done();
    });
  });

  it('should log on non-existant file', function(done) {
    exec('bin/suitcss test/fixtures/cli/non-existant.css', function(err, stdout, stderr) {
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
