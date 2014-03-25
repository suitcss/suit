# SUIT utilities: link

[![Build Status](https://secure.travis-ci.org/suitcss/utils-link.png?branch=master)](http://travis-ci.org/suitcss/utils-link)

SUIT CSS link utilities.

Read more about [SUIT's design principles](https://github.com/suitcss/suit/).

## Installation

* [Component(1)](http://component.io/): `component install suitcss/utils-link`
* [npm](http://npmjs.org/): `npm install suitcss-utils-link`
* [Bower](http://bower.io/): `bower install suit-utils-link`
* Download: [zip](https://github.com/suitcss/utils-link/zipball/master)

## Available classes

* `u-linkBlock` - Block-level link with no `text-decoration` for any state.

* `u-linkClean` - A link without no `text-decoration` for any state.

* `u-linkComplex` - Limit a link's interactive `text-decoration` underline to a
  sub-section of the link text.

    ```html
    <a class="u-linkComplex" href="{url}">
      Link complex
      <span class="u-linkComplexTarget">target</span>
    </a>
    ```

* `u-linkPseudo` - Make another interactive element, e.g., `button`, look like
  a link.

    ```html
    <button class="u-linkPseudo" type="button">
      Link-like button
    </button>
    ```

## Configurable variables

* `var-color-linkPseudo`: the text color to use for `button` when styled like a text link.
* `var-color-hover-linkPseudo`: the text interaction color to use for `button` when styled like a text link.

## Usage

Please refer to the README for [SUIT utils](https://github.com/suitcss/utils/)

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
