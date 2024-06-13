function calculateZakat() {
  const formattedMonthlyIncome = document.getElementById('monthlyIncome').value;

  // Menghapus simbol mata uang dan tanda titik jika ada
  const monthlyIncome = parseInt(formattedMonthlyIncome.replace(/[^\d]/g, ''), 10);
  const yearlyIncome = monthlyIncome * 12;
  const nisab = 82312725; // Nisab zakat pendapatan dan jasa tahun 2024 (Rp82.312.725,00)
  const zakatRate = 0.025; // Kadar zakat pendapatan dan jasa (2.5%)

  let zakat = 0;
  let zakatMessage = '';

  if (yearlyIncome >= nisab) {
    zakat = monthlyIncome * zakatRate;
    // Format kembali angka dengan simbol mata uang "Rp" dan tanda titik jika ribuan
    const formattedZakat = formatNumber(zakat);
    zakatMessage = `Anda wajib membayar zakat penghasilan sebesar ${formattedZakat} per bulan.`;
  } else {
    zakatMessage = 'Anda tidak wajib membayar zakat penghasilan karena penghasilan belum mencapai nisab.';
  }

  alert(zakatMessage);
}

// memformat angka dengan simbol "Rp" dan tanda titik jika ribuan
function formatNumber(num) {
  return `Rp${num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}`;
}

function formatRupiah(input) {
  // Mengambil nilai input tanpa titik
  const nilai = input.value.replace(/\D/g, ''); // Menghapus semua karakter selain angka

  // Jika nilai tidak kosong
  if (nilai !== '') {
    // Format ke dalam format rupiah dengan menggunakan regex
    const formattedNilai = parseInt(nilai, 10).toLocaleString('id-ID'); // Menggunakan built-in function toLocaleString untuk memformat angka

    // Mengubah nilai input dengan format rupiah
    input.value = formattedNilai;
  }
}
