var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var suitcss = require('../../lib');
var util = require('../util');

var expect = chai.expect;

chai.use(chaiAsPromised);

describe('encapsulation', function() {
  it('should reset inherited and non inherited properties', function(done) {
    var input = util.read('fixtures/encapsulation');
    var output = util.read('fixtures/encapsulation.out');

    suitcss(input, {
      encapsulate: true,
      root: 'test/fixtures',
      lint: false,
      // Set browsers to 'Chrome 50'
      // for a predictable result
      autoprefixer: {
        browsers: 'Chrome 50'
      }
    }).then(function(result) {
      expect(result.css.trim()).to.be.equal(output.trim());
      done();
    }).catch(done);
  });

  describe('plugins', function() {
    function getPluginsNames(result) {
      return (result.processor.plugins || []).map(function (plugin) {
        return plugin.postcssPlugin;
      });
    }

    it('should insert the encapsulationPlugins to the `plugins` array', function(done) {
      suitcss('body {}', {
        encapsulate: true,
        lint: false
      }).then(function (result) {
        var plugins = getPluginsNames(result);
        expect(plugins).to.include('autoreset-suitcss-encapsulation-inherited');
        expect(plugins).to.include('autoreset-suitcss-encapsulation-nonInherited');
        done();
      }).catch(done);
    });

    it('should insert the encapsulationPlugins before `autoprefixer`', function(done) {
      suitcss('body {}', {
        encapsulate: true,
        lint: false
      }).then(function (result) {
        var plugins = getPluginsNames(result);
        var autoprefixerIndex = plugins.indexOf('autoprefixer');
        expect(autoprefixerIndex).to.be.above(plugins.indexOf('autoreset-suitcss-encapsulation-inherited'));
        expect(autoprefixerIndex).to.be.above(plugins.indexOf('autoreset-suitcss-encapsulation-nonInherited'));
        done();
      }).catch(done);
    });
  });
});
