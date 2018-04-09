# SUIT CSS components-arrange

[![Build Status](https://travis-ci.org/suitcss/components-arrange.svg?branch=master)](https://travis-ci.org/suitcss/components-arrange)

A SUIT CSS component for horizontally and vertically arranging a single row of
cells. Includes modifier classes for equal-width cells and gutter-separated
cells. Makes use of CSS table layout.

**Note:** This component has been superseded by [flexbox](http://www.w3.org/TR/css-flexbox/)
and you may instead find more use from [utils-flex](https://github.com/suitcss/utils-flex).

Read more about [SUIT CSS's design principles](https://github.com/suitcss/suit/).

## Installation

* [npm](http://npmjs.org/): `npm install suitcss-components-arrange`
* Download: [zip](https://github.com/suitcss/components-arrange/releases/latest)

## Available classes

* `Arrange` - The core component class
* `Arrange--middle` - The modifier class for middle-aligned cells
* `Arrange--bottom` - The modifier class for bottom-aligned cells
* `Arrange--equal` - The modifier class for equal-width cells
* `Arrange--withGutter` - The modifier class for adding a gutter between cells.
* `Arrange-sizeFit` - The child class for cells to snap to fit their content
* `Arrange-sizeFill` - The child class for cells to expand to fill the remaining space
* `Arrange-row` - The child class for a new row of cells (`Arrange-sizeFit` or `Arrange-sizeFill`)

## Configurable variables

* `--Arrange-gutter-size`: the width of the gutter applied by the
  `Arrange--withGutter` modifier class.

## Usage

N.B. This component affects the width of images in cells.

`Arrange` must only contain `Arrange-sizeFit`, `Arrange-sizeFill`, and `Arrange-row` child nodes.

It's recommended that you only use one `Arrange-sizeFill` per component
instance (unless using the `Arrange--equal` modifier; see below). The first
`Arrange-sizeFill` in the component's source order will not share the extra
space with any subsequent nodes of that class.

`Arrange` relies on a core component class that is extended by additional
modifier classes. This component works best for small-scale UI layout, for
example, image-content pairs:

```html
<div class="Arrange Arrange--middle Arrange--withGutter">
  <div class="Arrange-sizeFit">
    <img src="img.png" alt="">
  </div>
  <div class="Arrange-sizeFill">
    Nicolas Gallagher @necolas
    …
  </div>
</div>
```

Or for an equally spaced row of buttons or icons, etc.

```html
<ul class="Arrange Arrange--equal">
  <li class="Arrange-sizeFill">
    <button class="Button u-sizeFull">Reply</button>
  </li>
  <li class="Arrange-sizeFill">
    <button class="Button u-sizeFull">Like</button>
  </li>
  <li class="Arrange-sizeFill">
    <button class="Button u-sizeFull">Save</button>
  </li>
  <li class="Arrange-sizeFill">
    <button class="Button u-sizeFull">Remove</button>
  </li>
</ul>
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
* Internet Explorer 8+
