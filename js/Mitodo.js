  onload = () => {
      const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        
        function createShootingStar() {
          const star = document.createElement('div');
          star.className = 'shooting-star';
          star.style.top = Math.random() * 60 + '%';
          star.style.animationDelay = '0s';
          star.style.animationDuration = (Math.random() * 1.5 + 2) + 's';
          
          document.querySelector('.shooting-stars').appendChild(star);
          
          setTimeout(() => {
            star.remove();
          }, 4000);
        }
        
        setInterval(() => {
          if (Math.random() > 0.3) { 
            createShootingStar();
          }
        }, Math.random() * 5000 + 3000);
        clearTimeout(c);
      }, 1000);
    };

    document.body.classList.remove("not-loaded");

    const musicBtn = document.getElementById('music-btn');
const bgMusic = document.getElementById('bg-music');

musicBtn.addEventListener('click', () => {
  if (bgMusic.paused) {
    bgMusic.play();
    musicBtn.textContent = '⏸️ Pausar';
  } else {
    bgMusic.pause();
    musicBtn.textContent = '🎵 Reproducir';
  }
});
volume.addEventListener("input", () => {
  audio.volume = volume.value;
}); 
  const audio = document.getElementById("miAudio");
  const btn = document.getElementById("playBtn");

  btn.addEventListener("click", () => {
    if (audio.paused) {
      audio.volume = 0.1; // Volumen moderado al iniciar
      audio.play();
      btn.textContent = "Pausar música";
    } else {
      audio.pause();
      btn.textContent = "Reproducir música";
    }
  });
