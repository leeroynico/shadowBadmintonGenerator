const start = document.getElementById("start");
const stopit = document.getElementById("stop");
const range = document.getElementById("range");
const intervalUser = document.getElementById("intervalUser");

function speak(message) {
  let msg = new SpeechSynthesisUtterance();
  msg.text = message;
  let voices = window.speechSynthesis.getVoices();
  msg.voice = voices[0];
  window.speechSynthesis.speak(msg);
}

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

let intervalles = 3000;
let timeToTrain = 6000;
let intervalId = null;
let timerId = null;
let chronometre = 60;

range.addEventListener("input", () => {
  document.getElementById("rangeResult").innerHTML = range.value;
  timeToTrain = range.value * 100;
  chronometre = range.value;
});
intervalUser.addEventListener("input", () => {
  intervalles = intervalUser.value;
});

function stopTrain() {
  clearInterval(intervalId);
  clearInterval(timerId);
}

function chrono() {
  chronometre--;
  if (chronometre === 0) {
    document.getElementById("count").innerHTML = "fin du timer";
    stopTrain();
    speak("c'est fini");
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
    let randomNumber = getRandomArbitrary(1, 6);
    speak(randomNumber);
  }
}

start.addEventListener("click", () => {
  document.getElementById("count").innerHTML = "prépares toi ";
  speak("attention prépares toi?");
  setTimeout(function () {
    startTrain();
    setTimeout(function () {
      timer();
    }, 3000);
  }, 10);
});

stopit.addEventListener("click", () => {
  stopTrain();
});
