let qStep = 1;

function navStep(dir) {
  document.getElementById(`q${qStep}`).classList.add('hidden');
  qStep += dir;
  document.getElementById(`q${qStep}`).classList.remove('hidden');

  document.getElementById('qPrev').disabled = (qStep === 1);

  if (qStep === 2) {
    document.getElementById('qNext').innerText = 'Submit';
    document.getElementById('qNext').onclick = () => {
      let score = document.querySelectorAll('input:checked').length;
      document.getElementById('qScore').innerText = `Score: ${score} / 2`;
      document.getElementById('qScore').classList.remove('hidden');
    };
  }
}