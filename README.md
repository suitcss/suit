# SUIT CSS

CSS for building self-contained, composable, configurable UI components.

SUIT CSS aims to provide a reliable and testable styling solution for
component-oriented approaches to web application development. It provides some
pre-authored utilities and components, but using them is not required.

**[Documentation](doc/README.md)**.

## Installation

It's suggested that you depend on individual packages as and when you need
them, however, you can install the standard library if you prefer.

* [Component(1)](http://github.com/component/component): `component install suitcss/suit`
* [npm](https://www.npmjs.org/): `npm install suitcss`
* [Bower](http://bower.io/): `bower install suit`
* [Download](https://github.com/suitcss/suit/releases)

## Features

* Simple methodology. [Read the documentation](doc/README.md).
* Clear relationship between HTML and CSS.
* Scope styles to the component they're intended for.
* Utilities provide structural and component-independent traits.
* Theming support is available via a limited subset of W3C-spec style variables.
* Pick-and-choose pre-rolled utilities and structural components.
* Supporting tools.

## CSS packages

Each package is stand-alone, contains its own documentation and tests, and is
written to follow a common set of [naming
conventions](doc/naming-conventions.md). Dependencies are best managed using
[Component](https://github.com/component/component/) or [npm](https://www.npmjs.org/).

* [base](https://github.com/suitcss/base/): a thin reset for web apps, built on top of normalize.css.
* [theme](https://github.com/suitcss/theme/): SUIT's example theme.
* [utils](https://github.com/suitcss/utils/): all the utility packages.
* [components-arrange](https://github.com/suitcss/components-arrange/): flexbox-like horizontal arrangements.
* [components-button](https://github.com/suitcss/components-button/): robust, structural button styles.
* [components-button-group](https://github.com/suitcss/components-button-group/): a way to group button components.
* [components-flex-embed](https://github.com/suitcss/components-flex-embed/): aspect-ratios for embeds.
* [components-grid](https://github.com/suitcss/components-grid/): a grid foundation.
* [components-test](https://github.com/suitcss/components-test/): structure for visual tests.

You can also download pre-built bundles to try things out without setting up a
build process:

* [base bundle](https://github.com/suitcss/base/releases)
* [utils bundle](https://github.com/suitcss/utils/releases)
* [suit bundle](https://github.com/suitcss/suit/releases)

## Complementary tools

Tools that work well with SUIT when building applications.

* [autoprefixer](https://github.com/ai/autoprefixer): automatically adds/removes vendor prefixes from your CSS.
* [component](https://github.com/component/component): flexible component package manager and builder.
* [component-builder-suit](https://github.com/suitcss/component-builder-suit): add per-file SUIT tooling to your Component(1) build step.
* [css-flip](https://github.com/twitter/css-flip): automatically generate LTR/RTL stylesheets.
* [generator-suit](https://github.com/suitcss/generator-suit): scaffold new SUIT packages.
* [html-inspector](https://github.com/philipwalton/html-inspector): test your HTML templates for SUIT conformance.
* [rework](https://github.com/suitcss/rework): arbitrary CSS preprocessing.
* [rework-npm](https://github.com/conradz/rework-npm): @import inliner and de-duper using Rework (supports fetching via npm).
* [rework-suit](https://github.com/suitcss/rework-suit): a SUIT-specific collection of "pure CSS" plugins for Rework.
* [rework-suit-conformance](https://github.com/suitcss/rework-suit-conformance): test individual components for SUIT conformance.
* [suitcss-preprocessor](https://github.com/suitcss/preprocessor): combines rework-suit and autoprefixer; CLI and Node.js interface.

## Plays well with…

* [AngularJS](https://github.com/angular/angular.js)
* [Ember.js Components](http://emberjs.com/guides/components/)
* [React](https://github.com/facebook/react)

## Example

HTML:

```html
<article class="Excerpt u-cf">
  <img class="Excerpt-thumbnail u-sizeFit" src="{{src}}" alt="">
  <div class="u-sizeFill">
    <h1 class="Excerpt-title"><a href="{{url}}">{{title}}</a></h1>
    <p class="Excerpt-text u-textBreak">{{description}}</p>
    <span class="Excerpt-readMore">
      <a class="Button Button--secondary">{{button_text}}</a>
    </span>
  </div>
</article>
```

CSS:

```css
/** @define Excerpt */

/**
 * Content excerpts. Agnostic of image size, and with a clear call to action.
 */

:root {
  var-padding-Excerpt: 20px;
  var-border-color-Excerpt-thumbnail: #000;
}

.Excerpt {
  padding: var(padding-Excerpt);
}

.Excerpt-thumbnail {
  border: 2px solid var(border-color-Excerpt-thumbnail);
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

## Development

Install [Node](http://nodejs.org) (comes with npm).

```
npm install
```

To generate a build:

```
npm run build
```

## Browser support

* Chrome
* Opera
* Firefox
* Safari 6+
* Internet Explorer 8+
