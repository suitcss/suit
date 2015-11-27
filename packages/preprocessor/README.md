# suitcss-preprocessor

[![Build Status](https://travis-ci.org/suitcss/preprocessor.png)](http://travis-ci.org/suitcss/preprocessor)

[SUIT CSS](https://github.com/suitcss/suit) preprocessor.

Provides a CLI and Node.js interface for a preprocessor that combines
various [PostCSS](https://github.com/postcss/postcss) plugins.

Compiles CSS packages with:

* [postcss-import](https://github.com/postcss/postcss-import)
* [postcss-custom-properties](https://github.com/postcss/postcss-custom-media)
* [postcss-calc](https://github.com/postcss/postcss-calc)
* [postcss-custom-media](https://github.com/postcss/postcss-custom-media)
* [autoprefixer](https://github.com/postcss/autoprefixer)

Each imported file is linted with [postcss-bem-linter](https://github.com/postcss/postcss-bem-linter) and minification is provided by [cssnano](http://cssnano.co/). Additional plugins can be added via the configuration options.

## Installation

```
npm install suitcss-preprocessor
```

## Usage

```
suitcss input.css output.css
```

## API

### Command Line

```
Usage: suitcss [<input>] [<output>]

Options:

  -h, --help                output usage information
  -V, --version             output the version number
  -m, --minify              minify output with cssnano
  -i, --import-root [path]  the root directory for imported css files
  -c, --config [path]       a custom PostCSS config file
  -v, --verbose             log verbose output for debugging
  -w, --watch               watch the input file and any imports for changes

Examples:

  # pass an input and output file:
  $ suitcss input.css output.css

  # configure the import root directory:
  $ suitcss --import-root src/css input.css output.css

  # watch the input file and imports for changes:
  $ suitcss --watch input.css output.css

  # configure postcss plugins with a config file:
  $ suitcss --config config.js input.css output.css

  # unix-style piping to stdin and stdout:
  $ cat input.css | suitcss | grep background-color
```

### Node.js

Returns a [PostCSS promise](https://github.com/postcss/postcss/blob/master/docs/api.md#lazyresult-class)

```js
var preprocessor = require('suitcss-preprocessor');
var fs = require('fs');

var css = fs.readFileSync('src/components/index.css', 'utf8');

preprocessor(css, {
  root: 'path/to/css',
  minify: true,
}).then(function(result) {
  fs.writeFileSync('build/bundle.css', result.css);
});
```

#### Options

##### `root`

* Type: `String`
* Default: `process.cwd()`

Where to resolve imports from. Passed to [`postcss-import`](https://github.com/postcss/postcss-import/blob/master/README.md#root).

##### `minify`

* Type: `Boolean`
* Default: `false`

If set to `true` then the output is minified by [`cssnano`](http://cssnano.co/).

##### `beforeLint`

* Type: `Function`
* Default: `false`

Called with the imported CSS before it's passed to `postcss-bem-linter`. This allows you to transform the CSS first and it must return the css string.

Third paramater is the options object containing any PostCSS configuration you may need.

```js
{
  beforeLint(css, filename, options) {
    // Do something to the imported css
    return css;
  }
}
```

##### `config`

* Type: `Object`
* Default: [various](https://github.com/suitcss/preprocessor/blob/master/lib/index.js#L23)

A list of plugins and their options that are passed to PostCSS. This can be used to add new plugins and/or configure existing ones.

```js
config: {
  use: ['stylelint', 'postcss-property-lookup'],
  autoprefixer: { browsers: ['> 1%', 'IE 7'], cascade: false },
  'postcss-calc': { preserve: true }
}
```

### Plugin configuration

Creating a configuration file allows options to be passed to the individual PostCSS plugins. It can be passed to the `suitcss` CLI via the `-c` flag and can be either JavaScript or JSON

```js
module.exports = {
  root: 'path/to/css',
  autoprefixer: { browsers: ['> 1%', 'IE 7'], cascade: false },
  'postcss-calc': { preserve: true }
}
```

```js
{
  "root": "path/to/css",
  "autoprefixer": { "browsers": ["> 1%", "IE 7"], "cascade": false },
  "postcss-calc": { "preserve": true }
}
```

Options are merged recursively with the defaults. For example, adding new plugins to the `use` array will result in them being merged alongside the existing ones.

#### Adding additional plugins

By default the preprocessor uses all necessary plugins to build SUIT components. However additional plugins can be installed into a project and then added to the `use` array.

**Note**: This will not work with the preprocessor installed globally. Instead rely on the convenience of `npm run <script>`

```js
module.exports = {
  use: [
    'postcss-property-lookup'
  ]
};
```

```js
{
  "name": "my-pkg",
  "version": "0.1.0",
  "dependencies": {
    "postcss-property-lookup": "^1.1.3",
    "suitcss-preprocessor": "^0.5.0"
  },
  "scripts": {
    "preprocess": "suitcss -c myconfig.js index.css build/built.css"
  }
}
```

```
npm run preprocess
```

#### Changing plugin order

If duplicate plugins are used they will be removed, but the new order will be respected. This is useful if you need to change the default order:

```js
// Default order
var defaults = [
  'postcss-import',
  'postcss-custom-properties',
  'postcss-calc',
  'postcss-custom-media',
  'autoprefixer',
  'postcss-reporter'
];

// config
module.exports = {
  use: [
    'stylelint',
    'postcss-calc',
    'autoprefixer',
    'postcss-reporter'
  ]
};

var result = [
  'postcss-import',
  'postcss-custom-properties',
  'postcss-custom-media',
  'stylelint',
  'postcss-calc',
  'autoprefixer',
  'postcss-reporter'
];
```

## Acknowledgements

Based on [Myth](https://github.com/segmentio/myth) by Segment.io.
