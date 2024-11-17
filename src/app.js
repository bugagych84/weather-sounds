export function initApp() {
  const sounds = {
    summer: new Audio("./assets/sounds/summer.mp3"),
    rain: new Audio("./assets/sounds/rain.mp3"),
    winter: new Audio("./assets/sounds/winter.mp3"),
  };

  const backgrounds = {
    summer: "./assets/images/summer-bg.jpg",
    rain: "./assets/images/rainy-bg.jpg",
    winter: "./assets/images/winter-bg.jpg",
  };

  let currentSound = null;

  function playSound(sound, background) {
    if (currentSound) {
      currentSound.pause();
    }
    if (currentSound !== sound) {
      sound.play();
      currentSound = sound;
    } else {
      currentSound = null;
    }
    document.body.style.backgroundImage = `url(${background})`;
  }

  function setVolume(volume) {
    Object.values(sounds).forEach((sound) => {
      sound.volume = volume;
    });
  }

  document.body.style.backgroundImage = `url(${backgrounds.summer})`;

  document
    .getElementById("summerButton")
    .addEventListener("click", () =>
      playSound(sounds.summer, backgrounds.summer)
    );
  document
    .getElementById("rainButton")
    .addEventListener("click", () => playSound(sounds.rain, backgrounds.rain));
  document
    .getElementById("winterButton")
    .addEventListener("click", () =>
      playSound(sounds.winter, backgrounds.winter)
    );
  document
    .getElementById("volumeControl")
    .addEventListener("input", (event) => setVolume(event.target.value));
}
