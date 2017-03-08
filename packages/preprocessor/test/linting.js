var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var suitcss = require('../lib');
var util = require('./util');

var expect = chai.expect;

chai.use(chaiAsPromised);

describe('postcss-bem-linter', function() {
  it('should pass if component conforms', function() {
    return expect(
      suitcss('/** @define Foo */\n\n.Foo { color: red; }\n', {
        'postcss-reporter': {
          throwError: true
        }
      })
    ).to.be.fulfilled;
  });

  it('should fail if component does not conform', function() {
    return expect(
      suitcss('/** @define Foo */\n\n.foo { color: red; }\n', {
        'postcss-reporter': {
          throwError: true
        }
      })
    ).to.be.rejectedWith(Error, 'postcss-reporter: warnings or errors were found');
  });
});

describe('stylelint', function() {
  it('should lint the component', function() {
    return expect(
      suitcss(util.read('fixtures/component'), {
        root: 'test/fixtures',
        'postcss-reporter': {
          throwError: true
        }
      })
    ).to.be.fulfilled;
  });

  it('should allow the config to be overidden', function() {
    return expect(
      suitcss('@import "./stylelint.css"\n\n', {
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
      suitcss('@import "./stylelint.css"\n\n', {
        root: 'test/fixtures',
        'postcss-reporter': {
          throwError: true
        }
      })
    ).to.be.rejectedWith(Error, 'postcss-reporter: warnings or errors were found');
  });

  it('should lint the input file', function() {
    return expect(
      suitcss('@import "./stylelint.css"\n\n', {
        root: 'test/fixtures',
        'postcss-reporter': {
          throwError: true
        }
      })
    ).to.be.rejectedWith(Error, 'postcss-reporter: warnings or errors were found');
  });
});

describe('disabling linting', function() {
  it('should not run stylelint or postcss-bem-linter', function() {
    return expect(
      suitcss('/** @define Foo */\n\n.foo {color: red;}', {
        lint: false,
        'postcss-reporter': {
          throwError: true
        }
      })
    ).to.be.fulfilled;
  });
});
