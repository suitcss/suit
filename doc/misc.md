# Working with JavaScript

### js-aName

JavaScript should only rely on `js-*` classes in selectors (unless they need to
be very general, e.g., `a`). _Never_ apply styles to `js-*` classes.

Use the `id` attribute and `js-*` class names for JavaScript hooks. You should
not select nodes in the DOM using selectors that are reserved for CSS. Data or
content can be stored in `data-*` attributes.

This Tweet component has a component-level state (expanding), a global-level
state (actionable), and a JavaScript-hook (toggle-expand).

```html
<div class="Tweet is-expanding u-isActionable js-toggleExpand">
    …
</div>
```

* JavaScript may **not** make use of the `Tweet` class.
* JavaScript may add/remove the component-level state class `is-expanding`.
* JavaScript may add/remove the global-level state class `u-isActionable`.
* JavaScript may use the `js-toggleExpand` class as a selector.

JavaScript can apply or remove state classes, e.g., `is-animating` or
`u-isHidden` in order to apply specific styles that accompany a JavaScript
component, state, or event.
