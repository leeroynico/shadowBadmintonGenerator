const start = document.getElementById("start");
const stopit = document.getElementById("stop");
const talk = new SpeechSynthesisUtterance();

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
start.addEventListener("click", () => {
  intervalId = setInterval(speak, 2000);
});

let intervalles = 500;
let repetition = 3;
let intervalId = null;
function speak() {
  window.speechSynthesis.speak(talk);
  talk.text = getRandomArbitrary(1, 7);
  const voices = window.speechSynthesis.getVoices();
  //talk.voice = voices[4];
  talk.volume = 1; //accepts between [0 - 1], defaults to 1
  talk.rate = 5; //accepts between [0.1 - 10], defaults to 1
  talk.pitch = 1.5; //accepts between [0 - 2], defaults to 1
}
function startTrain() {
  intervalId = setInterval(speak, 1000);
}
function stopTrain() {
  clearInterval(intervalId);
}
stopit.addEventListener("click", () => {
  stopTrain();
});

// stopit.addEventListener("click", () => {});
