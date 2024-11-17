export function initApp() {
  const sounds = {
    summer: new Audio(require("./assets/sounds/summer.mp3")),
    rain: new Audio(require("./assets/sounds/rain.mp3")),
    winter: new Audio(require("./assets/sounds/winter.mp3")),
  };

  const backgrounds = {
    summer: require("./assets/images/summer-bg.jpg"),
    rain: require("./assets/images/rainy-bg.jpg"),
    winter: require("./assets/images/winter-bg.jpg"),
  };

  let currentSound: HTMLAudioElement | null = null;

  function playSound(sound: HTMLAudioElement, background: string) {
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

  function setVolume(volume: number) {
    Object.values(sounds).forEach((sound) => {
      sound.volume = volume;
    });
  }

  document.body.style.backgroundImage = `url(${backgrounds.summer})`;

  document
    .getElementById("summerButton")
    ?.addEventListener("click", () =>
      playSound(sounds.summer, backgrounds.summer)
    );
  document
    .getElementById("rainButton")
    ?.addEventListener("click", () => playSound(sounds.rain, backgrounds.rain));
  document
    .getElementById("winterButton")
    ?.addEventListener("click", () =>
      playSound(sounds.winter, backgrounds.winter)
    );
  document
    .getElementById("volumeControl")
    ?.addEventListener("input", (event) =>
      setVolume((event.target as HTMLInputElement).valueAsNumber)
    );
}
