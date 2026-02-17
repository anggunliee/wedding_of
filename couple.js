window.addEventListener("DOMContentLoaded", function () {
  const audio = parent.document.getElementById("bg-music");

  if (audio) {
    const savedTime = sessionStorage.getItem("musicTime");
    if (savedTime) {
      audio.currentTime = savedTime;
    }

    audio.play();
  }
});

// ===============================
// AMBIL PARAMETER NAMA TAMU
// ===============================
const params = window.location.search;

// ===============================
// SISTEM MUSIK GLOBAL
// ===============================
const music = document.getElementById("bg-music");

const savedTime = localStorage.getItem("musicTime");
const isPlaying = localStorage.getItem("musicPlaying");

// Set posisi terakhir lagu
if (savedTime) {
  music.currentTime = parseFloat(savedTime);
}

// Lanjutkan musik jika sudah pernah diputar
if (isPlaying === "true") {
  music.play().catch(() => {});
}

// Simpan waktu lagu terus
setInterval(() => {
  if (!music.paused) {
    localStorage.setItem("musicTime", music.currentTime);
  }
}, 1000);

// ===============================
// BAWA PARAMETER KE SEMUA LINK
// ===============================
const links = document.querySelectorAll("a");

links.forEach(link => {
  const href = link.getAttribute("href");

  if (href && href.includes(".html")) {
    link.href = href + params;
  }
});

// ===============================
// ANIMASI MASUK HALUS
// ===============================
window.addEventListener("load", () => {
  document.body.style.opacity = 0;
  document.body.style.transition = "opacity 1.2s ease";

  setTimeout(() => {
    document.body.style.opacity = 1;
  }, 100);
});
