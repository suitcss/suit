module.exports = {
  beforeLint: function (css) {
    console.log('beforeLint ran');
    return css;
  },
  use: [
    "postcss-property-lookup"
  ]
};
