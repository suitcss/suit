# SUIT CSS utilities

The full collection of SUIT CSS utility classes. Requires
[suitcss-preprocessor](https://github.com/suitcss/preprocessor) or similar in
your build process, if you choose to use the packages directly.

Read more about [SUIT CSS's design principles](https://github.com/suitcss/suit/).

## Installation

* [npm](http://npmjs.org/): `npm install suitcss-utils`
* [Download](https://github.com/suitcss/utils/releases/latest) (compiled)

…is a convenient way to install all the SUIT utility packages:

* [utils-align](https://github.com/suitcss/utils-align/): Vertical alignment
* [utils-display](https://github.com/suitcss/utils-display/): Display types
* [utils-layout](https://github.com/suitcss/utils-layout/): Clearfix, floats, and new block formatting contexts
* [utils-link](https://github.com/suitcss/utils-link/): Link things
* [utils-offset](https://github.com/suitcss/utils-offset/): The `before` and `after` packages
* [utils-position](https://github.com/suitcss/utils-position/): Positioning utilities
* [utils-size](https://github.com/suitcss/utils-size/): Percentage sizing utilities
* [utils-text](https://github.com/suitcss/utils-text/): Text truncation, breaking, and alignment
* [utils-flex](https://github.com/suitcss/utils-flex): Align elements with Flexbox

## Usage

Utilities are low-level. They have a very narrow scope and may end up being
used frequently, due to their separation from the semantics of the document and
the theming of a component. As a result, once a class is in significant use
great care should be taken when introducing any modifications to it.

Utilities make use of `!important` to ensure that their styles always apply
ahead of those defined in a component's dedicated CSS.

### Templating

Each utility class modifies a single trait (a small collection of similar
styles).

To apply a trait, or a combination of traits to an element, add the
corresponding class directly to the HTML.

Together, they can form a wide variety of UI patterns from simple principles.
Although you won't _always_ want to use combinations of utilities to generate
more complicated patterns, the option is there. Refactoring a component's HTML
to move particular utility traits into the component's own styles is a
relatively simple task.

The following contrived example would be a structural template for a simple
Tweet-like component. You would then create a new CSS file for the component to
contain any additional, specific styles (often a "skin" or "theme") needed to
fully realise the component.

```html
<article class="Tweet">
  <a class="u-floatRight" href="{{permalinkUrl}}">
    {{time}}
  </a>
  <a class="u-floatLeft" href="{{userUrl}}">
    <img src="{{userAvatar}}" alt="{{username}}'s avatar">
  </a>
  <div class="u-sizeFill">
    <a class="u-linkComplex" href="{{userUrl}}">
      <span class="u-linkComplexTarget">{{fullname}}</span>
      <span>@{{username}}</span>
    </a>

    <p class="u-textBreak">{{text}}</p>

    <div>
      <a class="u-linkComplex" href="#" role="button">
        <span class="Icon Icon--reply"></span>
        <span class="u-linkComplexTarget">Reply</span>
      </a>
      <a href="#" role="button">
        <span class="Icon Icon--favorite"></span>
        <span class="u-hiddenVisually">Favorite</span>
      </a>
      ...
    </div>
  </div>
</article>
```

## Building

Install [Node](http://nodejs.org) (comes with npm).

```
npm install
```

To generate a build:

```
npm run build
```

## Browser support

* Google Chrome (latest)
* Opera (latest)
* Firefox 4+ (28+ for `flex`)
* Safari 5+ (6.1+ for `flex`)
* Internet Explorer 9+ (10+ for `flex`)
