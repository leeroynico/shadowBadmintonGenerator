const start = document.getElementById("start");
const stopit = document.getElementById("stop");
const talk = new SpeechSynthesisUtterance();

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

let intervalles = 1000;
let timeToTrain = 8000;
let intervalId = null;

function speak() {
  window.speechSynthesis.speak(talk);
  talk.text = getRandomArbitrary(1, 7);
  const voices = window.speechSynthesis.getVoices();
  talk.volume = 1; //accepts between [0 - 1], defaults to 1
  talk.rate = 5; //accepts between [0.1 - 10], defaults to 1
  talk.pitch = 1.5; //accepts between [0 - 2], defaults to 1
}
function warning(message) {
  window.speechSynthesis.speak(talk);
  talk.text = message;
  const voices = window.speechSynthesis.getVoices();
  talk.volume = 1; //accepts between [0 - 1], defaults to 1
  talk.rate = 5; //accepts between [0.1 - 10], defaults to 1
  talk.pitch = 1.5; //accepts between [0 - 2], defaults to 1
}
function annonceFin() {
  warning("tranquille");
}
function stopTrain() {
  clearInterval(intervalId);
}
start.addEventListener("click", (e) => {
  warning("attention ça va démarrer");
  intervalId = setInterval(speak, intervalles);
  setTimeout(stopTrain, timeToTrain);
  setTimeout(annonceFin, timeToTrain + 1500);
});

stopit.addEventListener("click", () => {
  stopTrain();
});

// stopit.addEventListener("click", () => {});
