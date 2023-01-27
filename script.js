const startButton = document.getElementById("start-button");
const resetButton = document.getElementById("reset-button");
const timerDisplay = document.getElementById("timer");

let intervalId;
let timeLeft = 1500; // 25 minutos em segundos
let timerRunning = false;

displayTime(); // adicionando essa linha

startButton.addEventListener("click", startTimer);
resetButton.addEventListener("click", resetTimer);

function displayTime() {
  const minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  timerDisplay.textContent = `${minutes}:${seconds}`;
}

function startTimer() {
    if (intervalId) return; // impede que o cronômetro seja iniciado novamente se já estiver rodando
    intervalId = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(intervalId);
            intervalId = null;
            return;
        }
        timeLeft--;
        displayTime();
    }, 1000);
}

function resetTimer() {
    clearInterval(intervalId);
    intervalId = null;
    timeLeft = 1500;
    updateTimerDisplay();
}

function updateTimerDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }
    timerDisplay.innerHTML = `${minutes}:${seconds}`;
}
