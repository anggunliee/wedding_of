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

// ===== MUSIK GLOBAL (LANJUT TERUS) =====
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


// ===== HANDLE FORM RSVP =====
const form = document.getElementById("rsvp-form");
const thanksText = document.getElementById("thanks");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Animasi tombol
  const button = form.querySelector("button");
  button.innerText = "Mengirim...";
  button.disabled = true;

  setTimeout(() => {
    button.innerText = "Terkirim ✓";

    // Tampilkan pesan terima kasih
    thanksText.classList.add("show");

    // Reset form setelah 2 detik
    setTimeout(() => {
      form.reset();
      button.innerText = "Kirim";
      button.disabled = false;
    }, 2000);

  }, 1200);
});
