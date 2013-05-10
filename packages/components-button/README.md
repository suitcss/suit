# SUIT button

A SUIT component for a UI button template. Includes modifier classes for small,
large, and full-width buttons.

Read more about [SUIT's design principles](https://github.com/necolas/suit/).

## Installation

* [Bower](http://bower.io/): `bower install --save suit-button`
* Download: [zip](https://github.com/necolas/suit-button/zipball/master)
* Git: `git clone https://github.com/necolas/suit-button.git`

## HTML classes

### Component core class

* `Button` - The core button component

### Component modifier classes

* `Button--small` - The modifier class for smaller buttons
* `Button--large` - The modifier class for larger buttons
* `Button--full` - The modifier class for full-width buttons

### Component state classes

* `is-disabled` - The foundation for disabled-state button styles

N.B. You must also include the `disabled` attribute on `button` and `input`
elements. For `a` elements, you should remove the `href` attribute and prevent
JavaScript event handlers from firing.

## Usage

Like all SUIT components, suit-button relies on a base component class that is
extended by any number of additional modifier classes.

```html
<a class="Button Button--full" href="[url]">Sign up</button>

<button class="Button Button--small is-disabled" type="submit">Submit</button>

<input class="Button Button--large" type="submit" value="Submit">
```

The suit-button component is almost entirely structural. You can build your
application-specific theme styles upon suit-button in your application-level
stylesheets. For example:

```css
/**
 * theme/component/button.css
 * @require suit-button
 */

.Button {
    border-color: #d9d9d9 #d9d9d9 #ccc;
    border-radius: 2px;
    color: #444;
    background-color: #eee;
}

.Button:hover,
.Button:focus,
.Button:active,
.Button.is-pressed {
    border-color: #c6c6c6 #c6c6c6 #bbb;
    color: #222;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    background-color: #f5f5f5;
}

.Button:focus {
    border-color: #069;
    outline: 0;
}

.Button:active,
.Button.is-pressed {
    box-shadow: inset 0 1px 2px rgba(0,0,0, 0.2);
    background-color: #ccc;
}
```

You can also create your own application-level modifiers. This is an example of
a "primary button" style build upon the suit-button component.

```css
/**
 * Modifier: primary buttons
 */

.Button--primary {
    border-color: #057ed0;
    color: #fff;
    background-color: #019ad2;
}

...
```

## Browser support

* Google Chrome (latest)
* Opera (latest)
* Firefox 4+
* Safari 5+
* Internet Explorer 8+
