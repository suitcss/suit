/**
 * Module dependencies
 */
var assign = require('object-assign-deep');
var without = require('lodash/array/without');
var last = require('lodash/array/last');
var autoprefixer = require('autoprefixer');
var bemLinter = require('postcss-bem-linter');
var postcss = require('postcss');
var cssnano = require('cssnano');
var reporter = require('postcss-reporter');

/**
 * Module export
 */

module.exports = preprocessor;

/**
 * Default options to PostCSS plugins
 */

var defaults = {
  minify: undefined,
  use: [
    'postcss-import',
    'postcss-custom-properties',
    'postcss-calc',
    'postcss-custom-media',
    'autoprefixer',
    'postcss-reporter'
  ],
  'postcss-import': {
    root: undefined,
    onImport: function(imported) {
      // Update the watch task with the list of imported files
      if (typeof global.watchCSS === 'function') {
        global.watchCSS(imported);
      }
    }
  },
  'postcss-reporter': {
      clearMessages: true
  },
  // http://cssnano.co/optimisations/
  cssnano: {
    calc: false,
    autoprefixer: false,
    mergeRules: false,
    // Disable unsafe optimisations
    zindex: false,
    discardUnused: false,
    reduceIdents: false,
    mergeIdents: false
  }
};


/**
 * Process CSS
 *
 * @param {String} css
 * @returns {String}
 */

function preprocessor(css, options) {
  if (typeof css !== 'string') {
    throw new Error('suitcss-preprocessor: did not receive a String');
  }

  options = mergeOptions(options);

  var plugins = options.use.map(function (p) {
    var plugin = require(p);
    settings = options[p];

    return settings ? plugin(settings) : plugin;
  });

  var processor = postcss(plugins);

  if (options.minify) {
    processor.use(cssnano(options.cssnano));
  }

  return processor.process(css);
}

/**
 * Merge options with defaults and set root
 *
 * @param {Object} options
 * @returns {Object} Merged options object
 */

function mergeOptions(options) {
  options = options || {};
  options.config = options.config || {};

  var merged = assign({}, defaults, options.config);

  // Set some core options
  merged.minify = options.minify;
  merged['postcss-import'].root = options.root;
  merged['postcss-import'].transform = lintImportedFiles(merged);

  // Ensure postcss-reporter is always the final plugin
  if (last(merged.use) !== 'postcss-reporter') {
    var plugins = without(merged.use, 'postcss-reporter');
    plugins.push('postcss-reporter');
    merged.use = plugins;
  }

  return merged;
}

/**
 * Returns a function to be used by postcss-import
 * Lint each imported component with postcss-bem-linter
 *
 * @param {Object} options
 * @returns {Function} Used by postcss-import transform
 */
function lintImportedFiles(options) {
  return function (css, filename) {
    return postcss([
      bemLinter(options['postcss-bem-linter']),
      reporter(options['postcss-reporter'])
    ]).process(css, {from: filename}).css;
  };
}

