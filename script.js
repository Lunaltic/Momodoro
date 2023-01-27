const startButton = document.getElementById("start-button");
    const resetButton = document.getElementById("reset-button");
    const timerDisplay = document.getElementById("timer");

    let countdown;
    let timeLeft = 1500;
    let timerRunning = false;

    function toggleTimer() {
        if (timerRunning) {
            clearInterval(countdown);
            startButton.innerHTML = "Iniciar";
            timerRunning = false;
            resetButton.style.display = "block";
        } else {
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
                    timerRunning = false;
                    startButton.innerHTML = "Iniciar";
                    resetButton.style.display = "block";
                }
            }, 1000);
            startButton.innerHTML = "Parar";
            timerRunning = true;
            resetButton.style.display = "none";
        }
    }

    function resetTimer() {
        clearInterval(countdown);
        timeLeft = 1500;
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        if(seconds < 10) {
            seconds = `0${seconds}`;
        }
        timerDisplay.innerHTML = `${minutes}:${seconds}`;
        startButton.innerHTML = "Iniciar";
        resetButton.style.display = "none";
        timerRunning = false;
    }

    startButton.addEventListener("click", toggleTimer);
    resetButton.addEventListener("click", resetTimer);

