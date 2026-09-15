# 🔎 Product Grid Filter

A simple, responsive **Product Search + Category Filter** built with HTML, CSS, and vanilla JavaScript.

It demonstrates several important frontend concepts useful for coding assessments:

- DOM selection
- `input` and `change` events
- `innerText`
- `dataset`
- `querySelector`
- `querySelectorAll`
- `forEach()`
- Conditional filtering
- Dynamic `style.display`

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔍 Live Search | Filters products while typing |
| 🏷️ Category Filter | Filter by All, Tech, or Books |
| ⚡ Instant Update | No page reload required |
| 🎨 Responsive Grid | Adapts to smaller screens |
| 🧩 Vanilla JS | No framework or library required |
| 🎬 Card Animation | Cards smoothly appear/disappear |

---

## 📁 Project Structure

```text
product-filter/
│
├── index.html
├── style.css
└── app.js
```

---

## 🧠 How It Works

The filtering function runs whenever:

1. The user types in the search box.
2. The user changes the category radio button.

```html
<input
  type="text"
  id="pSearch"
  placeholder="Search product..."
  oninput="filterGrid()"
/>
```

```html
<div class="categories" onchange="filterGrid()">
```

Both events call:

```javascript
filterGrid();
```

---

# 🔎 Step 1 — Get the Search Query

```javascript
const query =
  document.getElementById('pSearch').value.toLowerCase();
```

### What happens?

```javascript
document.getElementById('pSearch')
```

Finds the search input.

```javascript
.value
```

Gets what the user typed.

```javascript
.toLowerCase()
```

Converts it to lowercase.

### Example

If the user types:

```text
LAPTOP
```

Then:

```javascript
query
```

becomes:

```text
laptop
```

This makes the search **case-insensitive**.

---

# 🏷️ Step 2 — Get Selected Category

```javascript
const cat =
  document
    .querySelector('input[name="pCat"]:checked')
    .value;
```

### Important

```css
input[name="pCat"]:checked
```

means:

> Find the checked radio button whose name is `pCat`.

For example:

```html
<input name="pCat" value="tech">
```

If Tech is selected:

```javascript
cat === "tech"
```

If All is selected:

```javascript
cat === "all"
```

---

# 📦 Step 3 — Select All Product Cards

```javascript
document.querySelectorAll('.pCard')
```

This selects every element having:

```css
.pCard
```

For example:

```html
<div class="pCard">Laptop</div>
<div class="pCard">JS Handbook</div>
```

Both cards are selected.

---

# 🔁 Step 4 — Loop Through Cards

```javascript
.forEach(card => {
```

The function checks each product individually.

Think:

```text
Card 1 → check
Card 2 → check
Card 3 → check
...
```

---

# 📝 Step 5 — Check Product Name

```javascript
const titleMatch =
  card.innerText
      .toLowerCase()
      .includes(query);
```

This is where `innerText` becomes important.

If the card contains:

```html
<div class="pCard">Laptop</div>
```

Then:

```javascript
card.innerText
```

returns:

```text
Laptop
```

After:

```javascript
.toLowerCase()
```

we get:

```text
laptop
```

Then:

```javascript
.includes(query)
```

checks whether the search text exists inside the product text.

### Example

Search:

```text
lap
```

Product:

```text
laptop
```

Result:

```javascript
true
```

But:

```text
Search: phone
Product: laptop
```

Result:

```javascript
false
```

---

# 🏷️ Step 6 — Check Category

Each product contains:

```html
<div class="pCard" data-cat="tech">
```

The custom attribute is:

```text
data-cat
```

JavaScript can access it using:

```javascript
card.dataset.cat
```

So:

```html
data-cat="tech"
```

becomes:

```javascript
card.dataset.cat
// "tech"
```

### Category condition

```javascript
const catMatch =
  (cat === 'all' || card.dataset.cat === cat);
```

This means:

```text
If category is "all"
        ↓
show every matching product

Otherwise
        ↓
product category must equal selected category
```

---

# 🧮 Step 7 — Combine Both Conditions

```javascript
titleMatch && catMatch
```

The product must satisfy:

```text
Search matches
        AND
Category matches
```

Example:

```text
Search = laptop
Category = tech
```

Laptop:

```text
titleMatch = true
catMatch   = true

true && true = true
```

So Laptop is displayed.

---

# 👁️ Step 8 — Show or Hide the Card

```javascript
card.style.display =
  (titleMatch && catMatch)
    ? 'block'
    : 'none';
```

This uses the **ternary operator**.

Equivalent to:

```javascript
if (titleMatch && catMatch) {
  card.style.display = 'block';
} else {
  card.style.display = 'none';
}
```

### Ternary structure

```javascript
condition ? valueIfTrue : valueIfFalse
```

Therefore:

```javascript
titleMatch && catMatch
  ? 'block'
  : 'none'
```

means:

```text
condition true  → display block
condition false → display none
```

---

# 🎬 Animated & Responsive CSS

Replace the basic CSS with this version:

```css
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 32px 20px;
  font-family: Arial, sans-serif;
  background: #0f172a;
  color: #f8fafc;
}

.container {
  width: min(900px, 100%);
  margin: auto;
}

.search {
  width: 100%;
  padding: 14px 16px;
  border: 1px solid #475569;
  border-radius: 12px;
  background: #1e293b;
  color: white;
  outline: none;
  transition: 0.25s ease;
}

.search:focus {
  border-color: #94a3b8;
  transform: translateY(-2px);
}

.categories {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 18px 0;
}

.categories label {
  padding: 9px 14px;
  border: 1px solid #475569;
  border-radius: 999px;
  cursor: pointer;
  transition: 0.25s ease;
}

.categories label:hover {
  transform: translateY(-2px);
  background: #1e293b;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.pCard {
  padding: 20px;
  border-radius: 14px;
  background: #334155;
  border: 1px solid #475569;
  transition:
    transform 0.25s ease,
    opacity 0.25s ease,
    box-shadow 0.25s ease;
  animation: cardIn 0.35s ease both;
}

.pCard:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
}

@keyframes cardIn {
  from {
    opacity: 0;
    transform: translateY(12px) scale(0.98);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@media (max-width: 600px) {
  body {
    padding: 20px 14px;
  }

  .grid {
    grid-template-columns: 1fr;
  }

  .categories {
    gap: 8px;
  }

  .categories label {
    flex: 1;
    text-align: center;
  }
}
```

---

# 📱 Responsive Layout

Desktop:

```text
┌─────────────────────────────────┐
│         Search Product          │
├─────────────────┬───────────────┤
│     Laptop      │  JS Handbook  │
└─────────────────┴───────────────┘
```

Mobile:

```text
┌──────────────────┐
│  Search Product  │
├──────────────────┤
│      Laptop      │
├──────────────────┤
│   JS Handbook    │
└──────────────────┘
```

The media query:

```css
@media (max-width: 600px)
```

changes the grid from:

```css
2 columns
```

to:

```css
1 column
```

---

# 🧪 Example Scenarios

### Example 1

Search:

```text
lap
```

Category:

```text
All
```

Result:

```text
Laptop
```

---

### Example 2

Search:

```text
js
```

Category:

```text
Books
```

Result:

```text
JS Handbook
```

---

### Example 3

Search:

```text
```

Category:

```text
Tech
```

Result:

```text
Laptop
```

---

### Example 4

Search:

```text
laptop
```

Category:

```text
Books
```

Result:

```text
Nothing
```

Because:

```text
Laptop → Tech
Books → selected
```

---

# 🧩 Complete JavaScript

```javascript
function filterGrid() {

  const query =
    document
      .getElementById('pSearch')
      .value
      .toLowerCase();

  const cat =
    document
      .querySelector('input[name="pCat"]:checked')
      .value;

  document
    .querySelectorAll('.pCard')
    .forEach(card => {

      const titleMatch =
        card.innerText
          .toLowerCase()
          .includes(query);

      const catMatch =
        (cat === 'all' ||
         card.dataset.cat === cat);

      card.style.display =
        (titleMatch && catMatch)
          ? 'block'
          : 'none';
    });
}
```

---

# 🎯 Accenture Coding Round — What to Remember

This type of question tests basic **DOM manipulation**.

Memorize these:

### Select by ID

```javascript
document.getElementById('id')
```

### Select one element

```javascript
document.querySelector('.class')
```

### Select multiple elements

```javascript
document.querySelectorAll('.class')
```

### Get input value

```javascript
input.value
```

### Get visible text

```javascript
element.innerText
```

### Get HTML

```javascript
element.innerHTML
```

### Get `data-*` attribute

```javascript
element.dataset.cat
```

### Hide element

```javascript
element.style.display = 'none';
```

### Show element

```javascript
element.style.display = 'block';
```

### Check text

```javascript
text.includes(query)
```

### Case-insensitive search

```javascript
text.toLowerCase()
```

---

# ⚠️ Common Traps

### Trap 1 — Using `innerHTML` unnecessarily

For product text:

```javascript
card.innerText
```

is sufficient.

You don't need:

```javascript
card.innerHTML
```

because you're searching text, not HTML.

---

### Trap 2 — Forgetting `.value`

Wrong:

```javascript
const query =
  document.getElementById('pSearch');
```

This gives you the **input element**.

Correct:

```javascript
const query =
  document.getElementById('pSearch').value;
```

This gives you what the user typed.

---

### Trap 3 — Forgetting `:checked`

Wrong:

```javascript
document.querySelector(
  'input[name="pCat"]'
).value;
```

This may select the first radio button.

Correct:

```javascript
document.querySelector(
  'input[name="pCat"]:checked'
).value;
```

This gets the currently selected radio button.

---

### Trap 4 — Confusing `dataset`

HTML:

```html
data-cat="tech"
```

JavaScript:

```javascript
card.dataset.cat
```

Not:

```javascript
card.data.cat
```

---

# 🚀 Quick Mental Model

Remember the entire function like this:

```text
USER TYPES
    ↓
Get search text
    ↓
USER SELECTS CATEGORY
    ↓
Get selected category
    ↓
LOOP THROUGH CARDS
    ↓
Does product text match?
    ↓
Does category match?
    ↓
      YES
       ↓
     SHOW

      NO
       ↓
     HIDE
```

---

## ⭐ One-Line Interview Explanation

> “The function reads the search query and selected category, loops through every product card, checks both the card's text and `data-cat` value, and displays the card only when both conditions match.”

---

## 🧠 Mini Challenge

Try modifying the project so that it displays:

```text
No products found
```

when every product is hidden.

**Hint:** Keep a counter:

```javascript
let visibleCount = 0;
```

and increase it whenever a card matches.

