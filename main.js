const audio = document.getElementById("audio");
const playPauseButton = document.getElementById("play-pause-btn");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");
const volumeSlider = document.querySelector(".volume-slider");
const seekSlider = document.querySelector(".seek-slider");
const coverImage = document.querySelector(".cover-img");
const currentTimeDisplay = document.querySelector(".current-time");
const totalTimeDisplay = document.querySelector(".total-time");
const singerName = document.querySelector(".singer-name");
const musicName = document.querySelector(".music-name");

// LIST OT OUR MUSIC INFORMATION
const playList = [
  {
    singerName: "Saaren",
    musicName: "Dard",
    audioSrc: "./assets/4-music.mp3",
    coverSrc: "./assets/4-image.jpg",
  },
  {
    singerName: "Chavoshi",
    musicName: "Marize Takht Akhari",
    audioSrc: "./assets/6-music.mp3",
    coverSrc: "./assets/6-image.jpg",
  },
  {
    singerName: "Saaren",
    musicName: "Ehtiyaj",
    audioSrc: "./assets/5-music.mp3",
    coverSrc: "./assets/5-image.jpg",
  },
];

let currentIndex = 0;
let isPlaying = false;

// LOAD CURRENT MUSIC
const loadAudio = () => {
  const track = playList[currentIndex];
  coverImage.src = track.coverSrc;
  singerName.textContent = track.singerName;
  musicName.textContent = track.musicName;
  audio.src = track.audioSrc;

  //   if (isPlaying) {
  //     audio.play();
  //   }
};

// PLAY AND PAUSE MUSIC
playPauseButton.addEventListener("click", () => {
  const playPauseIcon = playPauseButton.firstElementChild;
  if (isPlaying) {
    audio.pause();
    isPlaying = false;
    playPauseIcon.classList.replace("fa-pause", "fa-play");
    coverImage.classList.remove("cover-animation");
  } else {
    audio.play();
    isPlaying = true;
    playPauseIcon.classList.replace("fa-play", "fa-pause");
    coverImage.classList.add("cover-animation");
  }
});

// LOAD INITIALY MUSIC
loadAudio();
