# SUIT flexible embed

A SUIT component for responsive, intrinsic ratio embeds. Includes modifier
classes for 16:9 and 4:3 aspect ratios.

Read more about [SUIT's design principles](https://github.com/necolas/suit/).

## Installation

* Download: [zip](https://github.com/necolas/suit-flex-embed/zipball/master)
* [Bower](http://bower.io/): `bower install --save suit-flex-embed`
* Git: `git clone https://github.com/necolas/suit-flex-embed.git`

## Available classes

* `FlexEmbed` - The core responsive embed component with no dimensions
* `FlexEmbed--16by9` - The modifier class for 16x9 aspect ratio embed
* `FlexEmbed--4by3` - The modifier class for 4x3 aspect ratio embed

## Usage

Like many SUIT components, suit-flex-embed relies on a base component class
that is extended by any number of additional modifier classes.

```html
<div class="FlexEmbed FlexEmbed--16by9">
    [iframe|object|embed]
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

## Browser support

* Google Chrome (latest)
* Opera (latest)
* Firefox 4+
* Safari 5+
* Internet Explorer 8+
