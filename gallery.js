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

// ===== MUSIK GLOBAL (TIDAK RESTART) =====
window.addEventListener("DOMContentLoaded", function () {
  const audio = parent.document.getElementById("bg-music") || document.getElementById("bg-music");

  if (audio) {
    audio.volume = 0.5;

    audio.play().catch(() => {
      document.addEventListener("click", () => {
        audio.play();
      }, { once: true });
    });
  }
});


// ===== MODAL FOTO FULLSCREEN =====
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.getElementById("close");

document.querySelectorAll(".photo img").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
  });
});

closeBtn.onclick = function () {
  modal.style.display = "none";
};

modal.onclick = function (e) {
  if (e.target !== modalImg) {
    modal.style.display = "none";
  }
};


// ===== ANIMASI SCROLL MASUK =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".photo").forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(40px)";
  el.style.transition = "0.6s ease";
  observer.observe(el);
});
