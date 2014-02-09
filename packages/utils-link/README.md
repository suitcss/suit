# SUIT utilities: link

[![Build Status](https://secure.travis-ci.org/suitcss/utils-link.png?branch=master)](http://travis-ci.org/suitcss/utils-link)

A SUIT collection of utility classes for low-level CSS link traits.

Read more about [SUIT's design principles](https://github.com/suitcss/suit/).

## Installation

* [Bower](http://bower.io/): `bower install --save suit-utils-link`
* [Component(1)](http://component.io/): `component install suitcss/utils-link`
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

* `var-linkPseudo-color`: the text color to use for `button` when styled like a text link.
* `var-linkPseudo-hover-color`: the text interaction color to use for `button` when styled like a text link.

## Usage

Please refer to the README for [SUIT utils](https://github.com/suitcss/utils/)

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

* Google Chrome (latest)
* Opera (latest)
* Firefox 4+
* Safari 5+
* Internet Explorer 8+
