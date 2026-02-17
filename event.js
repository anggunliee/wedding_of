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

// ===== MUSIK GLOBAL (LANJUT TERUS ANTAR HALAMAN) =====
window.addEventListener("DOMContentLoaded", function () {
  const audio = parent.document.getElementById("bg-music") || document.getElementById("bg-music");

  if (audio) {
    audio.volume = 0.5;

    // Coba play otomatis
    audio.play().catch(() => {
      // Kalau browser blokir autoplay
      document.addEventListener("click", () => {
        audio.play();
      }, { once: true });
    });
  }
});


// ===== ANIMASI SCROLL MASUK =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll(".event-card").forEach((el) => {
  observer.observe(el);
});


// ===== EFEK HOVER LEMBUT =====
document.querySelectorAll(".event-card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-8px) scale(1.02)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0) scale(1)";
  });
});


// ===== JAM DIGITAL MENUJU ACARA (COUNTDOWN SIMPLE) =====
const countdown = document.getElementById("countdown");

if (countdown) {
  const targetDate = new Date("2026-02-18 09:00:00").getTime(); 
  // nanti kamu ganti sendiri tanggalnya

  setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      countdown.innerHTML = "Acara Akan Berlangsung";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);

    countdown.innerHTML = `
      ${days} Hari • ${hours} Jam • ${minutes} Menit
    `;
  }, 1000);
}
