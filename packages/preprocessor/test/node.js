'use strict';

const chai = require('chai');
const suitcss = require('../lib');
const util = require('./util');

const expect = chai.expect;

describe('node API', () => {
  it('should return a css string', done => {
    suitcss('body {}', {
      lint: false
    }).then(result => {
      expect(result.css).to.be.a('string');
      done();
    });
  });

  it('should handle invalid input', () => {
    expect(() => {
      suitcss(null, {lint: false});
    }).to.throw(TypeError);
  });

  it('should preprocess CSS correctly', done => {
    const input = util.read('fixtures/component');
    const output = util.read('fixtures/component.out');

    suitcss(input, {
      root: 'test/fixtures',
      lint: false,
      // disable autoprefixer
      autoprefixer: {add: false, remove: false}
    }).then(result => {
      expect(result.css.trim()).to.be.equal(output.trim());
      done();
    }).catch(done);
  });

  it('should add vendor prefixes', done => {
    const input = '.test { filter: blur(1px) }';
    const output = '.test { -webkit-filter: blur(1px); filter: blur(1px) }';

    suitcss(input, {
      lint: false,
      autoprefixer: {
        browsers: 'Chrome 50'
      }
    }).then(result => {
      expect(result.css.trim()).to.be.equal(output.trim());
      done();
    }).catch(done);
  });
});
