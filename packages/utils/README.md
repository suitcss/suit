# SUIT utilities

A SUIT collection of utility classes for common, reusable, low-level CSS traits.
The collection includes dimension, display, layout, link, space, state, and
text utilities.

Read more about [SUIT's design principles](https://github.com/necolas/suit/).

## Installation

* [Bower](https://github.com/twitter/bower/): `bower install suit-utils`

…a convenient way to install all the SUIT utility packages:

* [suit-utils-dimension](https://github.com/necolas/suit-utils-dimension)
* [suit-utils-display](https://github.com/necolas/suit-utils-display)
* [suit-utils-layout](https://github.com/necolas/suit-utils-layout)
* [suit-utils-link](https://github.com/necolas/suit-utils-link)
* [suit-utils-space](https://github.com/necolas/suit-utils-space)
* [suit-utils-state](https://github.com/necolas/suit-utils-state)
* [suit-utils-text](https://github.com/necolas/suit-utils-text)

## Usage

### Referencing the utilities

During development, you can include the utilities you need using the `@import`
directive in your main stylesheet. Your build step should take care of inlining
these imports for production.

Example:

```css
@import "/components/normalize-css/normalize.css";

/* Utilities */

@import "/components/suit-utils-display/display.css";
@import "/components/suit-utils-layout/layout.css";
@import "/components/suit-utils-space/space.css";
@import "/components/suit-utils-state/state.css";
@import "/components/suit-utils-text/text.css";
@import "/components/suit-utils-link/link.css";

...
```

### Templating

Apply the desired trait, or combination of traits, directly to the HTML element
in a component's template.

These simple utilities can be used to create a wide variety of UI patterns that
can form the basis for virtual and specific components.

The following contrived example would be a structural template for a simple
tweet-like component. You would then create a new component CSS file to house
any additional, specific styles that are needed to fully realise this
component.

```html
<article class="Tweet">
    <a class="u-objEnd" href="[permalink]">
        [timestamp]
    </a>
    <a class="u-objStart" href="[href]">
        <img src="[src]" alt="[username]'s avatar">
    </a>
    <div class="u-nbfc">
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

        <div>
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
                <span class="u-isVishidden">Favorite</span>
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
