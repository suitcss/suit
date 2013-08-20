# SUIT components

Components are UI patterns. Think of them a bit like custom elements. You
cannot merge elements, only nest them – avoid composing components on the same
element.

(Read about SUIT's [naming conventions](naming-conventions.md).)


## Using components

Components are not _just_ CSS. A component is a combination of CSS and an HTML
template. That template might make use of utilities to avoid repeating common,
existing abstractions.

The preference is to compose classes in the HTML rather than writing new CSS.
Once abstractions and components have been authored, they can be reused and
composed in different ways, in different templates.

### Nesting components

If the HTML for a component is treated like a custom element, you avoid CSS
specificity issues by not applying different component classes to the same HTML
element. Utilities can be composed on the same element as components.

```html
<article class="app-Excerpt u-cf">
    <img class="app-Excerpt-thumbnail u-sizeFit" src="{src}" alt="">
    <div class="u-sizeFill">
        {content}

        <button class="Button Button--default" type="button">
            <span class="Button-icon">
                <span class="Icon Icon--tick"></span>
            </span>
            <span class="Button-label">{text}</span>
        </button>
    </div>
</article>
```

This pattern encourages the creation of partials corresponding to components,
where possible:

```html
<article class="app-Excerpt u-cf">
    <img class="app-Excerpt-thumbnail u-sizeFit" src="{src}" alt="">
    <div class="u-sizeFill">
        <h1 class="app-Excerpt-title u-h3"><a href="{url}">{content}</a></h1>

        {{>default_button_and_icon}}
    </div>
</article>
```


## Creating components

### One pattern, one component, one file

Each component must be in a dedicated file. Each component should concern
itself with realising a single UI pattern. Don't try to do too much.

If a component file is starting to get quite large, it probably consists of
multiple, indepedent components and should be broken up into multiple files.

### Rely on utilities

Utilities are simple, shared abstractions that components may depend on. Any
number of utilities may be included in a component's HTML if they help you to
create the intended outcome.

```html
/* Tweet component template */
<div class="Tweet">
    <a class="u-linkComplex" href="https://twitter.com/{user.screenname}">
        <img class="u-objLeft" src="{user.avatar}" alt="">
        <b class="Tweet-fullname u-linkComplex-target">{user.name}</b>
        <span class="Tweet-screenname u-textMute u-textSmall">@{user.screenname}</span>
    </a>
    ...
</div>
```

### Avoid contextual styles; use modifiers

**Components should be unaware of, and unaffected by their context.**

Your component should not directly override styles of nested components. There
are 3 main reasons for this:

1. To avoid coupling the nested component's appearance to a context that it
   cannot depend on.

2. To avoid the ancestral component from unintentionally overriding the styles
   of the descendent component in other nested contexts that are not
   anticipated.

3. To avoid increasing the specificity of selectors unnecessarily.

If you need variants on a component, use modifier classes. If you need
ancestral context, use a dedicated "mixin" class that is the responsibility of
the component being affected.

GOOD:

```css
.Tweet { /* ... */ }
.Tweet--withExpansion { /* ... */ }
.with-tweetActionsToggle .Tweet-actions { /* ... */ }
.with-tweetActionsToggle:hover .Tweet-actions { /* ... */ }
```

BAD:

```css
.Tweet { /* ... */ }
.Homepage .Tweet { /* ... */ }
.Stream-item .Tweet-actions { /* ... */ }
.Stream-item:hover .Tweet-actions { /* ... */ }
```

Or create a descendant interface for the outer component (this can be composed
with a top-level component's interface).

GOOD:

```css
.Timeline { /* ... */ }
.Timeline-button { /* ... */ }
```

```html
<div class="Timeline">
  <span class="Timeline-button">
    <button class="Button" type="button">...</button>
  </span>
</div>
```

BAD:

```css
.Timeline { /* ... */ }
.Timeline .Button { /* ... */ }
```

```html
<div class="Timeline">
  <button class="Button">...</button>
</div>
```

### Scope styles

**Components should avoid polluting the context of their descendents.**

Be careful about specifying inheritable styles within your component, so that
you don't unnecessarily pollute the context of descendent components. Often, it
is better to create a new class within your component to apply styles directly
to a descendent element.

GOOD:

```css
.Tweet-text { /* ... */ }
```

BAD:

```css
.Tweet p { /* ... */ }
```

### Couple state

Components may have local state. You should scope state classes (`is-*`) to the
component's class:

```css
.Component.is-inSomeState { /* ... */ }
```

### Document thoroughly

Component names should be as short as possible but as long as necessary. Files
should small but well commented. These are some of the questions your comments
should answer:

* What is the component for?
* How should it be used?
* What should the corresponding HTML look like?
* What are the known limitations?
