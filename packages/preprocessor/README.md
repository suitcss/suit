# suitcss-preprocessor

[![Build Status](https://travis-ci.org/suitcss/preprocessor.svg?branch=master)](https://travis-ci.org/suitcss/preprocessor) [![Build status](https://ci.appveyor.com/api/projects/status/txiwk8cppv3eno3x?svg=true)](https://ci.appveyor.com/project/simonsmith/preprocessor)

[SUIT CSS](https://github.com/suitcss/suit) preprocessor.

Provides a CLI and Node.js interface for a preprocessor that combines
various [PostCSS](https://github.com/postcss/postcss) plugins.

Compiles CSS packages with:

* [postcss-easy-import](https://github.com/TrySound/postcss-easy-import)
* [postcss-custom-properties](https://github.com/postcss/postcss-custom-properties)
* [postcss-calc](https://github.com/postcss/postcss-calc)
* [postcss-autoreset](https://github.com/maximkoretskiy/postcss-autoreset)
* [postcss-color-function](https://github.com/postcss/postcss-color-function)
* [postcss-apply](https://github.com/pascalduez/postcss-apply)
* [postcss-custom-media](https://github.com/postcss/postcss-custom-media)
* [autoprefixer](https://github.com/postcss/autoprefixer)

Each imported file is linted with [postcss-bem-linter](https://github.com/postcss/postcss-bem-linter) and [stylelint](http://stylelint.io/). Minification is provided by [cssnano](http://cssnano.co/).

Additional plugins can be added via the configuration options.

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

Options are [documented below](#options)

```
Usage: suitcss [<input>] [<output>]

Options:

  -h, --help                output usage information
  -c, --config [path]       a custom PostCSS config file
  -i, --import-root [path]  the root directory for imported css files
  -s, --encapsulate         encapsulate component styles
  -w, --watch               watch the input file and any imports for changes
  -m, --minify              minify output with cssnano
  -e, --throw-error         throw an error when any warnings are found
  -L, --no-lint             disable stylelint and postcss-bem-linter
  -v, --verbose             log verbose output for debugging
  -V, --version             output the version number

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

Returns a [PostCSS promise](http://api.postcss.org/LazyResult.html)

```js
preprocessor(css: String [, options: Object] [, filename: String]);
```

* `css`: CSS input (_required_)
* `options`: Options to the preprocessor (see below) (_optional_)
* `filename`: Filename of the input CSS file (_optional_)

#### Example

```js
var preprocessor = require('suitcss-preprocessor');
var fs = require('fs');

var filename = 'src/components/index.css';
var css = fs.readFileSync(filename, 'utf8');

preprocessor(css, {
  root: 'path/to/css',
  minify: true,
}, filename).then(function(result) {
  fs.writeFileSync('build/bundle.css', result.css);
});
```

### Options

#### `root`

* Type: `String`
* Default: `process.cwd()`

Where to resolve imports from. Passed to [`postcss-import`](https://github.com/postcss/postcss-import/blob/master/README.md#root).

#### `debug`

* Type: `Function`
* Default: identity (it does nothing)

Before preprocessing `debug` is invoked on the postcss `plugins` array.
This allows you to pass a [`postcss-debug`](https://www.npmjs.com/package/postcss-debug) instance.

```javascript
var preprocessor = require('suitcss-preprocessor');
var createDebugger = require('postcss-debug').createDebugger;
var debug = createDebugger();

preprocessor(css, {
  debug: debug
}).then(function () {
  debug.inspect();
});
```

N.B. `debug` should always take one argument that is `plugins` and eventually return it:

```javascript
function debug(plugins) {
  // do something with plugins here
  return plugins;
}
```

#### `encapsulate`

_(experimental)_

* Type: `Boolean`
* Default: `false`

Resets CSS properties to their [initial values](https://developer.mozilla.org/en-US/docs/Web/CSS/initial_value)
to effectively allow a component to opt out of CSS inheritance and be
encapsulated from the rest of the application similar to [the Shadow DOM](https://www.w3.org/TR/shadow-dom/).
There are two types of CSS properties that affect components, inherited (e.g.
`font-size,` `color`) and non-inherited (e.g. `margin`, `background`). This
option works so that:

* Root elements (e.g. `.Component`) have both inherited and non-inherited
  properties reset to default values.
* Descendants (e.g. `.Component-item`) only have non-inherited properties reset
  as this allows properties set on the root element to be inherited by its
  descendants.

This means that components are isolated from styles outside the component root
element but should an inheritable property such as `font-size` be applied on the
component root element it will be inherited by the component descendants as
normal. This prevents the need to redeclare properties on every descendant in a
component.

The same rules also apply to nested components.

**Rationale**

One of the difficulties with CSS components is predictability. Unwanted styles
can be inherited from parent components and this can make it difficult to
reuse components in different contexts.

Methodologies such as SUIT and BEM exist to solve problems around the cascade
and specificity but they cannot protect components from inheriting unwanted
styles. What would really help is to allow inheritance to be 'opt-in' and let
component authors decide what properties are inherited. This creates a more
predictable baseline for styling components and promoting easier
reuse.

* [Component Based Style Reuse](https://youtu.be/_70Yp8KPXH8?t=27m45s)
* [React: CSS in JS](http://blog.vjeux.com/2014/javascript/react-css-in-js-nationjs.html)

**Examples**

* [CodePen encapsulate](http://codepen.io/simonsmith/pen/BLOyAX) - Demonstrates
  how components are encapsulated from global and parent styles.
* [CodePen encapsulate inheritance](http://codepen.io/simonsmith/pen/LRgxdp) -
  Similar to above but shows how components can opt-in to inheritance.

**What about `all: initial`?**

The `all: initial` declaration will reset both inherited and non-inherited
properties but this can be too forceful. For example `display` is reset to
`inline` on block elements and as mentioned earlier, descendants of a component
should only have non-inherited properties reset to allow declarations to be
inherited from the root element.

> For example, if an author specifies `all: initial` on an element it will block
  all inheritance and reset all properties, as if no rules appeared in the
  author, user, or user-agent levels of the cascade.

https://www.w3.org/TR/css3-cascade/#all-shorthand

Instead a subset of properties are reset to allow more
granular control over what parts of a component use inheritance.

To achieve this the preprocessor uses
[postcss-autoreset](https://github.com/maximkoretskiy/postcss-autoreset) with
the SUIT preset and a [custom set of CSS properties](lib/encapsulation.js) that
are reset to their initial values. **Only selectors conforming** to the SUIT naming
conventions are affected.

**Caveats**

##### Selectors must be present in the component CSS

If an element is present in the HTML but not styled in the component CSS
(perhaps relying on utility classes) it will not be reset. In
this instance an empty ruleset can be added to ensure it is correctly reset:

```html
<div class="Component u-posRelative u-textCenter">
  <div class="Component-item"></div>
</div>
```
```css
/**
 * Empty ruleset required.
 * Note the disabling of stylelint
 */

/* stylelint-disable-next-line block-no-empty */
.Component {}

.Component-item {
  color: red;
}
```

##### Global styles can still override descendants

Because component descendants only have non-inheritable properties reset it can
lead to specific global rules still applying:

```css
/* global.css */
span {
  color: red;
}

/* component.css */
.Component-text {
  font-style: bold;
}
```
```html
<div class="Component">
  <span class="Component-text">
    <!-- this text is red -->
  <span>
</div>
```

The solution to this is to minimise or avoid entirely the use of global styles
which is the recommended approach in a SUIT CSS application.

#### `lint`

* Type: `Boolean`
* Default: `true`

Ensure code conforms to the [SUIT code style](https://github.com/suitcss/suit/blob/master/doc/STYLE.md)
by using the [stylelint-config-suitcss](https://github.com/suitcss/stylelint-config-suitcss) package.

Stylelint [configuration
options](http://stylelint.io/?/docs/user-guide/configuration.md) can also be
overridden but this requires the `stylelint-config-suitcss` to be installed
locally in your package.

```js
{
  stylelint: {
    extends: 'stylelint-config-suitcss',
    rules: {
      indentation: [4, 'tab'],
    }
  }
}
```

#### `minify`

* Type: `Boolean`
* Default: `false`

If set to `true` then the output is minified by [`cssnano`](http://cssnano.co/).

#### `postcss`

* Type: `Object`
* Default: `undefined`

Options that are passed directly to `postcss`, as per [the documentation](http://api.postcss.org/global.html#processOptions).

```js
{
  postcss: {from: 'filename.css'}
}
```

##### `use`

* Type: `Array`
* Default: `undefined`

A list of plugins that are passed to PostCSS. This can be used to add new plugins and/or reorder the defaults

```js
{
  use: ['postcss-at2x', 'postcss-property-lookup']
}
```

#### `<plugin-name>`

* Type: `Object`
* Default: `undefined`

Property matching the name of a PostCSS plugin that has options for that plugin

```js
{
  autoprefixer: {
    browsers: ['> 1%', 'IE 7'],
    cascade: false
  },
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

By default the preprocessor uses all necessary plugins to build SUIT components. However additional plugins can be installed into a project and then added to the `use` array. They will be appended to the existing list of plugins.

**Note**: This will not work with the preprocessor installed globally. Instead rely on the convenience of `npm run script`

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
  'postcss-custom-properties',
  'postcss-calc',
  'postcss-color-function',
  'postcss-custom-media',
  'postcss-apply',
];

// config
module.exports = {
  use: [
    'postcss-at2x',
    'postcss-calc',
  ]
};

var result = [
  'postcss-custom-properties',
  'postcss-color-function',
  'postcss-custom-media',
  'postcss-apply',
  'postcss-at2x',
  'postcss-calc',
];
```

**Note** Some core plugins such as `postcss-easy-import` and `autoprefixer`
cannot be re-ordered. This is to ensure components are preprocessed correctly.

#### Autoprefixer: vendor prefixes

By default the preprocessor uses the SUIT
[browserslist](https://github.com/ai/browserslist) configuration:

```
> 1%, last 2 versions, safari > 6, ie > 9, ios > 6, android > 4.3, samsung > 3, chromeandroid > 50
```

The preprocessor doesn't attempt to find any `browserslist` config file.

Instead you can customise the browsers list
via [configuration file](#plugin-configuration).


## Acknowledgements

Based on [Myth](https://github.com/segmentio/myth) by Segment.io.
