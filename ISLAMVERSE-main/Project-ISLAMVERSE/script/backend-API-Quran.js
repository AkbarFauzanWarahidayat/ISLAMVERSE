const showResponseMessage = (message = 'Internet terputus') => {
    alert(message);
}

const getSurat = () => {
    fetch('https://open-api.my.id/api/quran/surah', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            renderSurat(responseJson);
        })
        .catch(error => {
            console.log(`ada error ${error}`);
            showResponseMessage(error);
        })
}

const detailSurat = (nomor) => {
    fetch(`https://open-api.my.id/api/quran/surah/${nomor}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            const ayat = responseJson.ayat;

            window.scrollTo({
                top: 0,
                behavior: 'smooth' // untuk animasi smooth scroll
            });

            const containerSurat = document.querySelector('.container-surat');
            containerSurat.innerHTML = '';

            const containerHome = document.querySelector('.container-home');

            ayat.forEach(ayat => {
                // console.log(ayat.ar);
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
        })
        .catch(error => {
            console.log(`ada error ${error}`);
            showResponseMessage(error);
        })
}

const renderSurat = (surat) => {
    const containerSurat = document.querySelector('.container-surat');

    surat.forEach(surat => {
        const divListSurat = document.createElement('div');
        divListSurat.setAttribute('class', 'list-surat');

        divListSurat.innerHTML += `
                    <div class="nomor-surat">
                        <h1>${surat.nomor}</h1>
                    </div>

                    <div class="nama-surat">
                        <p style="text-align: center;">${surat.nama_latin}</p>
                        <p class="arti-surat" style="text-align: center;">${surat.arti} • ${surat.jumlah_ayat} ayat</p>
                    </div>

                    <div class="kaligrafi-surat">
                        <h2 dir="rtl" lang="ar">${surat.nama}</h2>
                    </div>
        `;
        containerSurat.appendChild(divListSurat);

        divListSurat.addEventListener('click', () => {
            detailSurat(surat.nomor);
            console.log(surat.nomor);
        });
    });
};
