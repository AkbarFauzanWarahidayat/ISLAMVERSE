function calculateZakat() {
    var monthlyIncome = document.getElementById('monthlyIncome').value;
    var yearlyIncome = monthlyIncome * 12;
    var nisab = 82312725; // Nisab zakat pendapatan dan jasa tahun 2024 (Rp82.312.725,00)
    var zakatRate = 0.025; // Kadar zakat pendapatan dan jasa (2.5%)

    var zakat = 0;
    var zakatMessage = "";

    if (yearlyIncome >= nisab) {
        zakat = monthlyIncome * zakatRate;
        // Format kembali angka dengan simbol mata uang "Rp" dan tanda titik jika ribuan
        var formattedZakat = formatNumber(zakat);
        zakatMessage = "Anda wajib membayar zakat penghasilan sebesar Rp " + formattedZakat + " per bulan.";
    } else {
        zakatMessage = "Anda tidak wajib membayar zakat penghasilan karena penghasilan belum mencapai nisab.";
    }

    alert(zakatMessage);
}

//memformat angka dengan simbol "Rp" dan tanda titik jika ribuan
function formatNumber(num) {
    return "Rp" + num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}