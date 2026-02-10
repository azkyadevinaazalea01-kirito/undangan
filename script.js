const btnOpen = document.getElementById("btnOpen");
const cover = document.getElementById("cover");
const mainContent = document.getElementById("mainContent");
const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

btnOpen.addEventListener("click", () => {
  // hilangkan cover
  cover.style.display = "none";

  // tampilkan isi undangan
  mainContent.classList.remove("hidden");

  // jalankan musik
  bgMusic.play().catch(() => {});
});

musicBtn.addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic.play();
  } else {
    bgMusic.pause();
  }
});