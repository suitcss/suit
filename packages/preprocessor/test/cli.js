var chai = require('chai');
var child = require('child_process');
var util = require('./util');
var exec = child.exec;
var expect = chai.expect;

describe('cli', function() {
  var input = util.read('fixtures/cli/input');
  var output = util.read('fixtures/cli/input.out');

  afterEach(function() {
    util.remove('fixtures/cli/output');
  });

  it('should read from a file and write to a file', function(done) {
    exec('node bin/suitcss -c test/config/noautoprefixer.js test/fixtures/cli/input.css test/fixtures/cli/output.css', function(err) {
      if (err) return done(err);
      var res = util.read('fixtures/cli/output');
      expect(res).to.equal(output);
      done();
    });
  });

  it('should read from a file and write to stdout', function(done) {
    exec('node bin/suitcss -L -c test/config/noautoprefixer.js test/fixtures/cli/input.css', function(err, stdout) {
      if (err) return done(err);
      expect(stdout).to.equal(output);
      done();
    });
  });

  it('should read from stdin and write to stdout', function(done) {
    var testChild = exec('node bin/suitcss -L -c test/config/noautoprefixer.js', function(err, stdout) {
      if (err) return done(err);
      expect(stdout).to.equal(output);
      done();
    });

    testChild.stdin.write(new Buffer(input));
    testChild.stdin.end();
  });

  it('should log on verbose', function(done) {
    exec('node bin/suitcss -v  -c test/config/noautoprefixer.js test/fixtures/cli/input.css test/fixtures/cli/output.css', function(err, stdout) {
      if (err) return done(err);
      expect(stdout).to.contain('write');
      done();
    });
  });

  it('should allow configurable import root', function(done) {
    exec('node bin/suitcss -i test/fixtures -c test/config/noautoprefixer.js test/fixtures/import.css test/fixtures/cli/output.css', function(err) {
      if (err) return done(err);
      var res = util.read('fixtures/cli/output');
      var expected = util.read('fixtures/component.out');
      expect(res).to.equal(expected);
      done();
    });
  });

  it('should output stylelint warnings', function(done) {
    exec('node bin/suitcss -i test/fixtures -c test/config/noautoprefixer.js test/fixtures/stylelint-import.css test/fixtures/cli/output.css -l', function(err, stdout) {
      if (err) return done(err);
      expect(stdout).to.contain('Expected indentation of 2 spaces');
      done();
    });
  });

  it('should minify the output', function(done) {
    exec('node bin/suitcss -i test/fixtures -c test/config/noautoprefixer.js test/fixtures/import.css test/fixtures/cli/output.css -m', function(err) {
      if (err) return done(err);
      var res = util.read('fixtures/cli/output');
      var expected = util.read('fixtures/minify.out');
      expect(res).to.equal(expected);
      done();
    });
  });

  it('should allow a config file to be passed', function(done) {
    exec('node bin/suitcss -i test/fixtures -c test/config/test.js test/fixtures/config.css test/fixtures/cli/output.css', function(err) {
      if (err) return done(err);
      var res = util.read('fixtures/cli/output');
      var expected = util.read('fixtures/config.out');
      expect(res).to.equal(expected);
      done();
    });
  });

  it('should allow to override config options via cli flags', function(done) {
    exec('node bin/suitcss -L -c test/config/test.js test/fixtures/import.css test/fixtures/cli/output.css', function(err) {
      if (err) return done(err);
      var res = util.read('fixtures/cli/output');
      var commentsPattern = /\/\*[^]*?\*\//g;
      expect(res).to.match(commentsPattern);
      done();
    });
  });

  it('should output an error to stderr on conformance failure when --throw-error is set', function(done) {
    exec('node bin/suitcss -i test/fixtures -e test/fixtures/import-error.css test/fixtures/cli/output.css', function(err, stdout, stderr) {
      expect(err).to.be.an('error');
      expect(err.code).to.equal(1);
      expect(stderr).to.contain('postcss-reporter: warnings or errors were found');
      done();
    });
  });

  it('should log on non-existant file', function(done) {
    exec('node bin/suitcss -c test/config/noautoprefixer.js test/fixtures/cli/non-existant.css', function(err, stdout, stderr) {
      expect(err).to.be.an('error');
      expect(err.code).to.equal(1);
      expect(stderr).to.contain('not found');
      done();
    });
  });
});

