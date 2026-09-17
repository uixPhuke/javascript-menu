function toggleModal(show) {
    document.getElementById('demoModal').classList.toggle('hidden', !show);
}

function closeOnBackdrop(e) {
    if (e.target.id === 'demoModal') {
       toggleModal(false); 
      }
}

// Automatically trigger after 4 seconds
setTimeout(() => toggleModal(true), 4000);

