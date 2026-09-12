function valPass() {
  const p1 = document.getElementById('p1');
  const p2 = document.getElementById('p2');
  const btn = document.getElementById('pSub');
  const v = p1.value;

  p1.className = '';
  if (v.length >= 8 && /[0-9]/.test(v) && /[^a-zA-Z0-9]/.test(v)) {
    p1.classList.add('strong');
  } else if (v.length >= 6 && /[0-9]/.test(v)) {
    p1.classList.add('medium');
  } else if (v.length > 0) {
    p1.classList.add('weak');
  }

  const match = v !== '' && v === p2.value;
  btn.disabled = !match;
  btn.style.opacity = match ? '1' : '0.5';
}