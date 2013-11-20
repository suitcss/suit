# SUIT FlexEmbed

A SUIT component for responsive, intrinsic ratio embeds. Includes modifier
classes for 16:9 and 4:3 aspect ratios.

Read more about [SUIT's design principles](https://github.com/necolas/suit/).

## Installation

* [Bower](http://bower.io/): `bower install --save suit-flex-embed`
* [Component(1)](http://component.io/): `component install suitcss/flex-embed`
* Download: [zip](https://github.com/necolas/suit-flex-embed/zipball/master)
* Git: `git clone https://github.com/necolas/suit-flex-embed.git`

## Available classes

* `FlexEmbed` - The core responsive embed component with no dimensions
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

.FlexEmbed--47by20 {
    padding-bottom: 42.55%;
}
```

Alternatively, aspect ratios can be calculated programmatically and the
corresponding `padding-bottom` value applied using an inline style.

## Testing

Install [Node](http://nodejs.org) (comes with npm). It's recommended that you
also globally install [Component(1)](http://component.io): `npm install -g
component`.

From the repo root, install the project's development dependencies:

```
make
```

To run the CSS Lint tests and build the front-end development bundle:

```
make test
```

Basic visual tests are in `test.html`.

## Browser support

* Google Chrome (latest)
* Opera (latest)
* Firefox 4+
* Safari 5+
* Internet Explorer 8+
