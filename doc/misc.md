# Miscellaneous considerations

## Working with JavaScript

### js-someName

Use the `id` attribute and `js-*` class names are reserved for JavaScript-only
use. Application-specific data or content can be stored in `data-*`
attributes.

* JavaScript may use any component-level classes in selectors.
* JavaScript may add/remove the component-level state class `is-expanding`.
* JavaScript may add/remove utilities classes.
* JavaScript may JavaScript-specific utility classes prefixed with `js-`.

The example below includes a dedicated JavaScript utility class to which
behaviour is bound. It is independent of any specific UI component.

```html
<a class="js-showProfile" data-username="necolas" href="{url}">...</a>
```


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
