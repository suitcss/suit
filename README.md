# SUIT

SUIT is a collection of independent, combinable, and theme-agnostic UI traits.
SUIT conceives of UI traits as belonging to one of 2 forms: either a low-level
utility or a more specific component-prototype.

Each stand-alone SUIT package aims to be extensible
and easily themed.

**Utilities**:

* [Utilities](https://github.com/necolas/suit-utils/)

**Components**:

* [Button](https://github.com/necolas/suit-button/)
* [Button group](https://github.com/necolas/suit-button-group/)
* [Flexible embed](https://github.com/necolas/suit-flex-embed/)
* [Grid](https://github.com/necolas/suit-grid/)


## General design principles

SUIT aims to loosely couple document semantics, presentation, and behaviour so
as to be able to modify any one of them with minimal impact on the others.

1. Write less CSS by codifying common structural and stylistic patterns in a way
   that allows them to be reused in different contexts.

2. Use HTML as the place where reusable traits are mixed together on elements.
   Tend towards applying HTML classes directly to the elements you want to
   affect.

3. Write small, independent, content-agnostic components with few, known
   dependencies as opposed to monolithic frameworks, toolkits, or UI parts.

4. Avoid content-derived HTML class names as these cannot be design- and
   content-agnostic.


## HTML/CSS authoring

SUIT aims to make it easier for teams to work with, and reuse, HTML/CSS.

* Favour readable and understand class names for components and their
  constituent parts. Use names that are as short as possible but as long as
  necessary.

* Use short, low-specificity CSS selectors.

* Limit the scope of style inheritance in your components, e.g., use `.label >
  a` rather than `.label a`.

* Use classes rather than tags in selectors, as much as is practical, e.g., use
  `.list-item` rather than `.list > a`. This helps make components more
  reusable and robust.


## Naming

Components should use the following naming pattern:

```html
<div class="component-name component-name--modifier">
    <div class="component-name__sub-part">
    </div>
</div>
```

```css
.component-name {}
.component-name--modifier {}
.component-name__sub-part {}
.component-name__sub-part--modifier {}
```

Similar utility types may be prepended by a string that represents their type,
e.g., `text-center` and `link-clean`.

SUIT components should make use of additional class name conventions:

* `js-*`: JavaScript should only rely on these classes in selectors (unless
  they need to be very general, e.g., `a`). _Never_ apply styles to `js-*`
  classes.

* `is-*`: Primarily for state-based presentations and can be applied/removed
  with JS to modify the UI. Where possible, avoid using JS generated inline
  styles and prefer using an `is-*` class that bundles together the desired
  styles.

* `with-*`: Mix-in additional UI traits that are required when including
  optional child UI components. For example: `with-dropdown` to modify an
  element's traits as needed to work with the inclusion of a child dropdown
  component.


## Organization

To faciliate code reuse, ease refactoring, and better expose components:

* Each new group of utilities should exist in a separate file.

* Each independent component should exist in its own file.

* App-level utility, component, and theming files should be kept separate from
  app-agnostic utility and component files.

For example:

```
.
├── app
|   ├── util
|   |   └── text-mute.css
|   └── component
|       └── button.css
└── vendor
    ├── util
    |   ├── display.css
    |   └── text-center.css
    └── component
        └── button.css

```


## Utilities

All generic structural, positional, and visual elements of the design should be
codified as utilities. Before creating a custom CSS component you should make
use of the utility classes to realise as much of the UI as possible and
appropriate.

The majority of utilities are grouped by type, and where appropriate (for
readability and clarity) a prefix is used to reflect that group. For example:

```css
.link-clean {}
.link-complex {}

...

.text-mute {}
.text-truncate {}
```

Any classes with obfuscated names, e.g., `cf` and `nbfc`, are very commonly
used utilities with otherwise excessively long names. For example: the `cf`
utility is used to "contain floats" without clipping any overflow; the `nbfc`
utility is used to create a "new block formatting context". You should always
check the inline documentation for a utility to understand what it does and how
it does it.

Example template:

```html
<div class="cf">
    <a class="obj-left link-complex" href="[url]">
        <img class="block" src="[src]" alt="">
    </a>
    <div class="nbfc">
        <a class="link-complex" href="[url]">
            <b class="link-complex__target">John Doe</b>
            <span class="text-mute">@johndoe</span>
        </a>

        [text]
    </div>
</div>
```

IMPORTANT: **Never** change the styles attached to any utility class without
being fully aware of the consequences. It's particularly important to be
extremely cautious about changing any structural, positional, or display
styles. The entire app is likely to be built on top of these common patterns so
changing a utility can have unintended cascading effects.

If a utility class needs to be replaced, mark it as deprecated - `@tag
deprecated` - and initiate a gradual phase out.

If a utility class needs to be created, please ensure that it's well
documented/commented. It's very important for other people to know at any point
in time what a utility does, how it does it, and any short-comings it may
have.


## Components

The components are specific and complex patterns. Components may be built up
from utilities and an additional layer of custom styles (that are themselves
not yet generic enough to be abstracted into a utility or smaller component).

Each part of a UI is a small component and many of those components can
be used independently.

Files should be small and well commented. Including example HTML in CSS
comments can be very helpful in illustrating how to make use of a utility or
component. If a component file is starting to get quite large, it probably
consists of multiple, indepedent components and should be broken up into
multiple files.

Combine traits on HTML elements in the template for a component. If you have a
UI pattern that is used in many places, consider creating a template for it
rather than rewriting it multiple times in different templates.

As with utilities, components should be well documented. It shouldn't be
assumed that CSS is self-documenting.


## Working with JavaScript

Use the `id` attribute and `js-*` class names for JavaScript hooks. You should
not select nodes in the DOM using selectors that are reserved for CSS. Data or
content can be stored in `data-*` attributes.

JavaScript can apply or remove state classes, e.g., `is-hidden` in order to
apply specific styles that accompany a JavaScript component, state, or event.


## Related resources

* [About HTML semantics and front-end architecture](http://nicolasgallagher.com/about-html-semantics-front-end-architecture/)
* [SOLID CSS](http://blog.millermedeiros.com/solid-css/)
* [Idiomatic HTML](https://github.com/necolas/idiomatic-html/)
* [Idiomatic CSS](https://github.com/necolas/idiomatic-css/)
