'use strict';

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const suitcss = require('../../lib');
const util = require('../util');

const expect = chai.expect;

chai.use(chaiAsPromised);

describe('encapsulation', () => {
  it('should reset inherited and non inherited properties', done => {
    const input = util.read('fixtures/encapsulation');
    const output = util.read('fixtures/encapsulation.out');

    suitcss(input, {
      encapsulate: true,
      root: 'test/fixtures',
      lint: false,
      // Set browsers to 'Chrome 50'
      // for a predictable result
      autoprefixer: {
        browsers: 'Chrome 50'
      }
    }).then(result => {
      expect(result.css.trim()).to.be.equal(output.trim());
      done();
    }).catch(done);
  });

  describe('plugins', () => {
    const getPluginsNames = result =>
      (result.processor.plugins || []).map(plugin => plugin.postcssPlugin);

    it('should insert the encapsulationPlugins to the `plugins` array', done => {
      suitcss('body {}', {
        encapsulate: true,
        lint: false
      }).then(result => {
        const plugins = getPluginsNames(result);
        expect(plugins).to.include('autoreset-suitcss-encapsulation-inherited');
        expect(plugins).to.include('autoreset-suitcss-encapsulation-nonInherited');
        done();
      }).catch(done);
    });

    it('should insert the encapsulationPlugins before `autoprefixer`', done => {
      suitcss('body {}', {
        encapsulate: true,
        lint: false
      }).then(result => {
        const plugins = getPluginsNames(result);
        const autoprefixerIndex = plugins.indexOf('autoprefixer');
        expect(autoprefixerIndex).to.be.above(plugins.indexOf('autoreset-suitcss-encapsulation-inherited'));
        expect(autoprefixerIndex).to.be.above(plugins.indexOf('autoreset-suitcss-encapsulation-nonInherited'));
        done();
      }).catch(done);
    });
  });
});
