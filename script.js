const timer = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const modeDisplay = document.getElementById('mode');

let interval;
let timeLeft = 25 * 60; // 25 minutes in seconds
let isRunning = false;
let isWorkMode = true;

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timer.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function switchMode() {
    isWorkMode = !isWorkMode;
    timeLeft = isWorkMode ? 25 * 60 : 5 * 60; // 25 min for work, 5 min for break
    modeDisplay.textContent = isWorkMode ? 'Work Mode' : 'Break Mode';
    updateDisplay();
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        interval = setInterval(() => {
            timeLeft--;
            updateDisplay();
            if (timeLeft === 0) {
                clearInterval(interval);
                isRunning = false;
                switchMode();
            }
        }, 1000);
    }
}

function pauseTimer() {
    clearInterval(interval);
    isRunning = false;
}

function resetTimer() {
    clearInterval(interval);
    isRunning = false;
    isWorkMode = true;
    timeLeft = 25 * 60;
    modeDisplay.textContent = 'Work Mode';
    updateDisplay();
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);

updateDisplay();






