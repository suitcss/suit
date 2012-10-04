# SUIT button

A SUIT component for a UI button template. Includes modifier classes for small,
large, and full-width buttons.

Read more about [SUIT's design principles](https://github.com/necolas/suit/).

## Installation

* Download: [zip](https://github.com/necolas/suit-button/zipball/master)
* [Bower](https://github.com/twitter/bower/): `bower install suit-button`
* Git: `git clone https://github.com/necolas/suit-button.git`

## Available classes

* `btn` - The core button component
* `btn--small` - The modifier class for smaller buttons
* `btn--large` - The modifier class for larger buttons
* `btn--full` - The modifier class for full-width buttons

## Usage

Like all SUIT components, suit-button relies on a base component class that is
extended by any number of additional modifier classes.

```
<button class="btn btn--small" type="submit">Submit</button>
```

The suit-button component is almost entirely structural. You can build your
application-specific theme styles upon suit-button in your application-level
stylesheets. For example:

```
@import "components/vendor/suit-button/button.css"

/**
 * components/app/button/button.css
 */

.btn {
    border-color: #d9d9d9 #d9d9d9 #ccc;
    border-radius: 2px;
    color: #444;
    background-color: #eee;
}

.btn:hover,
.btn:focus,
.btn:active,
.btn.is-pressed {
    border-color: #c6c6c6 #c6c6c6 #bbb;
    color: #222;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    background-color: #f5f5f5;
}

.btn:focus {
    border-color: #069;
    outline: 0;
}

.btn:active,
.btn.is-pressed {
    box-shadow: inset 0 1px 2px rgba(0,0,0, 0.2);
    background-color: #ccc;
}
```

You can also create your own application-level modifiers. This is an example of
a "primary button" style build upon the suit-button component.

```
/**
 * Modifier: primary buttons
 */

.btn--primary {
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
