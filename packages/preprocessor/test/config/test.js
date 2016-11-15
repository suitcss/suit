module.exports = {
  lint: true,
  minify: false,
  use: [
    'postcss-property-lookup'
  ],
  autoprefixer: {
    add: false,
    remove: false
  }
};
