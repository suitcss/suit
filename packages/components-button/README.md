# SUIT components-button

A SUIT component that provides a structural UI button template to be extended
with modifiers.

Read more about [SUIT's design principles](https://github.com/suitcss/suit/).

## Installation

* [Component(1)](https://github.com/component/component/): `component install suitcss/components-button`
* [npm](http://npmjs.org/): `npm install --save suit-components-button`
* [Bower](http://bower.io/): `bower install --save suit-components-button`

## Available classes

* `Button` - [core] The core button component
* `is-disabled` - [state] For disabled-state button styles (themes)

N.B. You must also include the `disabled` attribute on `button` and `input`
elements. For `a` elements, you should remove the `href` attribute and prevent
JavaScript event handlers from firing.

## Configurable variables

* `var-border-width-Button`
* `var-border-color-Button`
* `var-color-Button`
* `var-font-Button`
* `var-padding-Button`
* `var-opacity-Button-disabled`

## Use

Like all SUIT components, suit-button relies on a base component class that is
extended by any number of additional modifier and state classes.

```html
<a class="Button" href="{{url}}">Sign up</a>

<button class="Button Button--default is-disabled" type="button">Close</button>

<input class="Button Button--primary is-pressed" type="submit" value="Submit">
```

### Theming / extending

The suit-button component is almost entirely structural. You can build your
application-specific theme styles in your app. For example:

```css
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

## Testing

Install [Node](http://nodejs.org) (comes with npm).

```
npm install
```

To generate an un-preprocessed build (i.e., you want to use your own tooling and configure variables).

```
npm run build
```

To generate a standalone, preprocessed build.

```
npm run build-standalone
```

To generate the testing build.

```
npm run build-test
```

Basic visual tests are in `test.html`.

## Browser support

* Google Chrome
* Firefox
* Opera
* Safari
* Internet Explorer 8+
