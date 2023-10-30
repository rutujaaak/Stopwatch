document.addEventListener("DOMContentLoaded", function () {
    const startTimerButton = document.getElementById("startTimer");
    const startStopwatchButton = document.getElementById("startStopwatch");
    const display = document.getElementById("display");
    let timerInterval;
    let stopwatchInterval;
    let timerSeconds = 0;
    let stopwatchSeconds = 0;

    startTimerButton.addEventListener("click", function () {
        clearInterval(stopwatchInterval); // Stop the stopwatch if running
        clearInterval(timerInterval);
        timerSeconds = 0;
        display.textContent = formatTime(timerSeconds);
        timerInterval = setInterval(function () {
            timerSeconds++;
            display.textContent = formatTime(timerSeconds);
        }, 1000);
    });

    startStopwatchButton.addEventListener("click", function () {
        clearInterval(timerInterval); // Stop the timer if running
        clearInterval(stopwatchInterval);
        stopwatchSeconds = 0;
        display.textContent = formatTime(stopwatchSeconds);
        stopwatchInterval = setInterval(function () {
            stopwatchSeconds++;
            display.textContent = formatTime(stopwatchSeconds);
        }, 1000);
    });

    function formatTime(seconds) {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;
        return (
            (hours < 10 ? "0" : "") +
            hours +
            ":" +
            (minutes < 10 ? "0" : "") +
            minutes +
            ":" +
            (remainingSeconds < 10 ? "0" : "") +
            remainingSeconds
        );
    }
});
