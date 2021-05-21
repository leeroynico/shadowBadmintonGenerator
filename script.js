const start = document.getElementById("start");
const stopit = document.getElementById("stop");
const range = document.getElementById("range");
const talk = new SpeechSynthesisUtterance();

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

let intervalles = 2000;
let timeToTrain = 6000;
let intervalId = null;
let timerId = null;
let chronometre = 60;

range.addEventListener("input", () => {
  document.getElementById("rangeResult").innerHTML = range.value;
  timeToTrain = range.value * 100;
  chronometre = range.value;
  console.log(timeToTrain);
});

function speak() {
  window.speechSynthesis.speak(talk);
  talk.text = getRandomArbitrary(1, 7);
}
function warning(message) {
  window.speechSynthesis.speak(talk);
  talk.text = message;
}

function stopTrain() {
  clearInterval(intervalId);
  clearInterval(timerId);
}

function chrono() {
  chronometre--;
  if (chronometre === 0) {
    warning("c'est fini");
    clearInterval(timerId);
  } else {
    document.getElementById("count").innerHTML = chronometre;
  }
}
function timer() {
  timerId = setInterval(chrono, 1000);
}
function startTrain() {
  intervalId = setInterval(train, intervalles);
}

let count = Math.floor((timeToTrain / intervalles) * 10);
function train() {
  count--;
  if (count == 0) {
    stopTrain();
  } else {
    speak();
  }
}

start.addEventListener("click", () => {
  startTrain();
  timer();
});

stopit.addEventListener("click", () => {
  stopTrain();
});

console.log(count);
