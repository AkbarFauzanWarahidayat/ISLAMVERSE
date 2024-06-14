const showResponseMessage = (message = 'Internet terputus') => {
  alert(message);
};

let currentAudio = null;
let currentPlayButton = null;

const getSurat = () => {
  fetch('https://open-api.my.id/api/quran/surah', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((responseJson) => {
      renderSurat(responseJson);
    })
    .catch((error) => {
      console.log(`ada error ${error}`);
      showResponseMessage(error);
    });
};

const detailSurat = (nomor, namaLatin) => {
  fetch(`https://open-api.my.id/api/quran/surah/${nomor}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((responseJson) => {
      const { ayat } = responseJson;

      window.scrollTo({
        top: 0,
        behavior: 'smooth', // untuk animasi smooth scroll
      });

      const containerSurat = document.querySelector('.container-surat');
      containerSurat.innerHTML = '';

      const containerHome = document.querySelector('.container-home');

      const divContainerSurat = document.createElement('div');
      divContainerSurat.setAttribute('class', 'container-surat-judul');
  
      // Membuat judul surat
      const divTitleSurat = document.createElement('div');
      divTitleSurat.innerHTML = `
        <div class="nomor-surat">
          <h1>${responseJson.nomor}</h1>
        </div>
        <div class="nama-surat">
          <p style="text-align: center;">${namaLatin}</p>
          <p class="arti-surat" style="text-align: center;">${responseJson.arti} • ${responseJson.jumlah_ayat} ayat</p>
        </div>
        <div class="kaligrafi-surat">
          <h4 dir="rtl" lang="ar" class="tulisan-kaligrafi">${responseJson.nama}</h4>
        </div>
        <div class="container-audio">
          <button class="play-button" data-index="${responseJson.nomor}"><i class="fa fa-play"></i></button>
          <audio class="audio-element" src="${responseJson.audio}" preload="none" data-index="${responseJson.nomor}"></audio>
        </div>
      `;

      // Memasukkan judul surat ke dalam container-surat
      divContainerSurat.appendChild(divTitleSurat);

      // Memasukkan container-surat ke dalam container-home
      containerHome.appendChild(divContainerSurat);
      divContainerSurat.style.marginBottom = '30px';

      ayat.forEach((ayat) => {
        const divContainerListAyat = document.createElement('div');
        divContainerListAyat.setAttribute('class', 'container-list-ayat');

        divContainerListAyat.innerHTML += `
          <div class="list-ayat">
            <div class="nomor-ayat">
              <h1>${ayat.nomor}</h1>
            </div>
            <div class="arab-ayat">
              <h2 dir="rtl" lang="ar">${ayat.ar}</h2>
            </div>
          </div>
          <div class="arti-ayat">
            <p class="arab-latin">${ayat.tr}</p>
            <p class="arti-ayat">${ayat.idn}</p>
          </div>
        `;
        containerHome.appendChild(divContainerListAyat);
      });

      const playButtons = document.querySelectorAll('.play-button');
      const audioElements = document.querySelectorAll('.audio-element');

      playButtons.forEach((playButton, index) => {
        const audioElement = audioElements[index];
        playButton.addEventListener('click', () => {
          if (currentAudio && currentAudio !== audioElement) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
            currentPlayButton.innerHTML = '<i class="fa fa-play"></i>';
          }
          if (audioElement.paused) {
            audioElement.play();
            playButton.innerHTML = '<i class="fa fa-pause"></i>';
            currentAudio = audioElement;
            currentPlayButton = playButton;
          } else {
            audioElement.pause();
            audioElement.currentTime = 0;
            playButton.innerHTML = '<i class="fa fa-play"></i>';
            currentAudio = null;
            currentPlayButton = null;
          }
        });
      });
    })
    .catch((error) => {
      console.log(`ada error ${error}`);
      showResponseMessage(error);
    });
};

const renderSurat = (surat) => {
  const containerSurat = document.querySelector('.container-surat');

  surat.forEach((surat) => {
    const divListSurat = document.createElement('div');
    divListSurat.setAttribute('class', 'list-surat');

    divListSurat.innerHTML = `
      <div class="title-surat">
        <div class="nomor-surat">
          <h1>${surat.nomor}</h1>
        </div>
        <div class="nama-surat">
          <p style="text-align: center;">${surat.nama_latin}</p>
          <p class="arti-surat" style="text-align: center;">${surat.arti} • ${surat.jumlah_ayat} ayat</p>
        </div>
        <div class="kaligrafi-surat">
          <h4 dir="rtl" lang="ar" class="tulisan-kaligrafi">${surat.nama}</h4>
        </div>
      </div>
      <div class="container-audio">
        <button class="play-button" data-index="${surat.nomor}"><i class="fa fa-play"></i></button>
        <audio class="audio-element" src="${surat.audio}" preload="none" data-index="${surat.nomor}"></audio>
      </div>
    `;

    containerSurat.appendChild(divListSurat);

    const playButton = divListSurat.querySelector('.play-button');
    const audioElement = divListSurat.querySelector('.audio-element');

    playButton.addEventListener('click', () => {
      if (audioElement.paused) {
        audioElement.play();
        playButton.innerHTML = '<i class="fa fa-pause"></i>';
        if (currentAudio && currentAudio !== audioElement) {
          currentAudio.pause();
          currentAudio.currentTime = 0;
          currentPlayButton.innerHTML = '<i class="fa fa-play"></i>';
        }
        currentAudio = audioElement;
        currentPlayButton = playButton;
      } else {
        audioElement.pause();
        audioElement.currentTime = 0;
        playButton.innerHTML = '<i class="fa fa-play"></i>';
        currentAudio = null;
        currentPlayButton = null;
      }
    });
    
    const titleSurat = divListSurat.querySelector('.title-surat');

    titleSurat.addEventListener('click', () => {
      detailSurat(surat.nomor, surat.nama_latin);
      console.log(surat.nomor, surat.nama_latin);
    });
  });
};

getSurat();
