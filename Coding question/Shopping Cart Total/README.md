# 🛒 Interactive Shopping Cart

```{=html}
<p align="center">
```
`<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=28&pause=1000&color=36BCF7&center=true&vCenter=true&width=700&lines=Interactive+Shopping+Cart;JavaScript+DOM+Practice;Quantity+%7C+Subtotal+%7C+Discount+%7C+Total" alt="Typing animation" />`{=html}
```{=html}
</p>
```
```{=html}
<p align="center">
```
`<b>`{=html}🚀 A JavaScript DOM practice project focused on cart
calculations and dynamic UI updates.`</b>`{=html}
```{=html}
</p>
```
```{=html}
<p align="center">
```
`<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">`{=html}
`<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">`{=html}
`<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">`{=html}
```{=html}
</p>
```

------------------------------------------------------------------------

## 📌 Project Overview

This project implements a simple **interactive shopping cart** using
HTML, CSS, and JavaScript.

The user can increase or decrease the quantity of products. Whenever the
quantity changes:

-   🔢 The quantity is updated
-   💰 The product subtotal is recalculated
-   🧮 The complete cart total is recalculated
-   🎁 A 10% discount is applied when the total is greater than `100`
-   🏷️ A discount badge is shown or hidden automatically

The main goal is to practice **JavaScript DOM manipulation, event-driven
logic, loops, calculations, and dynamic UI updates**.

------------------------------------------------------------------------

# 🎯 What You Will Learn

  JavaScript Concept     Purpose
  ---------------------- ----------------------------------------------------
  `function`             Create reusable logic
  Function parameters    Receive the clicked button and quantity change
  `closest()`            Find the product row containing the clicked button
  `querySelector()`      Find elements inside a specific row
  `querySelectorAll()`   Find all product rows
  `.innerText`           Read/update visible text
  `dataset`              Read HTML `data-*` attributes
  `parseInt()`           Convert text to an integer
  `parseFloat()`         Convert text to a decimal number
  `Math.max()`           Prevent quantity from becoming negative
  `forEach()`            Loop through all cart rows
  `+=`                   Add to a running total
  `*=`                   Apply a multiplication operation
  `if / else`            Apply conditional discount logic
  `.style.display`       Show/hide the discount badge
  `toFixed(2)`           Format currency to two decimal places

------------------------------------------------------------------------

# 📁 Project Structure

``` text
shopping-cart/
│
├── index.html
├── style.css
├── app.js
└── README.md
```

### File responsibilities

``` text
index.html
    ↓
Cart structure

style.css
    ↓
Cart appearance

app.js
    ↓
Quantity + subtotal + total logic

README.md
    ↓
Project documentation
```

------------------------------------------------------------------------

# 🧠 JavaScript Architecture

The JavaScript contains two important functions:

``` js
adjustQty(btn, delta)
recalculateTotal()
```

They work together:

``` text
User clicks + / -
       ↓
   adjustQty()
       ↓
Change quantity
       ↓
Calculate row subtotal
       ↓
recalculateTotal()
       ↓
Calculate entire cart
       ↓
Apply discount if required
       ↓
Update total on screen
```

------------------------------------------------------------------------

# 1️⃣ `adjustQty(btn, delta)`

``` js
function adjustQty(btn, delta) {
```

This function is responsible for changing the quantity of **one
particular product**.

It receives two parameters:

``` text
btn
delta
```

### `btn`

`btn` represents the button the user clicked.

For example:

``` html
<button onclick="adjustQty(this, 1)">+</button>
```

Here:

``` text
this → clicked button
```

### `delta`

`delta` tells JavaScript how much the quantity should change.

``` text
+ button → delta = 1
- button → delta = -1
```

So:

``` text
adjustQty(button, 1)
```

means:

> Increase quantity by 1.

And:

``` text
adjustQty(button, -1)
```

means:

> Decrease quantity by 1.

------------------------------------------------------------------------

# 2️⃣ Find the Product Row

``` js
const row = btn.closest('tr');
```

This is an important DOM technique.

Suppose:

``` html
<tr>
    <td>Phone</td>
    <td>
        <button>+</button>
    </td>
</tr>
```

When the button is clicked:

``` js
btn.closest('tr')
```

means:

> Starting from the clicked button, move upward until the nearest `<tr>`
> is found.

### Think of it like this:

``` text
button
   ↑
  td
   ↑
  tr  ← closest('tr')
```

Therefore:

``` js
const row = btn.closest('tr');
```

gives us the **product row associated with the clicked button**.

------------------------------------------------------------------------

# 3️⃣ Find the Quantity Element

``` js
const qtySpan = row.querySelector('.qty');
```

Now that we know the correct row, we search **inside that row**.

Suppose:

``` html
<span class="qty">2</span>
```

Then:

``` js
row.querySelector('.qty')
```

finds that element.

### Why search inside `row`?

Imagine there are 5 products.

If we used:

``` js
document.querySelector('.qty')
```

we could accidentally get the first quantity in the entire document.

But:

``` js
row.querySelector('.qty')
```

means:

> Find the `.qty` belonging to THIS product.

This pattern is very useful:

``` text
clicked button
      ↓
closest row
      ↓
find element inside row
```

------------------------------------------------------------------------

# 4️⃣ Calculate the New Quantity

``` js
let qty = Math.max(
    0,
    parseInt(qtySpan.innerText) + delta
);
```

This line contains three concepts.

------------------------------------------------------------------------

## `qtySpan.innerText`

Suppose:

``` html
<span class="qty">2</span>
```

Then:

``` js
qtySpan.innerText
```

returns:

``` text
"2"
```

It is text.

------------------------------------------------------------------------

## `parseInt()`

``` js
parseInt("2")
```

converts:

``` text
"2"
```

into:

``` text
2
```

Now arithmetic can be performed.

------------------------------------------------------------------------

## Add `delta`

Suppose:

``` text
current quantity = 2
delta = 1
```

Then:

``` text
2 + 1 = 3
```

For the minus button:

``` text
current quantity = 2
delta = -1

2 + (-1) = 1
```

------------------------------------------------------------------------

# 5️⃣ Why `Math.max(0, ...)`?

This prevents the quantity from becoming negative.

Without `Math.max()`:

``` text
quantity = 0
delta = -1

0 + (-1) = -1
```

A shopping cart should not normally have:

``` text
Quantity = -1
```

So:

``` js
Math.max(0, -1)
```

returns:

``` text
0
```

### Therefore:

``` js
Math.max(0, newQuantity)
```

means:

> Never allow the quantity to go below zero.

------------------------------------------------------------------------

# 6️⃣ Update Quantity on Screen

``` js
qtySpan.innerText = qty;
```

Suppose:

``` text
old quantity = 2
new quantity = 3
```

This changes:

``` html
<span class="qty">2</span>
```

into:

``` html
<span class="qty">3</span>
```

The webpage is updated immediately.

------------------------------------------------------------------------

# 7️⃣ Get Product Price

``` js
const price = parseFloat(row.dataset.price);
```

Suppose the row contains:

``` html
<tr data-price="49.99">
```

Then:

``` js
row.dataset.price
```

returns:

``` text
"49.99"
```

It is a string.

So:

``` js
parseFloat("49.99")
```

becomes:

``` text
49.99
```

------------------------------------------------------------------------

# 🧩 Understanding `dataset`

HTML:

``` html
data-price="49.99"
```

JavaScript:

``` js
row.dataset.price
```

The general rule is:

``` text
HTML                 JavaScript

data-price="50"  →   element.dataset.price

data-name="Phone" →  element.dataset.name
```

This is how custom `data-*` attributes can store information in HTML.

------------------------------------------------------------------------

# 8️⃣ Calculate the Subtotal

``` js
row.querySelector('.subtotal').innerText =
    `$${(price * qty).toFixed(2)}`;
```

Suppose:

``` text
price = 49.99
qty = 3
```

Then:

``` text
49.99 × 3 = 149.97
```

------------------------------------------------------------------------

## `toFixed(2)`

``` js
149.97.toFixed(2)
```

keeps two decimal places.

Example:

``` js
100.toFixed(2)
```

produces:

``` text
"100.00"
```

Then:

``` js
`$${...}`
```

adds the `$`.

Final result:

``` text
$149.97
```

------------------------------------------------------------------------

# 9️⃣ Recalculate the Whole Cart

``` js
recalculateTotal();
```

Changing one product also changes the **entire cart total**.

So after updating the individual subtotal, we call another function.

``` text
adjustQty()
     ↓
update one product
     ↓
recalculateTotal()
     ↓
calculate everything
```

------------------------------------------------------------------------

# 🔟 `recalculateTotal()`

``` js
function recalculateTotal() {
```

This function calculates the total price of **all products in the
cart**.

------------------------------------------------------------------------

# 1️⃣1️⃣ Start Total at Zero

``` js
let total = 0;
```

We use `total` as an accumulator.

``` text
total = 0
```

Then each product adds its subtotal.

------------------------------------------------------------------------

# 1️⃣2️⃣ Select Every Cart Row

``` js
document.querySelectorAll('#cartBody tr')
```

Suppose the table contains:

``` text
<tr>Phone</tr>
<tr>Laptop</tr>
<tr>Mouse</tr>
```

This selector finds all of them.

The selector:

``` text
#cartBody tr
```

means:

> Find every `<tr>` inside the element whose ID is `cartBody`.

------------------------------------------------------------------------

# 1️⃣3️⃣ Loop Through Every Row

``` js
.forEach(r => {
```

`forEach()` runs the code once for every row.

Example:

``` text
Row 1 → execute
Row 2 → execute
Row 3 → execute
```

The variable `r` means the **current row**.

You could also write:

``` js
.forEach(row => {
```

which is often easier to understand.

------------------------------------------------------------------------

# 1️⃣4️⃣ Get Price of Current Row

``` js
const price = parseFloat(r.dataset.price);
```

For example:

``` html
<tr data-price="50">
```

becomes:

``` js
price = 50;
```

------------------------------------------------------------------------

# 1️⃣5️⃣ Get Quantity of Current Row

``` js
const qty = parseInt(
    r.querySelector('.qty').innerText
);
```

The process is:

``` text
r
 ↓
find .qty
 ↓
get innerText
 ↓
convert using parseInt()
 ↓
number
```

Example:

``` text
<span class="qty">3</span>
```

becomes:

``` text
"3"
 ↓
parseInt()
 ↓
3
```

------------------------------------------------------------------------

# 1️⃣6️⃣ Add Product Total

``` js
total += price * qty;
```

This is shorthand for:

``` js
total = total + (price * qty);
```

Suppose the cart contains:

  Product      Price   Quantity   Subtotal
  ---------- ------- ---------- ----------
  Phone           50          2        100
  Mouse           20          3         60
  Keyboard        40          1         40

The loop calculates:

``` text
Initial:
total = 0

Phone:
total = 0 + 100
      = 100

Mouse:
total = 100 + 60
      = 160

Keyboard:
total = 160 + 40
        = 200
```

Final:

``` text
total = 200
```

------------------------------------------------------------------------

# 1️⃣7️⃣ Find the Discount Badge

``` js
const badge = document.getElementById('cartBadge');
```

This finds the HTML element used to display the discount message.

For example:

``` html
<span id="cartBadge">10% OFF</span>
```

------------------------------------------------------------------------

# 1️⃣8️⃣ Check Discount Condition

``` js
if (total > 100) {
```

This asks:

> Is the cart total greater than 100?

### Example

``` text
total = 150
```

Then:

``` text
150 > 100
```

is:

``` text
true
```

The discount is applied.

------------------------------------------------------------------------

# 1️⃣9️⃣ Apply 10% Discount

``` js
total *= 0.9;
```

This is shorthand for:

``` js
total = total * 0.9;
```

Why `0.9`?

Because:

``` text
100% - 10% = 90%
```

And:

``` text
90% = 0.90
```

So:

``` text
Original total = 200

200 × 0.9 = 180
```

Final total:

``` text
180
```

------------------------------------------------------------------------

# 2️⃣0️⃣ Show the Discount Badge

``` js
badge.style.display = 'inline-block';
```

This makes the badge visible.

For example:

``` text
10% OFF
```

can now appear on the page.

------------------------------------------------------------------------

# 2️⃣1️⃣ If Total Is 100 or Less

``` js
else {
    badge.style.display = 'none';
}
```

If:

``` text
total = 80
```

then:

``` text
80 > 100
```

is false.

So the badge is hidden.

``` js
badge.style.display = 'none';
```

------------------------------------------------------------------------

# 2️⃣2️⃣ Display the Final Total

``` js
document.getElementById('cartTotal').innerText =
    total.toFixed(2);
```

Suppose:

``` text
total = 180
```

Then:

``` js
total.toFixed(2)
```

produces:

``` text
"180.00"
```

The value is then displayed in the cart total element.

------------------------------------------------------------------------

# 🔥 Complete Flow

``` text
                  USER CLICKS + / -
                          ↓
                    adjustQty()
                          ↓
                 Find clicked row
                          ↓
                 Find quantity
                          ↓
               Read current quantity
                          ↓
                  Add delta (+1/-1)
                          ↓
                 Math.max(0, value)
                          ↓
                  Update quantity
                          ↓
                  Get product price
                          ↓
                price × quantity
                          ↓
                Update subtotal
                          ↓
                recalculateTotal()
                          ↓
                Find all cart rows
                          ↓
                  forEach(row)
                          ↓
                 price × quantity
                          ↓
                  Add to total
                          ↓
                 Is total > 100?
                    /          \
                  YES          NO
                   ↓            ↓
             10% discount     No discount
                   ↓            ↓
             Show badge       Hide badge
                    \          /
                     ↓        ↓
                   Display total
```

------------------------------------------------------------------------

# 🧪 Example Walkthrough

Suppose the cart contains:

``` text
Phone
Price = $60
Quantity = 2

Mouse
Price = $30
Quantity = 1
```

### Phone

``` text
60 × 2 = 120
```

### Mouse

``` text
30 × 1 = 30
```

### Cart total

``` text
120 + 30 = 150
```

Since:

``` text
150 > 100
```

10% discount applies:

``` text
150 × 0.9 = 135
```

Final:

``` text
$135.00
```

------------------------------------------------------------------------

# 🧠 Important Concepts to Master

## `closest()`

``` js
btn.closest('tr')
```

> Find the nearest parent `<tr>`.

------------------------------------------------------------------------

## `querySelector()`

``` js
row.querySelector('.qty')
```

> Find one matching element inside `row`.

------------------------------------------------------------------------

## `querySelectorAll()`

``` js
document.querySelectorAll('#cartBody tr')
```

> Find all matching elements.

------------------------------------------------------------------------

## `dataset`

``` js
row.dataset.price
```

> Read `data-price`.

------------------------------------------------------------------------

## `parseInt()`

``` js
parseInt("5")
```

→ `5`

Used for integers.

------------------------------------------------------------------------

## `parseFloat()`

``` js
parseFloat("49.99")
```

→ `49.99`

Used for decimal numbers.

------------------------------------------------------------------------

## `Math.max()`

``` js
Math.max(0, quantity)
```

> Prevent quantity from going below zero.

------------------------------------------------------------------------

## `forEach()`

``` js
rows.forEach(row => {
    // logic
});
```

> Run code for every row.

------------------------------------------------------------------------

## `+=`

``` js
total += value;
```

same as:

``` js
total = total + value;
```

------------------------------------------------------------------------

## `*=`

``` js
total *= 0.9;
```

same as:

``` js
total = total * 0.9;
```

------------------------------------------------------------------------

## `toFixed(2)`

``` js
price.toFixed(2)
```

> Format the number to two decimal places.

------------------------------------------------------------------------

# 🎯 What This Coding Question Tests

This one question combines several frontend coding skills:

``` text
DOM Traversal
      +
DOM Selection
      +
Reading HTML data
      +
Number Conversion
      +
Arithmetic
      +
Validation of boundaries
      +
Loops
      +
Conditional Logic
      +
Dynamic UI Updates
      +
CSS manipulation
```

------------------------------------------------------------------------

# ⭐ Most Important Pattern

Remember this pattern for similar coding questions:

``` js
const row = btn.closest('tr');

const value = row.querySelector('.something');
```

It means:

``` text
Find the element I interacted with
              ↓
Find its relevant parent/container
              ↓
Find something inside that container
```

This pattern is extremely useful for **cart, product list, todo list,
table, and dynamic form questions**.

------------------------------------------------------------------------

# 🚀 Quick Revision

``` text
adjustQty()
│
├── closest()
├── querySelector()
├── innerText
├── parseInt()
├── Math.max()
├── dataset
├── parseFloat()
├── toFixed()
└── recalculateTotal()
        │
        ├── querySelectorAll()
        ├── forEach()
        ├── price × quantity
        ├── if / else
        ├── *= 0.9
        ├── style.display
        └── toFixed(2)
```

------------------------------------------------------------------------

```{=html}
<p align="center">
```
`<b>`{=html}💡 Don't memorize the code. Remember the flow:`</b>`{=html}
```{=html}
</p>
```
```{=html}
<p align="center">
```
`<b>`{=html}Click → Find Row → Read → Calculate → Update → Recalculate
Total`</b>`{=html}
```{=html}
</p>
```
```{=html}
<p align="center">
```
⭐ `<i>`{=html}Practice rebuilding this without looking at the
solution.`</i>`{=html} ⭐
```{=html}
</p>
```
