function hitungBmi() {
    let beratBadan = parseFloat(document.getElementById("berat-badan").value);
    let tinggiBadan = parseFloat(document.getElementById("tinggi-badan").value) / 100;
    let usia = parseFloat(document.getElementById("usia").value);
    
    if (!beratBadan || !tinggiBadan || !usia) {
        alert("Mohon lengkapi semua kolom.");
        return;
    }

    var bmi = beratBadan / (tinggiBadan * tinggiBadan);

    let status = "";
    let pesan = "";

    if (bmi < 18.5) {
        status = "Kekurangan Berat Badan";
        pesan = "Hasil BMI < 18.5\n\nHubungi dokter lebih lanjut mengenai pola makan dan gizi yang baik untuk meningkatkan kesehatan.";
    } else if (bmi >= 18.5 && bmi <= 22.9) {
        status = "Normal";
        pesan = "Hasil BMI diantara 18.5 dan 22.9\n\nTetap pertahankan berat badan Anda dan jaga berat badan Anda dengan mengatur keseimbangan antara pola makan dan aktivitas fisik Anda.";
    } else if (bmi >= 23 && bmi <= 25) {
        status = "Overweight";
        pesan = "Hasil BMI diantara 23 dan 25\n\nCara terbaik untuk menurunkan berat badan adalah dengan mengatur kalori makanan yang dikonsumsi dan berolahraga. Jika BMI Anda berada dalam kategori ini, Anda dianjurkan untuk menurunkan berat badan hingga batas normal.";
    } else {
        status = "Obesitas";
        pesan = "Hasil BMI lebih dari 25\n\nUsahakan untuk menurunkan berat badan dan menerapkan pola hidup sehat dengan menjaga makan dan aktivitas fisik. Segera kunjungi dokter untuk dilakukan pemeriksaan kesehatan lanjutan untuk mengetahui risiko yang Anda miliki terkait berat badan Anda.";
    }

    document.getElementById("status-bmi").innerText = status;

    let bmiResultElement = document.getElementById("bmi-result");
    bmiResultElement.innerText = bmi.toFixed(2);

    document.getElementById("pesan-bmi").innerText = pesan;
}

function resetKolom() {
    document.getElementById("berat-badan").value = "";
    document.getElementById("tinggi-badan").value = "";
    document.getElementById("usia").value = "";
    document.getElementById("sex-male").checked = false;
    document.getElementById("sex-female").checked = false;

    document.getElementById("status-bmi").innerText = "";
    document.getElementById("bmi-result").innerText = "";
    document.getElementById("pesan-bmi").innerText = "";
}

