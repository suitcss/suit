# Miscellaneous considerations

## Working with JavaScript

### js-aName

JavaScript should only rely on `js-*` classes in selectors (unless they need to
be very general, e.g., `a`). _Never_ apply styles to `js-*` classes.

Use the `id` attribute and `js-*` class names for JavaScript hooks. You should
avoid selecting DOM nodes using selectors that are reserved for CSS. Data or
content can be stored in `data-*` attributes.

This Tweet component has a component-level state (expanding), a global-level
state (actionable), and a JavaScript-hook (toggle-expand).

```html
<div class="Tweet is-expanding u-isActionable js-toggleExpand">
    …
</div>
```

* JavaScript should **not** make use of the `Tweet` class.
* JavaScript may add/remove the component-level state class `is-expanding`.
* JavaScript may add/remove the global-level state class `u-isActionable`.
* JavaScript may use the `js-toggleExpand` class as a selector.

JavaScript can apply or remove state classes, e.g., `is-animating` or
`u-isHidden` in order to apply specific styles that accompany a JavaScript
component, state, or event.


## Importing

Make use of the `@import` directive to include utilities and components in your
main stylesheets. It also provides an interface to specify Media Queries
outside of your component's CSS code:

```css
/* main.css */

/* …other CSS imports … */

@import "core/component/button.css";
@import "core/component/button-group.css";
@import "core/component/grid.css";
@import "core/component/grid-layout-mobile.css";
@import "core/component/grid-layout-desktop.css" (min-width:50em);
```

Your build process should inline the CSS and wrap it any specified Media
Queries (you should create a production build of your CSS that omits Media
Queries if you require IE 8 support).


## Build tools

SUIT relies on some form of build process to produce production-ready code.
Imports should be inlined, CSS should be stripped of comments and minified, and
Media Queries should wrap the code from every import that appends them.
