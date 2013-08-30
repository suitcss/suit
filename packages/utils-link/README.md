# SUIT utilities: link

[![Build Status](https://secure.travis-ci.org/suitcss/utils-link.png?branch=master)](http://travis-ci.org/suitcss/utils-link)

A SUIT collection of utility classes for low-level CSS link traits.

Read more about [SUIT's design principles](https://github.com/suitcss/suit/).

## Installation

* [Bower](http://bower.io/): `bower install --save suit-utils-link`
* [Component(1)](http://component.io/): `component install suitcss/utils-link`
* Download: [zip](https://github.com/suitcss/utils-link/zipball/master)
* Git: `git clone https://github.com/suitcss/utils-link.git`

## Available classes

* `u-linkClean` - A link without no `text-decoration` for any state.

* `u-linkComplex` - Limit a link's interactive `text-decoration` underline to a
  sub-section of the link text.

    ```html
    <a class="u-linkComplex" href="{url}">
        Link complex
        <span class="u-linkComplex-target">target</span>
    </a>
    ```

* `u-linkBlock` - Block-level link with no `text-decoration` for any state.

* `u-linkPseudo` - Style a `button` to look like a link.

    ```html
    <button class="u-linkPseudo">
        <a role="presentation">Button content</a>
    </button>
    ```

## Usage

Please refer to the README for [SUIT utils](https://github.com/suitcss/utils/)

## Testing

Install [Node](http://nodejs.org) (comes with npm).

From the repo root, install the project's development dependencies:

```
npm install
```

To run the CSS Lint tests:

```
npm test
```

## Browser support

* Google Chrome (latest)
* Opera (latest)
* Firefox 4+
* Safari 5+
* Internet Explorer 8+
