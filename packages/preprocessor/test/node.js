var chai = require('chai');
var suitcss = require('../lib');
var util = require('./util');
var expect = chai.expect;

describe('node API', function() {
  it('should return a css string', function(done) {
    suitcss('body {}', {lint: false}).then(function(result) {
      expect(result.css).to.be.a('string');
      done();
    });
  });

  it('should handle invalid input', function() {
    expect(function() {
      suitcss(null, {lint: false});
    }).to.throw(TypeError);
  });

  it('should preprocess CSS correctly', function(done) {
    var input = util.read('fixtures/component');
    var output = util.read('fixtures/component.out');

    suitcss(input, {
      root: 'test/fixtures',
      lint: false,
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
      lint: false,
      autoprefixer: {
        browsers: 'Chrome 50'
      }
    }).then(function(result) {
      expect(result.css.trim()).to.be.equal(output.trim());
      done();
    }).catch(done);
  });
});
