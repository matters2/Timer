console.log('test');

//setTimeout(function() {}, 5000
//clearTimeout(function () {}, 1000
//setInterval()

var startBtn = document.querySelector('.start-btn');
var pauseBtn = document.querySelector('.pause-btn');
var resetBtn = document.querySelector('.reset-btn');
var display = document.querySelector('.display');

var timerId = null;

var handleStart = function() {
    //guard condition
    if (timerId) {
        return;
    }
    timerId = setInterval(function () {
        display.textContent = Number(display.textContent ) + 1 
    }, 1000)
}

var handlePause = function() {
    clearInterval(timerId);
    timerId = null;
}

var handleReset = function() {
    
    clearInterval(timerId);
    display.textContent = 0;
    timerId = null;
}

pauseBtn.addEventListener('click', handlePause);
startBtn.addEventListener('click', handleStart);
resetBtn.addEventListener('click', handleReset);