# SUIT button

A SUIT component that provides a structural UI button template.
It requires a button theme.

Read more about [SUIT's design principles](https://github.com/necolas/suit/).

## Installation

* [Bower](http://bower.io/): `bower install --save suit-button`
* Download: [zip](https://github.com/necolas/suit-button/zipball/master)
* Git: `git clone https://github.com/necolas/suit-button.git`

## Usage

Like all SUIT components, suit-button relies on a base component class that is
extended by any number of additional modifier classes.

```html
<a class="Button Button--full" href="[url]">Sign up</button>

<button class="Button is-disabled" type="submit">Submit</button>

<input class="Button is-pressed" type="submit" value="Submit">
```

## Core HTML classes

* `Button` - [core] The core button component
* `Button--full` - [modifier] The modifier class for full-width buttons
* `is-disabled` - [state] For disabled-state button styles (themes)

N.B. You must also include the `disabled` attribute on `button` and `input`
elements. For `a` elements, you should remove the `href` attribute and prevent
JavaScript event handlers from firing.

## Theme HTML classes

The following modifier and state classes should be implemented by all themes.
This ensures that themes can hook into a shared set of HTML class names. You're
still free to create additional, custom modifier names if your theme requires
them.

* `Button--largest` (optional) - [modifier] Largest button size
* `Button--large` - [modifier] Large button size
* `Button--small` - [modifier] Small button size
* `Button--smallest` (optional) - [modifier] Smallest button size
* `Button--default` - [modifier] Default button style of your theme
* `is-disabled` - [state] For disabled-state button styles
* `is-pressed` - [state] For pressed-state button styles

N.B. You should try to avoid styling the core `Button` class directly.

## Theming

The suit-button component is almost entirely structural. You can rely on a
theme or build your application-specific theme styles in your application-level
stylesheets. For example:

```css
/**
 * theme/component/button.css
 * @require suit-button
 */

/**
 * Modifier: default buttons
 */

.Button--default {
    border-color: #d9d9d9 #d9d9d9 #ccc;
    border-radius: 2px;
    color: #444;
    background-color: #eee;
}

.Button--default:hover,
.Button--default:focus,
.Button--default:active,
.Button--default.is-pressed {
    border-color: #c6c6c6 #c6c6c6 #bbb;
    color: #222;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    background-color: #f5f5f5;
}

.Button--default:focus {
    border-color: #069;
    outline: 0;
}

.Button--default:active,
.Button--default.is-pressed {
    box-shadow: inset 0 1px 2px rgba(0,0,0, 0.2);
    background-color: #ccc;
}

/**
 * Modifier: large buttons
 */

.Button--large {
    font-size: 1.5em;
    padding: 0.75em 1.5em;
}
```

## Browser support

* Google Chrome (latest)
* Opera (latest)
* Firefox 4+
* Safari 5+
* Internet Explorer 8+
