let [milliseconds, seconds, minutes, hours] = [0,0,0,0];
let timerRef = document.querySelector('.timerDisplay');
let int;

// Implementing a START function
document.getElementById('startTimer').addEventListener('click', () => {
    int = setInterval(displayTimer, 10);
});

// Implementing a PAUSE function
document.getElementById('pauseTimer').addEventListener('click', () => {
    clearInterval(int);
});

// Implementing a RESET function
document.getElementById('resetTimer').addEventListener('click', () => {
    clearInterval(int);
    [milliseconds, seconds, minutes, hours] = [0,0,0,0];
    timerRef.innerHTML = ` 00 : 00 : 00 : 000`;
});

function displayTimer() {
    // At an interval of 10ms, add 10 to current ms.
    milliseconds += 10;
    // 1000ms = 1 second
    if(milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
        // 60 seconds = 1 minute
        if(seconds == 60) {
            seconds = 0;
            minutes++;
            // 60 minutes = 1 hour
            if(minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

    timerRef.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
}