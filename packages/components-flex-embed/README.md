# SUIT FlexEmbed

A SUIT component for responsive, intrinsic ratio embeds. Includes modifier
classes for 3:1, 2:1, 16:9, and 4:3 aspect ratios.

Read more about [SUIT's design principles](https://github.com/suitcss/suit/).

## Installation

* [Component(1)](http://component.io/): `component install suitcss/flex-embed`
* [npm](https://www.npmjs.org/package/suitcss-components-flex-embed): `npm install suitcss-components-flex-embed`
* [Bower](http://bower.io/): `bower install suit-flex-embed`
* Download: [zip](https://github.com/suitcss/flex-embed/zipball/master)

## Available classes

* `FlexEmbed` - The core responsive embed component with no dimensions
* `FlexEmbed--3by1` - The modifier class for 3x1 aspect ratio embed
* `FlexEmbed--2by1` - The modifier class for 2x1 aspect ratio embed
* `FlexEmbed--16by9` - The modifier class for 16x9 aspect ratio embed
* `FlexEmbed--4by3` - The modifier class for 4x3 aspect ratio embed
* `FlexEmbed-item` - The descendant class for the media that is being embedded
  (optional for `iframe`, `embed`, and `object` elements)

## Usage

Like many SUIT components, suit-flex-embed relies on a base component class
that is extended by any number of additional modifier classes.

```html
<div class="FlexEmbed FlexEmbed--16by9">
  [iframe|object|embed]
</div>

<div class="FlexEmbed FlexEmbed--4by3">
  <img class="FlexEmbed-item" src="…" alt="">
</div>
```

The suit-flex-embed component can be extended with additional aspect ratios if your
application makes use of multi-media embeds that require them. For example, to
create a 2.35:1 aspect ratio:

```css
/**
 * Modifier: 47:20 aspect ratio
 */

.FlexEmbed--47by20:before {
  padding-bottom: 42.55%;
}
```

Alternatively, aspect ratios can be calculated programmatically and the
corresponding `padding-bottom` value applied using an inline style.

## Testing

Install [Node](http://nodejs.org) (comes with npm).

```
npm install
```

To generate a build:

```
npm run build
```

To generate the testing build.

```
npm run build-test
```

Basic visual tests are in `test.html`.

## Browser support

* Google Chrome (latest)
* Opera (latest)
* Firefox 4+
* Safari 5+
* Internet Explorer 8+
