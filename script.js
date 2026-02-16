// ===================================
// COUNTDOWN KE KAMIS, 19 FEBRUARI 2026
// ===================================

// Set tanggal target
const targetDate = new Date("February 19, 2026 00:00:00").getTime();

const timer = document.getElementById("timer");

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
        timer.innerHTML = "🌙 Hari yang Dinanti Telah Tiba! 🌙";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timer.innerHTML =
        "Menuju Kamis, 19 Februari 2026 🌙<br><br>" +
        days + " Hari " +
        hours + " Jam " +
        minutes + " Menit " +
        seconds + " Detik";
}

// Update setiap 1 detik
setInterval(updateCountdown, 1000);
updateCountdown();


// ===================================
// MUSIC CONTROL
// ===================================

const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-btn");

// Agar autoplay tetap berjalan di sebagian besar browser
document.addEventListener("click", function () {
    music.play();
}, { once: true });

musicBtn.addEventListener("click", function () {
    if (music.paused) {
        music.play();
        musicBtn.innerHTML = "🔊 Matikan Musik";
    } else {
        music.pause();
        musicBtn.innerHTML = "🔈 Nyalakan Musik";
    }
});
