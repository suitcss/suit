# SUIT utilities: link

A SUIT collection of utility classes for low-level CSS link traits.

Read more about [SUIT's design principles](https://github.com/necolas/suit/).

## Installation

* [Bower](http://bower.io/): `bower install --save suit-utils-link`
* Download: [zip](https://github.com/necolas/suit-utils-link/zipball/master)
* Git: `git clone https://github.com/necolas/suit-utils-link.git`

## Available classes

* `u-linkClean` - A link without no `text-decoration` for any state.

* `u-linkComplex` - Isolate a link's interactive `text-decoration` underline to a sub-section of the link.

    ```html
    <a class="u-linkComplex" href="#">
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

Please refer to the README for [SUIT utils](https://github.com/necolas/suit-utils/)

## Browser support

* Google Chrome (latest)
* Opera (latest)
* Firefox 4+
* Safari 5+
* Internet Explorer 8+
