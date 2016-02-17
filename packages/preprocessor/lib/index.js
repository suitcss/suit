/**
 * Module dependencies
 */
var assign = require('object-assign-deep');
var isEmpty = require('lodash.isempty');
var difference = require('lodash.difference');
var bemLinter = require('postcss-bem-linter');
var postcss = require('postcss');
var cssnano = require('cssnano');
var reporter = require('postcss-reporter');
var stylelint = require('stylelint');

/**
 * Module export
 */

module.exports = preprocessor;

/**
 * Default options to PostCSS plugins
 */

var defaults = {
  minify: false,
  lint: false,
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
    safe: true
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

  var plugins = options.use.map(function(p) {
    var plugin = require(p);
    var settings = options[p];

    return settings ? plugin(settings) : plugin;
  });

  var processor = postcss(plugins);

  if (options.minify) {
    processor.use(cssnano(options.cssnano));
  }

  return processor.process(css, options.postcss);
}

/**
 * Merge options with defaults and set root
 *
 * @param {Object} options
 * @returns {Object} Merged options object
 */

function mergeOptions(options) {
  options = options || {};

  var merged = assign({}, defaults, options);

  // Set some core options
  if (merged.root) {
    merged['postcss-import'].root = merged.root;
  }

  // Call beforeLint function and pass processed css to bem-linter
  var beforeLint = merged.beforeLint;
  merged['postcss-import'].transform = function(css, filename) {
    if (typeof beforeLint === 'function') {
      css = beforeLint(css, filename, merged);
    }

    return lintImportedFiles(merged, css, filename).then(function(result) {
      return result.css;
    });
  };

  // Allow additional plugins to be merged with the defaults
  // but remove any duplicates so that it respects the new order
  if (!isEmpty(options.use)) {
    var plugins = difference(merged.use, options.use);
    merged.use = plugins.concat(options.use);
  }

  return merged;
}

/**
 * Lint each imported component with postcss-bem-linter
 * and stylelint
 *
 * @param {Object} options
 * @returns {Promise} Used by postcss-import transform
 */
function lintImportedFiles(options, css, filename) {
  var processor = postcss();

  if (options.lint) {
    processor.use(stylelint(options.stylelint));
  }

  processor
    .use(bemLinter(options['postcss-bem-linter']))
    .use(reporter(options['postcss-reporter']));

  return processor.process(css, {from: filename});
}
