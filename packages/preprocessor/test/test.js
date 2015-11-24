var expect = require('chai').expect;
var child = require('child_process');
var exec = child.exec;
var spawn = child.spawn;
var fs = require('fs');
var rewire = require('rewire');
var suitcss = rewire('../lib');
var path = require('path');

/**
 * Node API tests.
 */

describe('suitcss', function () {
  it('should return a css string', function (done) {
    suitcss('body {}').then(function(result) {
      expect(result.css).to.be.a('string');
      done();
    });
  });

  it('should throw if css is not a string', function() {
    expect(function() {suitcss(null);}).to.throw(Error);
    expect(function() {suitcss({});}).to.throw(Error);
  });

  describe('passing options', function() {
    var mergeOptions, defaults;

    beforeEach(function() {
      mergeOptions = suitcss.__get__('mergeOptions');
    });

    it('should use default options when nothing is passed', function() {
      var keys = [
        'minify',
        'use',
        'postcss-import',
        'postcss-reporter',
        'cssnano'
      ];
      expect(mergeOptions({})).to.have.keys(keys);
      expect(mergeOptions()).to.have.keys(keys);
    });

    it('should allow an import root to be set', function() {
      var opts = mergeOptions({root: 'test/root'});
      expect(opts['postcss-import'].root).to.equal('test/root');
    });

    it('should allow an minify option to be set', function() {
      var opts = mergeOptions({minify: true});
      expect(opts.minify).to.be.true;
    });

    it('should merge config options with existing defaults', function() {
      var autoprefixer = {browsers: ['> 1%', 'IE 7'], cascade: false};
      var opts = mergeOptions({
        root: 'test/root',
        config: {
          use: ['postcss-property-lookup'],
          autoprefixer: autoprefixer
        }
      });

      expect(opts.use).to.eql([
        'postcss-import',
        'postcss-custom-properties',
        'postcss-calc',
        'postcss-custom-media',
        'autoprefixer',
        'postcss-property-lookup',
        'postcss-reporter'
      ]);
      expect(opts.autoprefixer).to.eql(autoprefixer);
      expect(opts['postcss-import'].root).to.equal('test/root');
    });
  });
});

/**
 * Feature tests.
 */

describe('features', function () {
  it('should preprocess CSS correctly', function (done) {
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

describe('cli', function () {
  var input = read('fixtures/cli/input');
  var output = read('fixtures/cli/input.out');

  afterEach(function () {
    remove('fixtures/cli/output');
  });

  it('should read from a file and write to a file', function (done) {
    exec('bin/suitcss test/fixtures/cli/input.css test/fixtures/cli/output.css', function (err, stdout) {
      if (err) return done(err);
      var res = read('fixtures/cli/output');
      expect(res).to.equal(output);
      done();
    });
  });

  it('should read from a file and write to stdout', function (done) {
    exec('bin/suitcss test/fixtures/cli/input.css', function (err, stdout) {
      if (err) return done(err);
      expect(stdout).to.equal(output);
      done();
    });
  });

  it('should read from stdin and write to stdout', function (done) {
    var child = exec('bin/suitcss', function (err, stdout) {
      if (err) return done(err);
      expect(stdout).to.equal(output);
      done();
    });

    child.stdin.write(new Buffer(input));
    child.stdin.end();
  });

  it('should log on verbose', function (done) {
    exec('bin/suitcss -v test/fixtures/cli/input.css test/fixtures/cli/output.css', function (err, stdout) {
      if (err) return done(err);
      expect(stdout).to.contain('write');
      done();
    });
  });

  it('should allow configurable import root', function (done) {
    exec('bin/suitcss -i test/fixtures test/fixtures/import.css test/fixtures/cli/output.css', function (err, stdout) {
      if (err) return done(err);
      var res = read('fixtures/cli/output');
      var expected = read('fixtures/component.out');
      expect(res).to.equal(expected);
      done();
    });
  });

  it('should minify the output', function (done) {
    exec('bin/suitcss -i test/fixtures test/fixtures/import.css test/fixtures/cli/output.css -m', function (err, stdout) {
      if (err) return done(err);
      var res = read('fixtures/cli/output');
      var expected = read('fixtures/minify.out');
      expect(res).to.equal(expected);
      done();
    });
  });

  it('should allow a config file to be passed', function (done) {
    exec('bin/suitcss -i test/fixtures -c test/test.config.js test/fixtures/config.css test/fixtures/cli/output.css', function (err, stdout) {
      if (err) return done(err);
      var res = read('fixtures/cli/output');
      var expected = read('fixtures/config.out');
      expect(res).to.equal(expected);
      done();
    });
  });

  it('should output an error to stderr on conformance failure when throwError is set', function(done) {
    exec('bin/suitcss -i test/fixtures -c test/error.config.json test/fixtures/import-error.css test/fixtures/cli/output.css', function (err, stdout, stderr) {
      expect(err).to.be.an('error');
      expect(err.code).to.equal(1);
      expect(stderr).to.contain('postcss-reporter: warnings or errors were found');
      done();
    });
  });

  it('should log on non-existant file', function (done) {
    exec('bin/suitcss test/fixtures/cli/non-existant.css', function (err, stdout, stderr) {
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

function read (filename) {
  var file = resolve(filename);
  return fs.readFileSync(file, 'utf8');
}

/**
 * Remove a fixture by `filename`.
 *
 * @param {String} filename
 */

function remove (filename) {
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

function resolve (filename) {
  return path.resolve(__dirname, filename + '.css');
}
