<div align="center">

# 🔐 Password Validator & Registration Form

### Real-time password strength checking + confirm-password validation using JavaScript DOM

<p>
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&pause=1000&color=22C55E&center=true&vCenter=true&width=700&lines=Password+Strength+Validator;Weak+%7C+Medium+%7C+Strong;Real-time+DOM+Validation;Confirm+Password+Matching" alt="Typing SVG">
</p>

<p>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
</p>

</div>

---

## 📌 Project Overview

This mini project demonstrates how to build a **real-time password validation system** using HTML, CSS, and JavaScript.

The application:

- Checks password strength while typing.
- Classifies passwords as **Weak, Medium, or Strong**.
- Checks for numbers using Regular Expressions.
- Checks for special characters using Regular Expressions.
- Compares the password with the confirmation password.
- Enables the Submit button only when both passwords match.
- Changes the button opacity based on validation status.
- Uses JavaScript DOM manipulation to dynamically update the UI.

This is a useful practice problem for **JavaScript frontend coding assessments**, especially questions involving form validation and DOM manipulation.

---

## 🎯 Learning Objectives

| Concept | What you learn |
|---|---|
| `getElementById()` | Select HTML elements |
| `.value` | Read input values |
| `.length` | Check string length |
| Regular Expressions | Check numbers and special characters |
| `.test()` | Test a regex against a string |
| `className` | Remove existing classes |
| `classList.add()` | Add CSS classes dynamically |
| `.disabled` | Enable/disable buttons |
| `.style.opacity` | Change UI appearance |
| Ternary operator | Write compact conditions |
| `&&` | Combine conditions |
| `!==` | Check inequality |
| `===` | Compare values |

---

# 🧩 Project Structure

```text
password-validator/
│
├── index.html
├── style.css
└── app.js
```

---

# 🖥️ HTML

```html
<html>
    <link rel="stylesheet" href="style.css">

    <body>

        <input
            type="password"
            id="p1"
            placeholder="Password"
            oninput="valPass()"
        />

        <input
            type="password"
            id="p2"
            placeholder="Confirm Password"
            oninput="valPass()"
        />

        <button id="pSub" disabled>
            Submit Registration
        </button>

    </body>

    <script src="app.js"></script>
</html>
```

---

# 🎨 CSS

```css
input {
    width: 100%;
    padding: 8px;
    margin-bottom: 8px;
    border: 2px solid #334155;
}

input.weak {
    border-color: #ef4444;
}

input.medium {
    border-color: #f59e0b;
}

input.strong {
    border-color: #22c55e;
}

button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}
```

---

# ⚙️ JavaScript

```js
function valPass() {

    const p1 = document.getElementById('p1');

    const p2 = document.getElementById('p2');

    const btn = document.getElementById('pSub');

    const v = p1.value;

    p1.className = '';

    if (
        v.length >= 8 &&
        /[0-9]/.test(v) &&
        /[^a-zA-Z0-9]/.test(v)
    ) {

        p1.classList.add('strong');

    } else if (
        v.length >= 6 &&
        /[0-9]/.test(v)
    ) {

        p1.classList.add('medium');

    } else if (v.length > 0) {

        p1.classList.add('weak');

    }

    const match = v !== '' && v === p2.value;

    btn.disabled = !match;

    btn.style.opacity = match ? '1' : '0.5';
}
```

---

# 🔍 JavaScript Explanation

## 1. Select the Password Input

```js
const p1 = document.getElementById('p1');
```

Finds the HTML element whose `id` is `p1`.

```text
HTML
  ↓
id="p1"
  ↓
getElementById()
  ↓
p1 variable
```

Now `p1` represents the password input.

---

## 2. Select Confirm Password

```js
const p2 = document.getElementById('p2');
```

This selects:

```html
<input type="password" id="p2">
```

So:

```text
p1 → Password
p2 → Confirm Password
```

---

## 3. Select Submit Button

```js
const btn = document.getElementById('pSub');
```

This selects:

```html
<button id="pSub">
```

Now JavaScript can control the button.

---

# 📥 4. Read the Password

```js
const v = p1.value;
```

`.value` returns whatever the user typed.

Example:

```text
Password input:
Hello123!

        ↓

p1.value

        ↓

"Hello123!"
```

Therefore:

```js
v
```

contains the current password.

---

# 🧹 5. Remove Previous Strength Class

```js
p1.className = '';
```

Suppose the password was previously:

```html
class="medium"
```

When the user changes the password, the old class should be removed.

```js
p1.className = '';
```

clears it.

Then the function decides whether the new password is:

```text
Weak
Medium
Strong
```

---

# 💪 6. Strong Password Condition

```js
if (
    v.length >= 8 &&
    /[0-9]/.test(v) &&
    /[^a-zA-Z0-9]/.test(v)
)
```

There are three conditions.

### Condition 1 — Minimum 8 characters

```js
v.length >= 8
```

Example:

```text
Hello123!
```

Length is greater than or equal to 8.

---

### Condition 2 — Contains a number

```js
/[0-9]/.test(v)
```

`[0-9]` means any digit from:

```text
0 1 2 3 4 5 6 7 8 9
```

Examples:

```js
/[0-9]/.test("hello")
```

returns:

```text
false
```

But:

```js
/[0-9]/.test("hello5")
```

returns:

```text
true
```

---

### Condition 3 — Contains a special character

```js
/[^a-zA-Z0-9]/.test(v)
```

The `^` inside the brackets means **NOT**.

So:

```text
[^a-zA-Z0-9]
```

means:

> Find a character that is not a letter or number.

Examples of special characters:

```text
!
@
#
$
%
&
*
```

Therefore:

```js
/[^a-zA-Z0-9]/.test("Hello123!")
```

returns:

```text
true
```

---

# 🟢 7. Add Strong Class

If all three strong conditions are true:

```js
p1.classList.add('strong');
```

JavaScript adds:

```html
class="strong"
```

CSS then applies:

```css
input.strong {
    border-color: #22c55e;
}
```

Result:

```text
Strong password
      ↓
strong class
      ↓
Green border
```

---

# 🟠 8. Medium Password

If the password is not strong, this condition is checked:

```js
else if (
    v.length >= 6 &&
    /[0-9]/.test(v)
)
```

The password must:

- Have at least 6 characters.
- Contain at least one number.

Example:

```text
hello12
```

It has:

```text
✓ 7 characters
✓ number
✗ special character
```

So:

```js
p1.classList.add('medium');
```

CSS:

```css
input.medium {
    border-color: #f59e0b;
}
```

Result:

```text
Medium password
      ↓
Orange border
```

---

# 🔴 9. Weak Password

If the user typed something but it doesn't satisfy the medium or strong conditions:

```js
else if (v.length > 0) {
    p1.classList.add('weak');
}
```

Example:

```text
abc
```

The password is not empty, so it receives:

```html
class="weak"
```

CSS:

```css
input.weak {
    border-color: #ef4444;
}
```

Result:

```text
Weak password
      ↓
Red border
```

---

# 🔐 10. Password Matching

```js
const match = v !== '' && v === p2.value;
```

This checks two things.

### Check 1

```js
v !== ''
```

Means:

> Password must not be empty.

### Check 2

```js
v === p2.value
```

Means:

> Password and confirm password must be exactly the same.

Example:

```text
Password:         Hello123!
Confirm Password: Hello123!

                ↓

match = true
```

But:

```text
Password:         Hello123!
Confirm Password: Hello123

                ↓

match = false
```

---

# 🔘 11. Enable/Disable Submit

```js
btn.disabled = !match;
```

The `!` operator means **NOT**.

### When passwords match

```text
match = true
!match = false

btn.disabled = false
```

The button becomes enabled.

### When passwords don't match

```text
match = false
!match = true

btn.disabled = true
```

The button remains disabled.

---

# 🎚️ 12. Button Opacity

```js
btn.style.opacity = match ? '1' : '0.5';
```

This is the **ternary operator**.

The structure is:

```js
condition ? valueIfTrue : valueIfFalse
```

Therefore:

```js
match ? '1' : '0.5'
```

means:

```text
If match is true
    ↓
opacity = 1

Otherwise
    ↓
opacity = 0.5
```

---

# 🔄 Complete Logic Flow

```text
User types password
        ↓
    valPass()
        ↓
Get p1, p2 and button
        ↓
Read password value
        ↓
Remove old class
        ↓
Check password strength
        ↓
┌─────────────────────────┐
│ length >= 8?             │
│ contains number?         │
│ contains special char?  │
└─────────────────────────┘
        ↓
     STRONG
        │
        ├── No
        ↓
┌─────────────────────────┐
│ length >= 6?             │
│ contains number?         │
└─────────────────────────┘
        ↓
     MEDIUM
        │
        ├── No
        ↓
      WEAK
        ↓
Compare password
with confirmation
        ↓
     Match?
     /    \
   YES     NO
   ↓        ↓
Enable    Disable
button    button
```

---

# ⌨️ Why `oninput="valPass()"`?

Both inputs contain:

```html
oninput="valPass()"
```

This means:

> Run `valPass()` whenever the user changes the input.

So validation happens in real time.

```text
Type password
     ↓
valPass()

Type confirm password
     ↓
valPass()

Change password
     ↓
valPass()

Change confirm password
     ↓
valPass()
```

---

# 🧪 Example Cases

| Password | Number | Special | Length | Result |
|---|---:|---:|---:|---|
| `abc` | ❌ | ❌ | 3 | 🔴 Weak |
| `hello1` | ✅ | ❌ | 6 | 🟠 Medium |
| `hello12` | ✅ | ❌ | 7 | 🟠 Medium |
| `Hello123!` | ✅ | ✅ | 9 | 🟢 Strong |
| `abcdefgh` | ❌ | ❌ | 8 | 🔴 Weak |

---

# 🧠 Important JavaScript Patterns

## Get an element

```js
document.getElementById('id');
```

## Get input value

```js
input.value;
```

## String length

```js
value.length;
```

## Regex check

```js
/[0-9]/.test(value);
```

## Add CSS class

```js
element.classList.add('strong');
```

## Remove all classes

```js
element.className = '';
```

## Disable button

```js
button.disabled = true;
```

## Enable button

```js
button.disabled = false;
```

## Ternary operator

```js
condition ? trueValue : falseValue;
```

## Logical AND

```js
condition1 && condition2;
```

---

# 🎯 Accenture Coding Round Pattern

This problem combines several patterns commonly useful in frontend coding questions:

```text
DOM Selection
     +
Input Value
     +
String Methods
     +
Conditions
     +
Regex
     +
CSS Classes
     +
Button State
     +
Ternary Operator
```

If you understand this program, you should be comfortable with many basic form-validation questions.

---

# ⚡ Quick Revision

```js
const p1 = document.getElementById('p1');
```

Select element.

```js
const v = p1.value;
```

Read input.

```js
v.length
```

Get string length.

```js
/[0-9]/.test(v)
```

Check for a number.

```js
/[^a-zA-Z0-9]/.test(v)
```

Check for a special character.

```js
p1.classList.add('strong');
```

Add CSS class.

```js
const match = v !== '' && v === p2.value;
```

Check passwords.

```js
btn.disabled = !match;
```

Enable/disable button.

```js
btn.style.opacity = match ? '1' : '0.5';
```

Change opacity using ternary.

---

<div align="center">

### 🚀 Practice → Understand → Repeat → Crack the Coding Round

**JavaScript DOM • Regex • Conditions • Form Validation**

</div>
