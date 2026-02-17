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
// AMBIL PARAMETER DARI URL (?to=Nama)
// ===============================
const params = window.location.search;

// ===============================
// SISTEM MUSIK GLOBAL (LANJUT)
// ===============================
const music = document.getElementById("bg-music");

// Ambil waktu terakhir musik
const savedTime = localStorage.getItem("musicTime");
const isPlaying = localStorage.getItem("musicPlaying");

if (savedTime) {
  music.currentTime = parseFloat(savedTime);
}

// Jika sebelumnya sudah play di halaman index
if (isPlaying === "true") {
  music.play().catch(() => {});
}

// Simpan posisi musik terus
setInterval(() => {
  if (!music.paused) {
    localStorage.setItem("musicTime", music.currentTime);
  }
}, 1000);

// ===============================
// BAWA PARAMETER NAMA TAMU KE SEMUA LINK
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
