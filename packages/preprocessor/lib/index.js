/**
 * Module dependencies
 */

var autoprefixer = require('autoprefixer');
var rework = require('rework');
var suit = require('rework-suit');

/**
 * Module export
 */

module.exports = preprocessor;

/**
 * Process CSS
 *
 * @param {String} css
 * @return {String}
 */

function preprocessor(css, options) {
  if (typeof css !== 'string') {
    throw new Error('suitcss-preprocessor: did not receive a String');
  }

  options = options || {};

  var browserConfig = options.browsers || [
    'Explorer >= 9',
    'last 2 Chrome versions',
    'last 2 Firefox versions',
    'last 2 Safari versions',
    'last 2 iOS versions',
    'Android 4'
  ];

  css = rework(css, options).use(suit(options)).toString(options);

  // vendor prefixes
  css = autoprefixer(browserConfig).process(css).css;

  return css;
}
