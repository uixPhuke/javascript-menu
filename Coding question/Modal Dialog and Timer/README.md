# 🔥 JavaScript Modal --- DOM & Event Handling Master Guide

> A beginner-friendly, interview-ready guide to understanding a **modal
> popup** using HTML, CSS, and JavaScript.

::: {align="center"}
### 🎯 What you will learn

`onclick` · `event` · `event.target` · `getElementById()` · `classList`
· `toggle()` · `!show` · `setTimeout()` · CSS Overlay · Event Flow
:::

------------------------------------------------------------------------

## 🧩 1. Complete Project

### `index.html`

``` html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <button onclick="toggleModal(true)">
        Open Promo Modal
    </button>

    <div id="demoModal"
         class="modal-overlay hidden"
         onclick="closeOnBackdrop(event)">

        <div class="modal-content">
            <h3>🔥 Exclusive Offer!</h3>
            <p>Get 20% Off your purchase!</p>

            <button onclick="toggleModal(false)">
                Close
            </button>
        </div>

    </div>

    <script src="app.js"></script>
</body>
</html>
```

### `app.js`

``` javascript
function toggleModal(show) {

    document
        .getElementById("demoModal")
        .classList
        .toggle("hidden", !show);

}

function closeOnBackdrop(e) {

    if (e.target.id === "demoModal") {
        toggleModal(false);
    }

}

// Automatically open after 4 seconds
setTimeout(() => {
    toggleModal(true);
}, 4000);
```

### `style.css`

``` css
.modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);

    display: grid;
    place-items: center;
}

.modal-content {
    background: #1e293b;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
}

.hidden {
    display: none !important;
}
```

------------------------------------------------------------------------

# 🧠 2. What Is a Modal?

A **modal** is a popup that appears on top of the current webpage.

Typical uses:

-   🎁 Promotional offers
-   🔐 Login forms
-   ⚠️ Confirmation messages
-   🗑️ Delete confirmation
-   📋 Forms
-   ℹ️ Important information

Visual structure:

``` text
┌───────────────────────────────────────────┐
│                                           │
│             DARK OVERLAY                  │
│                                           │
│             ┌─────────────┐               │
│             │   MODAL     │               │
│             │             │               │
│             │  Exclusive  │               │
│             │    Offer    │               │
│             │             │               │
│             │    Close    │               │
│             └─────────────┘               │
│                                           │
└───────────────────────────────────────────┘
```

There are two important parts:

  Part               Purpose
  ------------------ -------------------------------------------
  `.modal-overlay`   Covers the screen and positions the popup
  `.modal-content`   Contains the actual popup content

------------------------------------------------------------------------

# 🎨 3. `.modal-overlay` --- What Is It?

``` css
.modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);

    display: grid;
    place-items: center;
}
```

### `position: fixed`

The overlay is positioned relative to the browser viewport.

### `inset: 0`

This is shorthand for:

``` css
top: 0;
right: 0;
bottom: 0;
left: 0;
```

So it covers the entire screen.

### `background`

``` css
background: rgba(0, 0, 0, 0.7);
```

Creates a black transparent layer.

### `display: grid`

Makes the overlay a CSS Grid container.

### `place-items: center`

Centers the modal content horizontally and vertically.

------------------------------------------------------------------------

# 🫥 4. `.hidden` --- How Do We Hide the Modal?

``` css
.hidden {
    display: none !important;
}
```

When the modal has:

``` html
class="modal-overlay hidden"
```

the browser applies:

``` css
display: none;
```

Therefore:

> The modal is invisible.

When JavaScript removes `hidden`:

``` html
class="modal-overlay"
```

the modal becomes visible.

------------------------------------------------------------------------

# 🖱️ 5. What Is `onclick`?

`onclick` means:

> **Run some JavaScript when the element is clicked.**

Example:

``` html
<button onclick="hello()">
    Click Me
</button>
```

When clicked:

``` javascript
hello();
```

runs.

### Important

`onclick` is **not only for buttons**.

A `<div>` can also have `onclick`:

``` html
<div onclick="hello()">
    Click me
</div>
```

Other elements can also respond to click events.

------------------------------------------------------------------------

# 🎯 6. `onclick="toggleModal(true)"`

Our opening button:

``` html
<button onclick="toggleModal(true)">
    Open Promo Modal
</button>
```

When clicked:

``` javascript
toggleModal(true);
```

The function receives:

``` text
show = true
```

The word `true` means:

> We want to show the modal.

------------------------------------------------------------------------

# ⚙️ 7. Understanding `toggleModal(show)`

``` javascript
function toggleModal(show) {
    document
        .getElementById("demoModal")
        .classList
        .toggle("hidden", !show);
}
```

Let's break it down.

------------------------------------------------------------------------

## Step 1 --- `document`

``` javascript
document
```

Represents the current HTML webpage.

------------------------------------------------------------------------

## Step 2 --- `getElementById()`

``` javascript
document.getElementById("demoModal")
```

Finds the HTML element whose ID is:

``` html
id="demoModal"
```

So JavaScript gets:

``` html
<div id="demoModal">
```

------------------------------------------------------------------------

## Step 3 --- `classList`

``` javascript
element.classList
```

`classList` gives JavaScript access to the CSS classes attached to an
element.

Example:

``` html
<div class="modal-overlay hidden">
```

The element has:

``` text
modal-overlay
hidden
```

------------------------------------------------------------------------

## Step 4 --- `toggle()`

``` javascript
classList.toggle("hidden", !show);
```

The second argument tells `toggle()` what to do.

### Rule

``` text
true  → add the class
false → remove the class
```

------------------------------------------------------------------------

# ❗ 8. What Does `!show` Mean?

`!` means **NOT**.

Therefore:

``` text
!true  → false
!false → true
```

This is the trick that makes the function work.

### Opening

``` javascript
toggleModal(true);
```

Inside the function:

``` text
show  = true
!show = false
```

Therefore:

``` javascript
classList.toggle("hidden", false);
```

The `hidden` class is removed.

``` text
MODAL → VISIBLE 👀
```

### Closing

``` javascript
toggleModal(false);
```

Inside:

``` text
show  = false
!show = true
```

Therefore:

``` javascript
classList.toggle("hidden", true);
```

The `hidden` class is added.

``` text
MODAL → HIDDEN 🙈
```

------------------------------------------------------------------------

# 📊 9. The Most Important Table

  Code                      `show`   `!show` `hidden`   Result
  ---------------------- --------- --------- ---------- ---------
  `toggleModal(true)`       `true`   `false` Removed    👀 Show
  `toggleModal(false)`     `false`    `true` Added      🙈 Hide

### Easy memory trick

``` text
true  → SHOW
false → HIDE
```

The function converts that into:

``` text
SHOW → remove "hidden"
HIDE → add "hidden"
```

------------------------------------------------------------------------

# 🖼️ 10. Why Is There a `modal-content` Div?

We have:

``` html
<div id="demoModal" class="modal-overlay">

    <div class="modal-content">
        ...
    </div>

</div>
```

Think of it as:

``` text
demoModal
│
└── modal-content
```

The outer element is the **overlay**.

The inner element is the **actual popup**.

------------------------------------------------------------------------

# 🖱️ 11. What Does `onclick="closeOnBackdrop(event)"` Do?

The overlay contains:

``` html
onclick="closeOnBackdrop(event)"
```

Meaning:

> When the overlay is clicked, call `closeOnBackdrop()` and pass the
> click event.

``` javascript
function closeOnBackdrop(e) {
    ...
}
```

Here:

``` text
event → e
```

`e` is simply a variable containing information about the click.

------------------------------------------------------------------------

# 🎯 12. What Is `event.target`?

``` javascript
e.target
```

means:

> **The exact HTML element that was clicked.**

For example:

### Click the background

``` text
e.target
   ↓
#demoModal
```

### Click the popup

``` text
e.target
   ↓
.modal-content
```

### Click the close button

``` text
e.target
   ↓
button
```

------------------------------------------------------------------------

# 🔍 13. Understanding the `if`

``` javascript
if (e.target.id === "demoModal") {
    toggleModal(false);
}
```

This asks:

> Was the exact element clicked the modal overlay?

If yes:

``` javascript
toggleModal(false);
```

Close the modal.

If no:

Do nothing.

------------------------------------------------------------------------

# 💡 14. Why Check `e.target.id`?

Without this check, clicking anywhere inside the overlay could
potentially close the modal.

We want:

``` text
CLICK OUTSIDE POPUP
       ↓
     CLOSE
```

but:

``` text
CLICK INSIDE POPUP
       ↓
    DON'T CLOSE
```

Visual:

``` text
┌─────────────────────────────────┐
│                                 │
│     CLICK → CLOSE               │
│                                 │
│       ┌─────────────────┐       │
│       │                 │       │
│       │     MODAL       │       │
│       │                 │       │
│       │     CLICK       │       │
│       │     HERE        │       │
│       │                 │       │
│       └─────────────────┘       │
│                                 │
│     CLICK → CLOSE               │
│                                 │
└─────────────────────────────────┘
```

------------------------------------------------------------------------

# ⏱️ 15. What Is `setTimeout()`?

``` javascript
setTimeout(() => {
    toggleModal(true);
}, 4000);
```

`setTimeout()` means:

> Run some code after a specified amount of time.

Here:

``` text
4000 milliseconds
       ↓
    4 seconds
```

So:

``` text
PAGE LOAD
    ↓
WAIT 4 SECONDS
    ↓
toggleModal(true)
    ↓
MODAL OPENS
```

------------------------------------------------------------------------

# 🔄 16. Complete Program Flow

``` text
                  PAGE LOAD
                      │
                      ▼
             ┌─────────────────┐
             │ setTimeout()     │
             │ Wait 4 seconds   │
             └────────┬────────┘
                      │
                      ▼
              toggleModal(true)
                      │
                      ▼
              Remove "hidden"
                      │
                      ▼
                MODAL SHOWS
                      │
          ┌───────────┴───────────┐
          │                       │
          ▼                       ▼
    Click Close             Click Backdrop
          │                       │
          ▼                       ▼
 toggleModal(false)       closeOnBackdrop()
                                  │
                                  ▼
                         Check e.target.id
                                  │
                                  ▼
                       Is it "demoModal"?
                                  │
                                  ▼
                         toggleModal(false)
                                  │
                                  ▼
                           MODAL HIDES
```

------------------------------------------------------------------------

# 🧪 17. Practice Examples

## Example 1 --- Show the modal

``` javascript
toggleModal(true);
```

Question:

**What happens?**

```{=html}
<details>
```
```{=html}
<summary>
```
💡 Reveal Answer
```{=html}
</summary>
```
`show = true`, so `!show = false`.

`hidden` is removed.

The modal becomes visible.

```{=html}
</details>
```

------------------------------------------------------------------------

## Example 2 --- Hide the modal

``` javascript
toggleModal(false);
```

Question:

**What happens?**

```{=html}
<details>
```
```{=html}
<summary>
```
💡 Reveal Answer
```{=html}
</summary>
```
`show = false`, so `!show = true`.

`hidden` is added.

The modal becomes hidden.

```{=html}
</details>
```

------------------------------------------------------------------------

## Example 3 --- What does this return?

``` javascript
!true
```

Answer:

``` text
false
```

And:

``` javascript
!false
```

returns:

``` text
true
```

------------------------------------------------------------------------

# 🧠 18. Accenture Exam Cheat Sheet

  Concept                 Meaning
  ----------------------- -------------------------------
  `onclick`               Runs code when clicked
  `event`                 Information about an event
  `e.target`              Exact element clicked
  `e.target.id`           ID of clicked element
  `document`              Current HTML document
  `getElementById()`      Finds an element by ID
  `classList`             Access/manipulate CSS classes
  `classList.add()`       Add a class
  `classList.remove()`    Remove a class
  `classList.toggle()`    Add/remove a class
  `!`                     NOT operator
  `true`                  Yes / enabled
  `false`                 No / disabled
  `setTimeout()`          Execute code after a delay
  `4000 ms`               4 seconds
  `display: none`         Hide element
  `position: fixed`       Position relative to viewport
  `inset: 0`              Fill all four sides
  `place-items: center`   Center grid content

------------------------------------------------------------------------

# ⚡ 19. `classList.toggle()` --- Important

There are two common forms.

### Without second argument

``` javascript
element.classList.toggle("hidden");
```

If the class exists:

``` text
hidden → removed
```

If it doesn't exist:

``` text
hidden → added
```

### With second argument

``` javascript
element.classList.toggle("hidden", true);
```

Always add:

``` text
hidden → added
```

And:

``` javascript
element.classList.toggle("hidden", false);
```

Always remove:

``` text
hidden → removed
```

This second form is particularly useful when your state is stored in a
variable such as `show`.

------------------------------------------------------------------------

# 🧱 20. Three Layers to Remember

When building DOM/UI questions, think in three layers:

``` text
HTML
 ↓
Structure

CSS
 ↓
Appearance

JavaScript
 ↓
Behavior
```

For this project:

``` text
HTML
├── Button
├── Overlay
└── Modal content

CSS
├── Center modal
├── Dark background
└── Hide/show class

JavaScript
├── Open
├── Close
├── Backdrop click
└── Automatic opening
```

------------------------------------------------------------------------

# 🎯 21. One-Minute Revision

If you only have one minute before the test, remember this:

``` javascript
function toggleModal(show) {
    document
        .getElementById("demoModal")
        .classList
        .toggle("hidden", !show);
}
```

Means:

``` text
Find modal
   ↓
Access classes
   ↓
Add/remove hidden
   ↓
Show or hide modal
```

And:

``` javascript
function closeOnBackdrop(e) {
    if (e.target.id === "demoModal") {
        toggleModal(false);
    }
}
```

Means:

``` text
Check what was clicked
        ↓
Was it the backdrop?
        ↓
YES → close
```

And:

``` javascript
setTimeout(() => toggleModal(true), 4000);
```

Means:

``` text
Wait 4 seconds
      ↓
Open modal
```

------------------------------------------------------------------------

# 🚀 22. Mini Challenges

Try these without looking at the answers.

### Challenge 1

Change the automatic opening time from **4 seconds to 2 seconds**.

### Challenge 2

Create a button that says:

``` text
Open Login
```

and opens the same modal.

### Challenge 3

Change the modal text to:

``` text
Welcome Back!
Please login to continue.
```

### Challenge 4

Make the modal close when the user presses the **Escape key**.

### Challenge 5

Add an input field and a Submit button inside the modal.

------------------------------------------------------------------------

# 🏁 Final Mental Model

``` text
HTML
  │
  ├── onclick → user interaction
  │
  ▼
JavaScript
  │
  ├── getElementById()
  ├── classList
  ├── toggle()
  ├── event.target
  └── setTimeout()
  │
  ▼
CSS
  │
  ├── .modal-overlay
  ├── .modal-content
  └── .hidden
  │
  ▼
VISIBLE / HIDDEN UI
```

> **Core idea:** JavaScript changes the HTML's CSS classes. The CSS
> classes control what the user sees.

------------------------------------------------------------------------

::: {align="center"}
### 💪 Learn the concept, don't memorize the code.

**DOM → Event → Class → UI**


:::
