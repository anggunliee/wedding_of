// ===============================
// AMBIL NAMA TAMU DARI URL
// ===============================
const params = new URLSearchParams(window.location.search);
const guestName = params.get("to");

if (guestName) {
  document.getElementById("guest-name").innerText =
    decodeURIComponent(guestName);
}

// ===============================
// SISTEM MUSIK GLOBAL
// ===============================
const music = document.getElementById("bg-music");

// Ambil posisi terakhir musik
const savedTime = localStorage.getItem("musicTime");

if (savedTime) {
  music.currentTime = parseFloat(savedTime);
}

// Simpan posisi musik setiap 1 detik
setInterval(() => {
  if (!music.paused) {
    localStorage.setItem("musicTime", music.currentTime);
  }
}, 1000);

// ===============================
// TOMBOL BUKA UNDANGAN
// ===============================

function openInvitation() {
  const audio = document.getElementById("bg-music");
  sessionStorage.setItem("musicTime", audio.currentTime);
  window.location.href = "home.html";
}

document.getElementById("open-btn").addEventListener("click", function () {

  // Play musik setelah klik (biar tidak diblok browser)
  music.play();

  // Simpan status bahwa musik sudah dimainkan
  localStorage.setItem("musicPlaying", "true");

  // Ambil kembali parameter tamu
  const currentParams = window.location.search;

  // Pindah ke home.html dengan nama tamu tetap ada
  window.location.href = "home.html" + currentParams;
});
