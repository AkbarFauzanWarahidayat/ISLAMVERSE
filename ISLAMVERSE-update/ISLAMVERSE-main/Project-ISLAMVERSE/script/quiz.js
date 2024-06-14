function resetquiz() {
  location.reload();
}

function checkAnswer(button, isCorrect) {
  const buttons = button.parentElement.querySelectorAll('button');
  buttons.forEach((btn) => {
    btn.disabled = true;
    if (btn === button) {
      if (isCorrect) {
        btn.classList.add('correct');
      } else {
        btn.classList.add('incorrect');
      }
      btn.innerText = isCorrect ? 'Benar' : 'Salah';
    }
  });

  let allAnswered = true;
  document.querySelectorAll('.options button').forEach((btn) => {
    if (!btn.disabled) {
      allAnswered = false;
    }
  });
}

function result() {
  const correctCount = document.querySelectorAll('.options button.correct').length;

  alert(`Jumlah jawaban benar: ${correctCount}`);

  if (correctCount === 10) {
    alert('Selamat! Teruslah kembangkan dan perdalami ilmu Islammu.');
  } else if (correctCount >= 8) {
    alert('Kamu perlu belajar lebih giat lagi, ya!');
  } else if (correctCount > 0 && correctCount < 8) {
    alert('Kamu perlu meningkatkan pengetahuanmu lagi, ya!');
  } else {
    alert('Jawaban kamu belum benar atau Kamu belum menjawab satupun soal.');
  }

  resetquiz();
}
