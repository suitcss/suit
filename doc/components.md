# SUIT components

A SUIT component is a specific HTML structure and its associated CSS.

Components are the building blocks of your application. Think of components as
if they were the internal implementation of custom HTML elements. You cannot
merge elements, only nest them, so avoid composing components on the same
element.

Since SUIT relies on Bower, each component can specify the utilities and
components it depends upon.

(Read about SUIT's [naming conventions](naming-conventions.md).)


## Working with components

Components are not _just_ CSS. A component is a combination of CSS and an HTML
template. A component's templates might make use of utilities and other
components.

### One pattern, one component, one file

Each component should have a dedicated CSS file with a name that corresponds
HTML class. For example, the CSS for `ButtonGroup` should be in a file called
`button-group.css`.

If you need additional files to help with organization, use a `.`-separated
suffix, e.g., `component-name.editing.css`.

### Component scope

Each component should implement a single part of the UI. Don't try to do too
much.

The component's core class name (e.g., `ComponentName`) reserves a namespace
that can only be used by that component.

Avoid tight coupling between components, even if that means the code is not as
DRY as you think it should be.

### Component classes

Component names should be as short as possible but as long as necessary.

Components must use the `ComponentName-descendentName` class name pattern to
clearly and directly style any descendant elements that the component requires
to realise itself. This helps to limit the specificity of the component
selectors. For example:

```html
<article class="Excerpt u-cf">
    <h1 class="Except-title">{{title}}</h1>
    <img class="Excerpt-image" src="{{src}}" alt="">
    <p class="Except-text">
      <span class="Excerpt-time">{{time}}</span>
      {{text}}
    </p>
</div>
```

```css
.Excerpt {}
.Excerpt-title {}
.Excerpt-image {}
.Excerpt-text {}
.Excerpt-time {}
```

It also limits the unintentionally pollution of other contexts that selectors
like `Excerpt p` or `Excerpt > p` can introduce.

### Documenting HTML and implementation details

Components must document their HTML structure and non-obvious aspects of their
implementation. The CSS comments for a component should seek to answer the
following questions:

* What is the component for?
* How should it be used?
* What is the HTML template for this component?
* What are the modifiers?
* What are the known limitations?

### Adapting to ancestral context

**Most components should not set their own width, margin, and positioning.**
Write components that can adapt to the dimensions of their ancestral context,
unless there is a good reason to prevent them from doing so.

```css
.Button {
    border: 1px solid black;
    box-sizing: border-box;
    /* .. etc .. */
    margin: 0;
    padding: 0.5em;
    width: 100%;
}
```

```css
.Excerpt {
    /* ... */
}

.Excerpt-buttonWrapper {
    display: inline-block;
    margin-top: 20px;
}
```

```html
<article class="Excerpt u-cf">
    {{! other implementation details }}

    <div class="Excerpt-buttonWrapper">
        <button class="Button Button--default" type="button">{{button_text}}</button>
    </div>
</article>
```

### Use partials and template inheritance

Rely on HTML templating and template inheritance to hide implementation
details. You can make parts of a partial configurable from the inherited
context. The example below allows an inherited context to set `Button` and
`Icon` modifier classes.

```html
{{! button_default_and_icon }}

<button class="Button {{$button_class}}Button--default{{/button_class}}" type="button">
    <span class="Button-icon">
        <span class="Icon {{$icon_class}}{{/icon_class}}"></span>
    </span>
    <span class="Button-label">{{text}}</span>
</button>
```

```html
<article class="Excerpt u-cf">
    {{! other implementation details }}

    <div class="Excerpt-buttonWrapper">
        {{< button_default_and_icon }}
            {{$button_class}}Button--flat{{/button_class}}
            {{$icon_class}}Icon--tick{{/icon_class}}
        {{/button_default_and_icon }}
    </div>
</article>
```

### Directly styling nested components

**Directly styling nested components is the last option.** If you need to add
custom styles directly to a nested component, the preferred pattern is shown
below. It scopes the changes to affect only `Button` components within the
`Excerpt-buttonWrapper` part of the `Excerpt` component.


```css
/* component file for `Excerpt` */

.Excerpt-buttonWrapper .Button {
    /* ... */
}
```

### Using utilities

Utilities are simple, shared abstractions that components may depend on. Any
number of utilities may be included in a component's HTML if they help you to
create the intended outcome.

```html
{{! core Tweet }}

<div class="Tweet">
    <a class="u-linkComplex" href="https://twitter.com/{{user.screenname}}">
        <img class="u-objLeft" src="{{user.avatar}}" alt="">
        <b class="Tweet-fullname u-linkComplex-target">{{user.name}}</b>
        <span class="Tweet-screenname u-textMute u-textSmall">@{{user.screenname}}</span>
    </a>
    ...
</div>
```
