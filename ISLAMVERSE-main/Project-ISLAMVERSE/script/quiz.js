function resetquiz() {
    location.reload();
}

function checkAnswer(button, isCorrect) {
    var buttons = button.parentElement.querySelectorAll('button');
    buttons.forEach(function (btn) {
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

    var allAnswered = true;
    document.querySelectorAll('.options button').forEach(function (btn) {
        if (!btn.disabled) {
            allAnswered = false;
        }
    });

    if (allAnswered) {
        var correctCount = document.querySelectorAll('.options button.correct').length;
        if (correctCount === 10) {
            alert('Selamat! Teruslah kembangkan dan perdalami ilmu Islammu.');
        } else if (correctCount >= 8) {
            alert('Kamu perlu belajar lebih giat lagi, ya!');
        } else {
            alert('Kamu perlu meningkatkan pengetahuanmu lebih lagi, ya!');
        }

        resetquiz();
    }
}
