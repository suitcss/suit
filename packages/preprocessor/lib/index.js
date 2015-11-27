/**
 * Module dependencies
 */
var assign = require('object-assign-deep');
var isEmpty = require('lodash.isempty');
var difference = require('lodash.difference');
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
  minify: false,
  use: [
    'postcss-import',
    'postcss-custom-properties',
    'postcss-calc',
    'postcss-custom-media',
    'autoprefixer',
    'postcss-reporter'
  ],
  'postcss-import': {
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
 * @returns {Promise}
 */

function preprocessor(css, options) {
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

  // Call beforeLint function and pass processed css to bem-linter
  var beforeLint = options.beforeLint;
  merged['postcss-import'].transform = function(css, filename) {
    if (typeof beforeLint === 'function') {
      css = beforeLint(css, filename, merged);
    }
    return lintImportedFiles(merged)(css, filename);
  };

  // Allow additional plugins to be merged with the defaults
  // but remove any duplicates so that it respects the new order
  if (!isEmpty(options.config.use)) {
    var dedupedPlugins = difference(merged.use, options.config.use);
    merged.use = dedupedPlugins.concat(options.config.use);
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

