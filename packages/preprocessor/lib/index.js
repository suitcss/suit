var assign = require('object-assign-deep');
var isEmpty = require('lodash.isempty');
var difference = require('lodash.difference');
var bemLinter = require('postcss-bem-linter');
var postcss = require('postcss');
var cssnano = require('cssnano');
var reporter = require('postcss-reporter');
var stylelint = require('stylelint');
var stylelintConfigSuit = require('stylelint-config-suitcss');

module.exports = preprocessor;

/**
 * Default configuration
 * and options to PostCSS plugins
 */

var defaults = {
  debug: identity,
  lint: false,
  minify: false,
  use: [
    'postcss-easy-import',
    'postcss-custom-properties',
    'postcss-calc',
    'postcss-custom-media',
    'autoprefixer',
    'postcss-reporter'
  ],
  autoprefixer: {
    browsers: '> 1%, last 2 versions, safari > 6, ie > 9, ' +
      'ios > 6, android > 4.3, samsung > 3, chromeandroid > 50'
  },
  'postcss-easy-import': {
    transform: identity,
    onImport: noop
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

  var processor = postcss(options.debug(plugins));

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
  var mergedOpts = assign({}, defaults, options);
  var easyImportOpts = mergedOpts['postcss-easy-import'];
  var origTransform = easyImportOpts.transform;
  var origOnImport = easyImportOpts.onImport;

  if (mergedOpts.root) {
    easyImportOpts.root = mergedOpts.root;
  }

  easyImportOpts.transform = function(css, filename) {
    var transformedCss = origTransform(css);
    return lintImportedFiles(mergedOpts, transformedCss, filename).then(function(result) {
      return result.css;
    });
  };

  easyImportOpts.onImport = function(importedFiles) {
    updateWatchTaskFiles(importedFiles);
    origOnImport(importedFiles);
  };

  // Allow additional plugins to be merged with the defaults
  // but remove any duplicates so that it respects the new order
  if (!isEmpty(options.use)) {
    var plugins = difference(mergedOpts.use, options.use);
    mergedOpts.use = plugins.concat(options.use);
  }

  return mergedOpts;
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
    processor.use(stylelint(options.stylelint || stylelintConfigSuit));
  }

  processor
    .use(bemLinter(options['postcss-bem-linter']))
    .use(reporter(options['postcss-reporter']));

  if (isPromise(css)) {
    return css.then(function(css) { // eslint-disable-line no-shadow
      return processor.process(css, {from: filename});
    });
  }

  return processor.process(css, {from: filename});
}

function isPromise(obj) {
  return typeof obj.then === 'function';
}

function noop() {}

function identity(x) {
  return x;
}

function updateWatchTaskFiles(files) {
  if (typeof global.watchCSS === 'function') {
    global.watchCSS(files);
  }
}
