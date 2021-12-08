
let millisecondsDisplay = document.getElementById('milliseconds');
let secondsDisplay = document.getElementById('seconds');
let minutesDisplay = document.getElementById('minutes');

const startButton = document.getElementById('startButton');
const pauseButton = document.getElementById('pauseButton');
const resetButton = document.getElementById('resetButton');

let milliseconds = 00;
let seconds = 00;
let minutes = 00;
let interval;

startButton.onclick = startCount;
pauseButton.onclick = pauseCount;
resetButton.onclick = resetCount;

function startCount() {
    clearInterval(interval);
    interval = setInterval(countTime, 10);
    startButton.classList.add('active');
    pauseButton.classList.remove('active');
}
function pauseCount() {
    if(interval) {
        clearInterval(interval);
        startButton.classList.remove('active');
        pauseButton.classList.add('active');
    }
    if(!interval) {
        pauseButton.classList.remove('active');
    }
    
}
function resetCount() {
    resetButton.classList.add('active');
    clearInterval(interval);
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    millisecondsDisplay.innerHTML = '00';
    secondsDisplay.innerHTML = '00';
    minutesDisplay.innerHTML = '00';
    startButton.classList.remove('active');
    pauseButton.classList.remove('active');
    setTimeout(() => {
        resetButton.classList.remove('active');
    }, 200);
}
function countTime() {
    milliseconds++;    
    millisecondsDisplay.innerHTML = (milliseconds <= 9) ? '0' + milliseconds : milliseconds;
    if(milliseconds >= 99) {
        seconds++
        milliseconds = 0;
        secondsDisplay.innerHTML = (seconds <= 9) ? '0' + seconds : seconds;
        if(seconds > 59) {
            console.log(seconds);
            seconds = 0;
            minutes++
            minutesDisplay.innerHTML = (minutes <= 9) ? '0' + minutes : minutes;
            if(minutes == 60) {
                pauseCount;
            }
        }
    }
}