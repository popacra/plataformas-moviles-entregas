// Referencias a los elementos
const album = document.getElementById("album");
const music = document.getElementById("music");
const volume = document.getElementById("volume");

// Al hacer clic en el álbum, pausar o reproducir la música
album.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    album.classList.remove("paused");
  } else {
    music.pause();
    album.classList.add("paused");
  }
});

// Control del volumen
volume.addEventListener("input", () => {
  music.volume = volume.value;
});