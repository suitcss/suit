# SUIT utilities

A SUIT collection of utility classes for common, reusable, low-level CSS traits.
The collection includes dimension, display, layout, link, space, state, and
text utilities.

Read more about [SUIT's design principles](https://github.com/suitcss/suit/).

## Installation

* [Bower](http://bower.io/): `bower install --save suit-utils`

…is a convenient way to install all the SUIT utility packages:

* [suit-utils-dimension](https://github.com/suitcss/utils-dimension)
* [suit-utils-display](https://github.com/suitcss/utils-display)
* [suit-utils-layout](https://github.com/suitcss/utils-layout)
* [suit-utils-link](https://github.com/suitcss/utils-link)
* [suit-utils-offset](https://github.com/suitcss/utils-offset)
* [suit-utils-space](https://github.com/suitcss/utils-space)
* [suit-utils-state](https://github.com/suitcss/utils-state)
* [suit-utils-text](https://github.com/suitcss/utils-text)

## Usage

Utilities are a low-level layer in your CSS. They have a very narrow scope and
may end up being used frequently, due to their separation from the nature of
their content. As a result, once a class is in significant use great care
should be taken before modifying it.

### Referencing utilities

During development, you can include the utilities you need using the `@import`
directive in your main stylesheet. Your build step should take care of inlining
these imports for production.

Example:

```css
@import "/bower_components/normalize-css/normalize.css";

/* Utilities */

@import "/bower_components/suit-utils-display/display.css";
@import "/bower_components/suit-utils-layout/layout.css";
@import "/bower_components/suit-utils-dimension/dimension.css";
@import "/bower_components/suit-utils-state/state.css";
@import "/bower_components/suit-utils-text/text.css";
@import "/bower_components/suit-utils-link/link.css";

...
```

### Templating

Each utility class modifies a single trait (a small collection of similar
styles).

To apply a trait, or a combination of traits to an element, add the
corresponding class directly to the HTML.

Together, they can form a wide variety of UI patterns from simple principles.
Although you won't _always_ want to use combinations of utilities to generate
more complicated patterns, the option is there. Refactoring an HTML template to
move particular utility traits into a CSS component's styles is a relatively
simple task.

The following contrived example would be a structural template for a simple
tweet-like component. You would then create a new component CSS file for any
additional, specific styles (often a "skin" or "theme") needed to fully realise
the component.

```html
<article class="Tweet">
    <a class="u-objRight" href="[permalink]">
        [timestamp]
    </a>
    <a class="u-objLeft" href="[href]">
        <img src="[src]" alt="[username]'s avatar">
    </a>
    <div class="u-sizeFill">
        <a class="u-linkComplex" href="[url]">
            <span class="u-linkComplex-target">[full-name]</span>
            <span>@username</span>
        </a>

        <p>
            <a class="u-linkComplex" href="#">
                @<span class="u-linkComplex-target">username</span>
            </a>
            [tweet-text]
        </p>

        <div class="u-textMute">
            <a href="#">
                <span>Expand</span>
                <span class="u-isHidden">Collapse</span>
            </a>
            <a class="u-linkComplex" href="#">
                <i class="Icon Icon--reply"></i>
                <span class="u-linkComplex-target">Reply</span>
            </a>
            <a href="#">
                <i class="Icon Icon--favorite"></i>
                <span class="u-isHiddenVisually">Favorite</span>
            </a>
            ...
        </div>
    </div>
</article>
```

## Browser support

* Google Chrome (latest)
* Opera (latest)
* Firefox 4+
* Safari 5+
* Internet Explorer 8+
