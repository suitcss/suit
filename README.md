# SUIT CSS

[![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg)](http://gitter.im/suitcss/suit)

Style tools for component-based UI development.

SUIT CSS provides a reliable and testable styling solution for component-based
web application development. The project includes:

* [CSS base styles](https://github.com/suitcss/base) for web apps.
* [CSS utilities](https://github.com/suitcss/utils).
* [CSS components](https://github.com/suitcss/components).
* A [future-facing CSS preprocessor](https://github.com/suitcss/preprocessor)

Each of these modules are made up of smaller modules, making it easy to customize
your setup and build pipeline.

**[Documentation](doc/README.md)**.

## Example

SUIT CSS makes use of variables, custom media queries, and dependency resolution for CSS.

HTML:

```html
<article class="Excerpt u-cf">
  <img class="Excerpt-thumbnail u-sizeFit" src="{{src}}" alt="">
  <div class="u-sizeFill">
    <h1 class="Excerpt-title"><a href="{{url}}">{{title}}</a></h1>
    <p class="Excerpt-text u-textBreak">{{description}}</p>
    <span class="Excerpt-readMore">
      <!-- BUTTON COMPONENT -->
    </span>
  </div>
</article>
```

CSS:

```css
/** @define Excerpt */

@import "suitcss-utils-layout";
@import "suitcss-utils-size";
@import "suitcss-utils-text";
@import "./Button";

/**
 * Content excerpts. Agnostic of image size, and with a clear call to action.
 */

:root {
  --Excerpt-padding: 20px;
  --Excerpt-highlight-color: orange;
}

.Excerpt {
  padding: var(--Excerpt-padding);
}

.Excerpt-thumbnail {
  border: 2px solid var(--Excerpt-highlight-color);
  border-radius: 3px;
  margin-right: 10px;
}

.Excerpt-title {
  border-bottom: 1px solid #ccc;
  margin: 0 0 15px;
  padding-bottom: 5px;
}

.Excerpt-readMore {
  display: inline-block;
  margin-top: 10px;
}
```

## CSS packages

Each CSS package can be installed with npm.
It's suggested that you depend on individual packages as and when you need
them, however, you can install all the CSS packages at once if you prefer:

* [npm](https://www.npmjs.org/): `npm install suitcss`

Each package is stand-alone, contains its own documentation and tests, and is
written to follow a common set of [naming conventions](doc/naming-conventions.md).

* [base](https://github.com/suitcss/base/): a thin reset for web apps, built on top of normalize.css.
* [utils](https://github.com/suitcss/utils/): all the utility packages.
* [components-arrange](https://github.com/suitcss/components-arrange/): flexbox-like horizontal arrangements.
* [components-button](https://github.com/suitcss/components-button/): robust, structural button styles.
* [components-flex-embed](https://github.com/suitcss/components-flex-embed/): aspect-ratios for embeds.
* [components-grid](https://github.com/suitcss/components-grid/): a grid foundation.
* [components-test](https://github.com/suitcss/components-test/): structure for visual tests.
* [theme](https://github.com/suitcss/theme/): example theme.

You can also download pre-built bundles to try things out without setting up a
build process:

* [base bundle](https://github.com/suitcss/base/releases)
* [utils bundle](https://github.com/suitcss/utils/releases)
* [components bundle](https://github.com/suitcss/components/releases)
* [everything bundle](https://github.com/suitcss/suit/releases) (only 4.4KB minified and gzipped)

## Build and test tools

The [suitcss-preprocessor](https://github.com/suitcss/preprocessor) runs CSS
through a build pipeline. It performs per-file tests for conformance to the
SUIT CSS naming conventions, offers minification and allows additional PostCSS
plugins to be added. A CLI and Node API are available

The preprocessor makes use of:

* [PostCSS](https://github.com/postcss/postcss): A tool for transforming styles with JS plugins
  * [postcss-import](https://github.com/postcss/postcss-import)
  * [postcss-custom-properties](https://github.com/postcss/postcss-custom-properties)
  * [postcss-calc](https://github.com/postcss/postcss-calc)
  * [postcss-custom-media](https://github.com/postcss/postcss-custom-media)
  * [autoprefixer](https://github.com/postcss/autoprefixer)

Packages are linted with [postcss-bem-linter](https://github.com/postcss/postcss-bem-linter) and minification is provided by [cssnano](http://cssnano.co/).

## Complementary tools and libraries

Libraries / frameworks for component-based development:

* [React](https://facebook.github.io/react/)
* [Ember.js Components](http://emberjs.com/guides/components/)
* [AngularJS](https://github.com/angular/angular.js)

Tools and dependency managers:

* [npm](https://www.npmjs.org/): package manager.
* [html-inspector](https://github.com/philipwalton/html-inspector): test HTML templates for SUIT CSS conformance.

## Development

Install [Node](http://nodejs.org) (comes with npm).

To generate a build:

```
npm run build
```

## Browser support

* Google Chrome (latest)
* Opera (latest)
* Firefox 4+ (28+ for `flex`)
* Safari 5+ (6.1+ for `flex`)
* Internet Explorer 9+ (10+ for `flex`)

Refer to the [caniuse](http://caniuse.com/) page for [flexbox](http://caniuse.com/#feat=flexbox).
