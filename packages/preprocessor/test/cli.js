'use strict';

const chai = require('chai');
const child = require('child_process');
const util = require('./util');

const exec = child.exec;
const expect = chai.expect;

describe('cli', () => {
  const input = util.read('fixtures/cli/input');
  const output = util.read('fixtures/cli/input.out');

  afterEach(() => {
    util.remove('fixtures/cli/output');
  });

  it('should read from a file and write to a file', done => {
    exec('node bin/suitcss -c test/config/noautoprefixer.js test/fixtures/cli/input.css test/fixtures/cli/output.css', err => {
      if (err) return done(err);
      const res = util.read('fixtures/cli/output');
      expect(res).to.equal(output);
      done();
    });
  });

  it('should read from a file and write to stdout', done => {
    exec('node bin/suitcss -L -c test/config/noautoprefixer.js test/fixtures/cli/input.css', (err, stdout) => {
      if (err) return done(err);
      expect(stdout).to.equal(output);
      done();
    });
  });

  it('should read from stdin and write to stdout', done => {
    const testChild = exec('node bin/suitcss -L -c test/config/noautoprefixer.js', (err, stdout) => {
      if (err) return done(err);
      expect(stdout).to.equal(output);
      done();
    });

    testChild.stdin.write(new Buffer(input));
    testChild.stdin.end();
  });

  it('should log on verbose', done => {
    exec('node bin/suitcss -v  -c test/config/noautoprefixer.js test/fixtures/cli/input.css test/fixtures/cli/output.css', (err, stdout) => {
      if (err) return done(err);
      expect(stdout).to.contain('write');
      done();
    });
  });

  it('should allow configurable import root', done => {
    exec('node bin/suitcss -i test/fixtures -c test/config/noautoprefixer.js test/fixtures/import.css test/fixtures/cli/output.css', err => {
      if (err) return done(err);
      const res = util.read('fixtures/cli/output');
      const expected = util.read('fixtures/component.out');
      expect(res).to.equal(expected);
      done();
    });
  });

  it('should output stylelint warnings', done => {
    exec('node bin/suitcss -i test/fixtures -c test/config/noautoprefixer.js test/fixtures/stylelint-import.css test/fixtures/cli/output.css -l', (err, stdout) => {
      if (err) return done(err);
      expect(stdout).to.contain('Expected indentation of 2 spaces');
      done();
    });
  });

  it('should minify the output', done => {
    exec('node bin/suitcss -i test/fixtures -c test/config/noautoprefixer.js test/fixtures/import.css test/fixtures/cli/output.css -m', err => {
      if (err) return done(err);
      const res = util.read('fixtures/cli/output');
      const expected = util.read('fixtures/minify.out');
      expect(res).to.equal(expected);
      done();
    });
  });

  it('should allow a config module to be passed', done => {
    exec('node bin/suitcss -i test/fixtures -c test/config/test.js test/fixtures/config.css test/fixtures/cli/output.css', err => {
      if (err) return done(err);
      const res = util.read('fixtures/cli/output');
      const expected = util.read('fixtures/config.out');
      expect(res).to.equal(expected);
      done();
    });
  });

  it('should allow an arbitrarily named json config file to be passed', done => {
    exec('node bin/suitcss -i test/fixtures -c test/config/test.config test/fixtures/config.css test/fixtures/cli/output.css', err => {
      if (err) return done(err);
      const res = util.read('fixtures/cli/output');
      const expected = util.read('fixtures/config.out');
      expect(res).to.equal(expected);
      done();
    });
  });

  it('should allow to override config options via cli flags', done => {
    exec('node bin/suitcss -m -c test/config/test.js test/fixtures/import.css test/fixtures/cli/output.css', err => {
      if (err) return done(err);
      const res = util.read('fixtures/cli/output');
      const commentsPattern = /\/\*[^]*?\*\//g;
      expect(res).to.not.match(commentsPattern);
      done();
    });
  });

  it('should preserve config options when not passing cli flags', done => {
    exec('node bin/suitcss -c test/config/cli-undefined-flags.js test/fixtures/import.css test/fixtures/cli/output.css', err => {
      if (err) return done(err);
      const res = util.read('fixtures/cli/output');
      const commentsPattern = /\/\*[^]*?\*\//g;
      expect(res).to.not.match(commentsPattern);
      done();
    });
  });

  it('should output an error to stderr on conformance failure when --throw-error is set', done => {
    exec('node bin/suitcss -i test/fixtures -e test/fixtures/import-error.css test/fixtures/cli/output.css', (err, stdout, stderr) => {
      expect(err).to.be.an('error');
      expect(err.code).to.equal(1);
      expect(stderr).to.contain('postcss-reporter: warnings or errors were found');
      done();
    });
  });

  it('should log on non-existant file', done => {
    exec('node bin/suitcss -c test/config/noautoprefixer.js test/fixtures/cli/non-existant.css', (err, stdout, stderr) => {
      expect(err).to.be.an('error');
      expect(err.code).to.equal(1);
      expect(stderr).to.contain('not found');
      done();
    });
  });

  describe('--importRoot', () => {
    it('should be able to override root in a config file with importRoot', done => {
      exec('node bin/suitcss -c test/config/root-fake.js -i ./test/fixtures ./test/fixtures/import.css test/fixtures/cli/output.css', err => {
        expect(err).to.be.null;
        done();
      });
    });

    it('should use the config root option if importRoot is undefined', done => {
      exec('node bin/suitcss -c test/config/root-real.js ./test/fixtures/import.css test/fixtures/cli/output.css', err => {
        expect(err).to.be.null;
        done();
      });
    });
  });
});

