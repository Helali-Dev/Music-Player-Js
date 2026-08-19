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

// -------------------------------LIST OT OUR MUSIC INFORMATION
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

// -------------------------------LOAD CURRENT MUSIC
const loadAudio = () => {
  const track = playList[currentIndex];
  coverImage.src = track.coverSrc;
  singerName.textContent = track.singerName;
  musicName.textContent = track.musicName;
  audio.src = track.audioSrc;

  if (isPlaying) {
    audio.play();
  }
};

// -------------------------------PLAY AND PAUSE MUSIC
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

// -------------------------------HANDLE MUSIC SOUND
volumeSlider.addEventListener("input", () => {
  audio.volume = volumeSlider.value;
});

// -------------------------------SEEK TO CURRENT PART OD MUSIC
seekSlider.addEventListener("input", () => {
  const newTime = audio.duration * (seekSlider.value / 100);
  audio.currentTime = newTime;
});

// -------------------------------NEXT MUSIC
nextButton.addEventListener("click", () => {
  currentIndex++;

  if (currentIndex > playList.length - 1) {
    currentIndex = 0;
  }
  playPauseButton.firstElementChild.classList.replace("fa-play", "fa-pause");
  isPlaying = true;
  loadAudio();
});

// -------------------------------PREVIOUSE MUSIC
prevButton.addEventListener("click", () => {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = playList.length - 1;
  }
  playPauseButton.firstElementChild.classList.replace("fa-play", "fa-pause");
  isPlaying = true;
  loadAudio();
});
// -------------------------------
audio.addEventListener("timeupdate", () => {
  const currentTIME = audio.currentTime;
  const totalTime = audio.duration;
  const percentage = (currentTIME / totalTime) * 100;
  if (percentage) {
    seekSlider.value = percentage;
  }

  if ((currentTIME, totalTime)) {
    currentTimeDisplay.textContent = formatTime(currentTIME);
    totalTimeDisplay.textContent = formatTime(totalTime);
  }
});

const formatTime = (timeInSeccond) => {
  const minute = Math.floor(timeInSeccond / 60);
  const seccound = Math.floor(timeInSeccond % 60);

  return `${minute}:${seccound < 10 ? "0" : ""}${seccound}`;
};

// RESET MUSIC INFORMATION WHEN AUDIO ENDS
audio.addEventListener("ended", () => {
  isPlaying = false;
  playPauseButton.firstElementChild.classList.replace("fa-pause", "fa-play");
});

// -------------------------------LOAD INITIALY MUSIC
loadAudio();
