const startButton = document.getElementById("start-button");
const resetButton = document.getElementById("reset-button");
const timerDisplay = document.getElementById("timer");

let intervalId;
let timeLeft = 1500; // 25 minutos em segundos
let timerRunning = false;


startButton.addEventListener("click", startTimer);
resetButton.addEventListener("click", resetTimer);


function startTimer() {
    if (intervalId) return; // impede que o cronômetro seja iniciado novamente se já estiver rodando
    intervalId = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(intervalId);
            intervalId = null;
            return;
        }
        timeLeft--;
        updateTimerDisplay();
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


function toggleTimer() {
  timerRunning = !timerRunning;
  if (timerRunning) {
    updateTimer();
    startButton.innerHTML = 'Pausar';
  } else {
    startButton.innerHTML = 'Iniciar';
  }
}

function updateTimer() {
  if (timerRunning && timeLeft > 0) {
    setTimeout(function() {
      timeLeft--;
      timerDisplay.innerHTML = formatTime(timeLeft);
      updateTimer();
    }, 1000);
  } else if (timeLeft === 0) {
    timerRunning = false;
    startButton.innerHTML = 'Iniciar';
    timerDisplay.innerHTML = 'Tempo esgotado!';
  }
}

function formatTime(time) {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  return `${minutes}:${seconds}`;
}