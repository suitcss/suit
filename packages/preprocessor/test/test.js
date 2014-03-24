var assert = require('assert');
var child = require('child_process');
var exec = child.exec;
var spawn = child.spawn;
var fs = require('fs');
var suitcss = require('../lib/index.js');
var path = require('path');
var Stream = require('stream').Readable;

var features = [
  'calc',
  'prefixes',
  'vars'
];

/**
 * Node API tests.
 */

describe('suitcss', function () {
  it('should return a css string', function () {
    assert('string' == typeof suitcss('body {}'));
  });
});

/**
 * Feature tests.
 */

describe('features', function () {
  features.forEach(function (name) {
    it('should add ' + name + ' support', function () {
      var input = read('features/' + name);
      var output = read('features/' + name + '.out');
      assert.equal(suitcss(input).trim(), output.trim());
    });
  });
});

/**
 * CLI tests.
 */

describe('cli', function () {
  var input = read('cli/input');
  var output = read('cli/input.out');

  afterEach(function () {
    remove('cli/output');
  });

  it('should read from a file and write to a file', function (done) {
    exec('bin/suitcss test/cli/input.css test/cli/output.css', function (err, stdout) {
      if (err) return done(err);
      var res = read('cli/output');
      assert.equal(res, output);
      done();
    });
  });

  it('should read from a file and write to stdout', function (done) {
    exec('bin/suitcss test/cli/input.css', function (err, stdout) {
      if (err) return done(err);
      assert.equal(stdout, output);
      done();
    });
  });

  it('should read from stdin and write to stdout', function (done) {
    var child = exec('bin/suitcss', function (err, stdout) {
      if (err) return done(err);
      assert.equal(stdout, output);
      done();
    });

    child.stdin.write(new Buffer(input));
    child.stdin.end();
  });

  it('should log on verbose', function (done) {
    exec('bin/suitcss -v test/cli/input.css test/cli/output.css', function (err, stdout) {
      if (err) return done(err);
      assert(-1 != stdout.indexOf('write'));
      done();
    });
  });

  it('should log on non-existant file', function (done) {
    exec('bin/suitcss test/cli/non-existant.css', function (err, stdout, stderr) {
      assert(err);
      assert(err.code == 1);
      assert(-1 != stderr.indexOf('not found'));
      done();
    });
  });

  xit('should print a nice error', function (done) {
    exec('bin/suitcss test/cli/error.css', function (err, stdout, stderr) {
      assert(err);
      assert(err.code == 1);
      assert(-1 != stderr.indexOf('error'));
      assert(-1 != stderr.indexOf('SyntaxError: Missing closing parentheses'));
      assert(-1 != stderr.indexOf('at '));
      assert(-1 != stderr.indexOf('15'));
      assert(-1 != stderr.indexOf('var('));
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
