# SUIT CSS utilities: flex

[![Build Status](https://travis-ci.org/suitcss/utils-flex.svg?branch=master)](https://travis-ci.org/suitcss/utils-flex)

SUIT CSS flexbox utilities

* Read more about [flexbox and its usage](http://www.w3.org/TR/css-flexbox/)
* Read more about [SUIT CSS's design principles](https://github.com/suitcss/suit/).

## Installation

* [npm](http://npmjs.org/): `npm install suitcss-utils-flex`
* Download: [zip](https://github.com/suitcss/utils-flex/releases/latest)

## Available classes

**`flex-container`**

* `u-flex` - Create a flex container
* `u-flexInline` - Create an inline flex container

**`flex-direction`**

* `u-flexRow` - Displays items in a row
* `u-flexRowReverse` - Reverses items in a row
* `u-flexCol` - Display items in a column
* `u-flexColReverse` - Reverses items in a column

**`flex-wrap`**

* `u-flexWrap` - Wrap items onto another line when space allows
* `u-flexNoWrap` - Force items to stay on one line
* `u-flexWrapReverse` - Wrap items and reverse direction

**`justify-content`**

* `u-flexJustifyStart` - Align items at the start of the main axis
* `u-flexJustifyEnd` - Align items at the end of the main axis
* `u-flexJustifyCenter` - Align items at the center of the main axis
* `u-flexJustifyBetween` - Items have space between each other on main axis
* `u-flexJustifyAround` - Items have space around each other on main axis

**`align-items`**

* `u-flexAlignItemsStretch` - Items stretch to fill container
* `u-flexAlignItemsStart` - Cross-start margin edge of the items is placed on the cross-start line
* `u-flexAlignItemsEnd` - Cross-end margin edge of the items is placed on the cross-end line
* `u-flexAlignItemsCenter` - Items are centered in the cross-axis
* `u-flexAlignItemsBaseline` - Items have their baselines aligned on the cross axis

**`align-content`**

* `u-flexAlignContentStart` - Items are packed to the start of the container
* `u-flexAlignContentEnd` - Items are packed to the end of the container
* `u-flexAlignContentCenter` - Items are packed to the centre of the container
* `u-flexAlignContentStretch` - Lines stretch to take up the remaining space
* `u-flexAlignContentBetween` - Lines evenly distributed; first and last lines at container edge
* `u-flexAlignContentAround` - Lines evenly distributed with equal space around each line

**`align-self`**

* `u-flexAlignSelfStart` - Aligns single item at cross axis start
* `u-flexAlignSelfEnd` - Aligns single item at cross axis end
* `u-flexAlignSelfCenter` - Aligns single item at cross axis centre-
* `u-flexAlignSelfStretch` - Stretches single item from cross start to end
* `u-flexAlignSelfAuto` - Uses the default set by `align-items`

**`order`**

* `u-flexOrderFirst` - Positions an item at the start
* `u-flexOrderLast` - Positions an item at the end
* `u-flexOrderNone` - Sets item order to the default of `0`

**`flex-grow`**

* `u-flexGrowX` - Specify how much the flex item will grow relatively

`X` can be any of the following numbers: `1`, `2`, `3`, `4`, `5`.

**Aligning with `auto` margins**

* `u-flexExpand` - Expand all margins to fill remaining space
* `u-flexExpandTop` - Expand top margin to fill remaining space
* `u-flexExpandRight` - Expand right margin to fill remaining space
* `u-flexExpandBottom` - Expand bottom margin to fill remaining space
* `u-flexExpandLeft` - Expand left margin to fill remaining space

[Read more](https://medium.com/@samserif/flexbox-s-best-kept-secret-bd3d892826b6) about how this works.

### Plugins

All flex utilities can be limited to specific Media Query breakpoints.

* `u-sm-flexX` - To use at the smallest Media Query breakpoint.
* `u-md-flexX` - To use at the medium Media Query breakpoint.
* `u-lg-flexX` - To use at the largest Media Query breakpoint.

``` html
<div class="u-md-flex u-md-flexWrap">
  <!-- flex items -->
</div>
```

### Configuration

There are 3 Media Query breakpoints:

* `--sm-viewport`
* `--md-viewport`
* `--lg-viewport`

When using [postcss-custom-media](https://github.com/postcss/postcss-custom-media),
breakpoints can be configured using `@custom-media`. For example:

```css
@custom-media --sm-viewport (min-width:320px) and (max-width:640px);
@custom-media --md-viewport (min-width:640px) and (max-width:960px);
@custom-media --lg-viewport (min-width:960px);
```

## Usage

### Centring an element in its container

``` html
<div class="u-flex u-flexAlignItemsCenter u-flexJustifyCenter">
  <p>Some centred content</p>
</div>
```

### Usage with [`Grid`](https://github.com/suitcss/components-grid)

Note: The `Grid` component already sets `display: flex` on the root element.

``` html
<div class="Grid Grid--alignBottom">
  <div class="Grid-cell u-size1of3 u-md-flexAlignSelfCenter">Content</div>
  <div class="Grid-cell u-size1of3">Content</div>
  <div class="Grid-cell u-size1of3">Content</div>
</div>
```

### Usage with [`utils-size`](https://github.com/suitcss/utils-size)

``` html
<div class="u-flex u-flexJustifyEnd">
  <div class="u-size4of12">Content</div>
  <div class="u-size2of12">Content</div>
  <div>Content</div>
</div>
```

``` html
<div class="u-flex u-flexAlignItemsCenter">
  <div class="u-size1of4">Content</div>
  <div class="u-size1of4">Content</div>
  <div class="u-sizeFill">Content</div>
</div>
```

Please refer to the README for [SUIT CSS utils](https://github.com/suitcss/utils/)

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

Refer to the [caniuse](http://caniuse.com/) page for [flexbox](http://caniuse.com/#feat=flexbox).

* Google Chrome (latest)
* Opera (latest)
* Firefox 28+
* Safari 6.1+
* Internet Explorer 10+
