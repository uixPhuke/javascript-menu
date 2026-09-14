function adjustQty(btn, delta) {
  const row = btn.closest('tr');
  const qtySpan = document.querySelector('.qty');
  let qty = Math.max(0, parseInt(qtySpan.innerText) + delta);
  qtySpan.innerText = qty;

  const price = parseFloat(row.dataset.price);
  row.querySelector('.subtotal').innerText = `$${(price * qty).toFixed(2)}`;
  console.log(`Shlock pay : ${(price * qty).toFixed(2)}`)

  recalculateTotal();
}

function recalculateTotal() {
  let total = 0;
  document.querySelectorAll('#cartBody tr').forEach(r => {
    const price = parseFloat(r.dataset.price);
    const qty = parseInt(r.querySelector('.qty').innerText);
    total += price * qty;
  });

  const badge = document.getElementById('cartBadge');
  if (total > 100) {
    total *= 0.9; // Apply 10% discount
    badge.style.display = 'inline-block';
  } else {
    badge.style.display = 'none';
  }

  document.getElementById('cartTotal').innerText = total.toFixed(2);
}