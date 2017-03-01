'use strict';

const hasLessInterpolation = require('./hasLessInterpolation');
const hasPsvInterpolation = require('./hasPsvInterpolation');
const hasScssInterpolation = require('./hasScssInterpolation');
/**
 * Check whether a string has interpolation
 *
 * @param {string} string
 * @return {boolean} If `true`, a string has interpolation
 */
module.exports = function(string) {
  // SCSS or Less interpolation
  if (hasLessInterpolation(string) || hasScssInterpolation(string) || hasPsvInterpolation(string)) {
    return true;
  }

  return false;
};