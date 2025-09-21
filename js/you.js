// --- Girasoles ---
function crearGirasol() {
  const girasol = document.createElement("div");
  girasol.classList.add("girasol");
  girasol.textContent = "🌻";

  girasol.style.left = Math.random() * 100 + "vw";
  girasol.style.animationDuration = (Math.random() * 3 + 4) + "s";

  document.querySelector(".contenedor-girasoles").appendChild(girasol);

  setTimeout(() => {
    girasol.remove();
  }, 7000);
}
setInterval(crearGirasol, 500);

// --- Audio y botones ---
const audio = document.getElementById("bg-music");
const botonPlay = document.querySelector(".btn-play");
const botonSi = document.querySelector(".btn-si");

// volumen inicial
audio.volume = 0.3;

// Play / Pausa con el mismo botón
botonPlay.addEventListener("click", () => {
  if (audio.paused) {
    audio.play().catch(err => console.warn("No se pudo reproducir:", err));
    botonPlay.textContent = "⏸ Pausar Música 🎵";
  } else {
    audio.pause();
    botonPlay.textContent = "▶ Reproducir Música 🎵";
  }
});

// redirigir con el botón Sí
botonSi.addEventListener("click", () => {
  window.location.href = "R-u-mine.html";
});
