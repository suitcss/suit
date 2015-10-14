var postcss = require('postcss');
var bemLinter = require('postcss-bem-linter');
var reporter = require('postcss-reporter');

module.exports = {
  use: [
    "postcss-import",
    "postcss-custom-properties",
    "postcss-custom-media",
    "postcss-calc",
    "autoprefixer",
    "postcss-reporter"
  ],
  "postcss-import": {
    transform: function(css, filename) {
      return postcss([bemLinter, reporter]).process(css, {from: filename}).css;
    }
  },
  "postcss-reporter": {
    clearMessages: true
  }
};
