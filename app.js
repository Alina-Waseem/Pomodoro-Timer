let timer;
let minutes = 25;
let seconds = 0;
let isRunning = false;

function startTimer() {
    if (!isRunning) {
        timer = setInterval(updateTimer, 1000);
        isRunning = true;
    }
}

function startBreakTimer() {
    clearInterval(timer);
    isRunning = false;
    minutes = 5;
    seconds = 0;
    updateDisplay();
    alert('Break time! Relax for 5 minutes.');
    timer = setInterval(updateBreakTimer, 1000);
}

function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    minutes = 25;
    seconds = 0;
    updateDisplay();
}

function updateTimer() {
    if (minutes === 0 && seconds === 0) {
        clearInterval(timer);
        isRunning = false;
        alert('Pomodoro session completed! Take a break.');
        startBreakTimer();
    } else {
        if (seconds === 0) {
            minutes--;
            seconds = 59;
        } else {
            seconds--;
        }
        updateDisplay();
    }
}

function updateBreakTimer() {
    if (minutes === 0 && seconds === 0) {
        clearInterval(timer);
        resetTimer();
    } else {
        if (seconds === 0) {
            minutes--;
            seconds = 59;
        } else {
            seconds--;
        }
        updateDisplay();
    }
}

function updateDisplay() {
    const timerElement = document.getElementById('timer');
    timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}