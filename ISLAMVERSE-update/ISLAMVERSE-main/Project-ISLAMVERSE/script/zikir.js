let count = 0;
let state = 0; // state 0 untuk Subhanallah, state 1 untuk Alhamdulillah, state 2 untuk Allahuakbar

function increment() {
  count++;

  // Jika count mencapai 33, panggil fungsi dzikirElement()
  if (count === 33) {
    dzikirElement();
  } else {
    updateText();
  }
}

function updateText() {
  if (state === 0) {
    document.getElementById('count').innerHTML = `<p>subhaanallah</p><br>${count}`;
  } else if (state === 1) {
    document.getElementById('count').innerHTML = `<p>alhamdulillah</p><br>${count}`;
  } else if (state === 2) {
    document.getElementById('count').innerHTML = `<p>Allahu Akbar</p><br>${count}`;
  }
}

function dzikirElement() {
  count = 0;
  state++;

  if (state === 3) {
    document.getElementById('message').innerHTML = '<button onclick="restart()" style="transition: transition: background-color 0.3s;background-color: #0A4D45; color: white; font-size: 24px; border: none; cursor: pointer; border-radius: 50px;">Zikir Lagi</button>';
    document.getElementById('count').innerHTML = 'Laa ilahaillah';
    document.getElementById('count').innerHTML = '<p>La ilaha illallahu wahdahu la syarikalah, la hul mulku walahul hamdu wa huwa ‘la kulli syai-in qadir</p><br>';
    document.getElementById('startButton').style.display = 'none';
  } else {
    updateText();
  }
}

function restart() {
  count = 0;
  state = 0;
  document.getElementById('count').innerText = 'subhaanallah';
  document.getElementById('message').innerText = '';
  document.getElementById('startButton').style.display = 'block';
}
