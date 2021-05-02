const newYears = '1 Jan 2022';
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

function countdownTimer() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    // Find the difference between set date and current date.
    const actualDifference = newYearsDate.getTime() - currentDate.getTime(); // This is total milliseconds

    // Divide milliseconds by 1000 to convert to seconds
    const totalSeconds = (actualDifference) / 1000;

    /* Time calculations for days, hours, minutes, seconds. */

    // Dividing the total seconds i.e totalSeconds by 60 and grab the remainder
    // You don’t want all of the seconds, just those remaining after the minutes have been counted.
    const seconds = Math.floor(totalSeconds % 60);
    // Repeat the same for minutes, hours, days
    // One minute = 60 seconds and grabbing the remaining minute using %.
    const minutes = Math.floor(totalSeconds / 60) % 60;
    // One hour = 60 minutes * 60 seconds and grabbing the remaining hour using %.
    const hours = Math.floor(totalSeconds / (60*60)) % 24;
    // One day = 24 hours * 60 minutes * 60 seconds
    const days = Math.floor(totalSeconds/ (60*60*24));

    // Assigning value in HTML element
    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;
}

// Initial Call
countdownTimer();

// Calling countdownTimer in every 1 sec
setInterval(countdownTimer, 1000);