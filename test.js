let minutes = 5
let seconds = 0
let totalTime = (minutes * 60) + seconds

function pad(num) {
    return num < 10 ? "0" + num : num;
}

function timer() {
    const timerStart = setInterval(() => {
        if (seconds <= 0) {
            minutes -= 1
            seconds = 59
            clearInterval(timerStart)
        } else {
            seconds -= 1
            totalTime --
            clearInterval(timerStart)
        }
        return totalTime
    }, 1000)        
}
console.log(timer())