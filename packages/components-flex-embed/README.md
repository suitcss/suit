# SUIT CSS components-flex-embed

[![Build Status](https://travis-ci.org/suitcss/components-flex-embed.svg?branch=master)](https://travis-ci.org/suitcss/components-flex-embed)

CSS for responsive, intrinsic ratio embeds. Includes modifier classes for 3:1,
2:1, 16:9, and 4:3 aspect ratios.

Read more about [SUIT CSS's design principles](https://github.com/suitcss/suit/).

## Installation

* [npm](https://www.npmjs.org/package/suitcss-components-flex-embed): `npm install suitcss-components-flex-embed`
* Download: [zip](https://github.com/suitcss/components-flex-embed/releases/latest)

## Available classes

* `FlexEmbed` - The root node.
* `FlexEmbed-ratio` - The element that provides the aspect ratio (1:1 by default).
* `FlexEmbed-ratio--3by1` - The modifier class for 3:1 aspect ratio embed.
* `FlexEmbed-ratio--2by1` - The modifier class for 2:1 aspect ratio embed,
* `FlexEmbed-ratio--16by9` - The modifier class for 16:9 aspect ratio embed.
* `FlexEmbed-ratio--4by3` - The modifier class for 4:3 aspect ratio embed.
* `FlexEmbed-content` - The descendent class for the content that is being displayed.

## Usage

Example:

```html
<div class="FlexEmbed">
  <div class="FlexEmbed-ratio FlexEmbed-ratio--16by9"></div>
  <div class="FlexEmbed-content">
    <!-- child content -->
  </div>
</div>
```

You can add custom own aspect ratios. For example, to create a 2.35:1 aspect
ratio:

```css
/**
 * Modifier: 47:20 aspect ratio
 */

.FlexEmbed-ratio--47by20 {
  padding-bottom: 42.55%;
}
```

Alternatively, aspect ratios can be calculated programmatically and the
corresponding `padding-bottom` value applied using an inline style.

```html
<div class="FlexEmbed">
  <div class="FlexEmbed-ratio" style="padding-bottom:{{percentage}}%"></div>
  <div class="FlexEmbed-content">
    <!-- child content -->
  </div>
</div>
```

## Testing

Install [Node](http://nodejs.org) (comes with npm).

```
npm install
```

To generate a build:

```
npm run build
```

To lint code with [postcss-bem-linter](https://github.com/postcss/postcss-bem-linter) and [stylelint](http://stylelint.io/)

```
npm run lint
```

To generate the testing build.

```
npm run build-test
```

To watch the files for making changes to test:

```
npm run watch
```

Basic visual tests are in `test/index.html`.

## Browser support

* Google Chrome (latest)
* Opera (latest)
* Firefox 4+
* Safari 5+
* Internet Explorer 9+
