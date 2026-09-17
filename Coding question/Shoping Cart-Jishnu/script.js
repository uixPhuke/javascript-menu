// ============================================================
// STEP 1: Data — an array of product objects (our "database")
// ============================================================
const products = [
  { id: 1, name: 'Wireless Mouse', price: 19.99 },
  { id: 2, name: 'Mechanical Keyboard', price: 49.99 },
  { id: 3, name: 'USB-C Hub', price: 24.5 },
  { id: 4, name: 'Laptop Stand', price: 34.0 },
  { id: 5, name: 'Webcam 1080p', price: 39.99 },
  { id: 6, name: 'Noise-Cancelling Headphones', price: 89.99 },
];

// The cart starts empty. Each cart item looks like:
// { id: 1, name: 'Wireless Mouse', price: 19.99, quantity: 2 }
let cart = [];

const TAX_RATE = 0.08;

// ============================================================
// STEP 2: DOM references
// ============================================================
const productList = document.getElementById('productList');
const cartList = document.getElementById('cartList');
const subtotalEl = document.getElementById('subtotal');
const taxEl = document.getElementById('tax');
const totalEl = document.getElementById('total');
const clearCartBtn = document.getElementById('clearCartBtn');

// ============================================================
// STEP 3: Helper — format a number as currency
// ============================================================
function formatCurrency(amount) {
  return `$${amount.toFixed(2)}`; // toFixed(2) forces exactly 2 decimal places
}

// ============================================================
// STEP 4: Render the product list (runs once on page load)
// ============================================================
function renderProducts() {
  // .map() transforms each product object into an HTML string,
  // then .join('') stitches all the strings into one block
  productList.innerHTML = products
    .map(
      (product) => `
      <div class="product-card">
        <div class="product-info">
          <div class="name">${product.name}</div>
          <div class="price">${formatCurrency(product.price)}</div>
        </div>
        <button class="add-btn" data-id="${product.id}">Add</button>
      </div>
    `
    )
    .join('');
}

// ============================================================
// STEP 5: Add a product to the cart
// ============================================================
function addToCart(productId) {
  // .find() searches the array and returns the FIRST match, or undefined
  const product =
   products.find((p) => 
    p.id === productId);
  if (!product) return; // safety check — id didn't match any product

  // Check if this item is already in the cart
  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    // Already in the cart — just bump the quantity
    existingItem.quantity += 1;
  } else {
    // New to the cart — spread the product's fields, then add a quantity
    cart.push({ ...product, quantity: 1 });
  }

  renderCart();
}

// ============================================================
// STEP 6: Change quantity (used by the +/- buttons)
// ============================================================
function changeQuantity(productId, delta) {
  const item = cart.find((item) => item.id === productId);
  if (!item) return;

  item.quantity += delta;

  if (item.quantity <= 0) {
    removeFromCart(productId);
    return;
  }

  renderCart();
}

// ============================================================
// STEP 7: Remove an item entirely
// ============================================================
function removeFromCart(productId) {
  // .filter() keeps everything EXCEPT the matching id —
  // this is the standard "remove by id" pattern for arrays of objects
  cart = cart.filter((item) => item.id !== productId);
  renderCart();
}

// ============================================================
// STEP 8: Calculate totals using reduce()
// ============================================================
function calculateSubtotal() {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

function calculateTax(subtotal) {
  return subtotal * TAX_RATE;
}

// ============================================================
// STEP 9: Render the cart list + summary
// ============================================================
function renderCart() {
  if (cart.length === 0) {
    cartList.innerHTML = '<p class="empty-message">Your cart is empty.</p>';
  } else {
    cartList.innerHTML = cart
      .map(
        (item) => `
        <div class="cart-row">
          <span class="cart-item-name">${item.name}</span>

          <div class="qty-controls">
            <button class="qty-btn" data-action="decrease" data-id="${item.id}">-</button>
            <span>${item.quantity}</span>
            <button class="qty-btn" data-action="increase" data-id="${item.id}">+</button>
          </div>

          <span>${formatCurrency(item.price * item.quantity)}</span>

          <button class="remove-btn" data-action="remove" data-id="${item.id}">Remove</button>
        </div>
      `
      )
      .join('');
  }

  const subtotal = calculateSubtotal();
  const tax = calculateTax(subtotal);
  const total = subtotal + tax;

  subtotalEl.textContent = formatCurrency(subtotal);
  taxEl.textContent = formatCurrency(tax);
  totalEl.textContent = formatCurrency(total);
}

// ============================================================
// STEP 10: Event delegation — ONE listener handles ALL product "Add" buttons,
// even though there are 6 of them and none were created with individual listeners
// ============================================================
productList.addEventListener('click', function (e) {
  if (e.target.classList.contains('add-btn')) {
    // data-id is stored as a string in the DOM — convert it back to a number
    const productId = Number(e.target.dataset.id);
    addToCart(productId);
  }
});

// ============================================================
// STEP 11: Event delegation for the cart — handles increase/decrease/remove
// for every row, including rows added AFTER the page first loaded
// ============================================================
cartList.addEventListener('click', function (e) {
  const action = e.target.dataset.action;
  if (!action) return; // click wasn't on a button with a data-action attribute

  const productId = Number(e.target.dataset.id);

  if (action === 'increase') {
    changeQuantity(productId, 1);
  } else if (action === 'decrease') {
    changeQuantity(productId, -1);
  } else if (action === 'remove') {
    removeFromCart(productId);
  }
});

// ============================================================
// STEP 12: Clear the entire cart
// ============================================================
clearCartBtn.addEventListener('click', function () {
  cart = [];
  renderCart();
});

// ============================================================
// STEP 13: Initial render on page load
// ============================================================
renderProducts();
renderCart();