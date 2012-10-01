# SUIT utilities

A SUIT collection of utility classes for common, reusable, low-level CSS traits.
The collection includes text, link, display, layout, space, and state utilities.

Read more about [SUIT's design principles](https://github.com/necolas/suit/).

## Installation

* Download: [zip](https://github.com/necolas/suit-utils/zipball/master)
* [Bower](https://github.com/twitter/bower/): `bower install suit-utils`
* Git: `git clone https://github.com/necolas/suit-utils.git`

## Usage

### Referencing

During development, you can include the utilities you need using the `@import`
directive in your main stylesheet. Your build step should take care of inlining
these imports for production.

Example:

```css
@import "/components/normalize-css/normalize.css";

/* Utilities */

@import "/components/suit-utils/display.css";
@import "/components/suit-utils/layout.css";
@import "/components/suit-utils/space.css";
@import "/components/suit-utils/state.css";
@import "/components/suit-utils/text.css";
@import "/components/suit-utils/link.css";

@import "/components/app-css-utils/mycustom-util.css";
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
<article class="tweet">
    <a class="obj-end" href="[permalink]">
        [timestamp]
    </a>
    <a class="obj-start" href="[href]">
        <img src="[src]" alt="[username]'s avatar">
    </a>
    <div class="nbfc">
        <a class="link-complex" href="[url]">
            <span class="link-complex__target">[full-name]</span>
            <span>@username</span>
        </a>

        <p>
            <a class="link-complex" href="#">
                @<span class="link-complex__target">username</span>
            </a>
            [tweet-text]
        </p>

        <div>
            <a href="#">
                <span>Expand</span>
                <span class="is-hidden">Collapse</span>
            </a>
            <a class="link-complex" href="#">
                <i class="icon icon--reply"></i>
                <span class="link-complex__target">Reply</span>
            </a>
            <a href="#">
                <i class="icon icon--favorite"></i>
                <span class="is-vishidden">Favorite</span>
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
