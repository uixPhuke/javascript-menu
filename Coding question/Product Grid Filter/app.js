function filterGrid() {
  const query = document.getElementById('pSearch').value.toLowerCase();
  const cat = document.querySelector('input[name="pCat"]:checked').value;

  document.querySelectorAll('.pCard').forEach(card => {
    const titleMatch = card.innerText.toLowerCase().includes(query);
    const catMatch = (cat === 'all' || card.dataset.cat === cat);

    card.style.display = (titleMatch && catMatch) ? 'block' : 'none';
  });
}