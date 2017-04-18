'use strict';

const assign = require('object-assign-deep');
const autoprefixer = require('autoprefixer');
const bemLinter = require('postcss-bem-linter');
const cssnano = require('cssnano');
const difference = require('lodash.difference');
const encapsulationPlugins = require('./encapsulation');
const fs = require('fs');
const isEmpty = require('lodash.isempty');
const isPromise = require('is-promise');
const pify = require('pify');
const postcssEasyImport = require('postcss-easy-import');
const reporter = require('postcss-reporter');
const stylelint = require('stylelint');
const stylelintConfigSuit = require('stylelint-config-suitcss');
let postcss = require('postcss'); // eslint-disable-line prefer-const

module.exports = preprocessor;

/**
 * Default configuration
 * and options to PostCSS plugins
 */

const defaults = {
  debug: identity,
  lint: true,
  minify: false,
  encapsulate: false,
  use: [
    'postcss-custom-properties',
    'postcss-calc',
    'postcss-color-function',
    'postcss-custom-media',
    'postcss-apply'
  ],
  autoprefixer: {
    browsers: `> 1%, last 2 versions, safari > 6, ie > 9,
    ios > 6, android > 4.3, samsung > 3, chromeandroid > 50`
  },
  'postcss-easy-import': {
    load: getFileContent,
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
 * @param {Object} options
 * @param {String} filename
 * @returns {Promise}
 */

function preprocessor(css, options, filename) {
  options = mergeOptions(options);

  let plugins = [
    postcssEasyImport(options['postcss-easy-import'])
  ];

  plugins = plugins.concat(
    options.use.map(p => {
      const plugin = require(p);
      const settings = options[p];
      return settings ? plugin(settings) : plugin;
    })
  );

  if (options.encapsulate) {
    plugins = plugins.concat([
      encapsulationPlugins.resetGeneric,
      encapsulationPlugins.resetInherited
    ]);
  }

  // autoprefixer and postcss-reporter
  // should always be the last plugin
  plugins = plugins.concat([
    autoprefixer(options.autoprefixer),
    reporter(options['postcss-reporter'])
  ]);

  const processor = postcss(options.debug(plugins));

  if (options.minify) {
    processor.use(cssnano(options.cssnano));
  }

  return lintFile(css, options, filename)
    .then(result => processor.process(result.css, options.postcss));
}

/**
 * Merge options with defaults and set root
 *
 * @param {Object} options
 * @returns {Object} Merged options object
 */

function mergeOptions(options) {
  options = options || {};
  const mergedOpts = assign({}, defaults, options);
  const easyImportOpts = mergedOpts['postcss-easy-import'];
  const origLoad = easyImportOpts.load;
  const origOnImport = easyImportOpts.onImport;

  if (mergedOpts.root) {
    easyImportOpts.root = mergedOpts.root;
  }

  easyImportOpts.load = filename => {
    const transformedCss = origLoad(filename);
    return lintFile(transformedCss, mergedOpts, filename)
      .then(result => result.css);
  };

  easyImportOpts.onImport = importedFiles => {
    updateWatchTaskFiles(importedFiles);
    origOnImport(importedFiles);
  };

  // Allow additional plugins to be merged with the defaults
  // but remove any duplicates so that it respects the new order
  if (!isEmpty(options.use)) {
    const plugins = difference(mergedOpts.use, options.use);
    // Remove core plugins. Can't reorder them
    const userPlugins = difference(options.use, [
      'postcss-easy-import',
      'autoprefixer',
      'postcss-reporter'
    ]);
    mergedOpts.use = plugins.concat(userPlugins);
  }
  return mergedOpts;
}

/**
 * Lint component with postcss-bem-linter and stylelint
 *
 * @param {String} css
 * @param {Object} options
 * @param {String} filename
 * @returns {Promise} Used by postcss-import transform
 */
function lintFile(css, options, filename) {
  const processor = postcss();

  if (options.lint) {
    processor
      .use(stylelint(options.stylelint || stylelintConfigSuit))
      .use(bemLinter(options['postcss-bem-linter']));
  }

  // Merge filename alongside any other `postcss` options
  assign(options, {
    postcss: {from: filename}
  });

  processor
    .use(reporter(options['postcss-reporter']));

  if (isPromise(css)) {
    return css.then(css => processor.process(css, options.postcss)); // eslint-disable-line no-shadow
  }

  return processor.process(css, options.postcss);
}

function noop() {}

function getFileContent(filename) {
  return pify(fs.readFile)(filename, 'utf8');
}

function identity(x) {
  return x;
}

function updateWatchTaskFiles(files) {
  if (typeof global.watchCSS === 'function') {
    global.watchCSS(files);
  }
}
