const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");
const timerDisplay = document.getElementById("timer");

let countdown;
let timeLeft = 1500;
let timerRunning = false;

function startTimer() {
  if (!timerRunning) {
    countdown = setInterval(() => {
      timeLeft--;
      let minutes = Math.floor(timeLeft / 60);
      let seconds = timeLeft % 60;
      if(seconds < 10) {
        seconds = `0${seconds}`;
      }
      timerDisplay.innerHTML = `${minutes}:${seconds}`;
      if (timeLeft === 0) {
        clearInterval(countdown);
      }
    }, 1000);
    startButton.innerHTML = "Parar";
    timerRunning = true;
  } else {
    clearInterval(countdown);
    startButton.innerHTML = "Iniciar";
    timerRunning = false;
  }
}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", () => clearInterval(countount));
