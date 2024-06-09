//set this values for running the counter
const daysValue = document.querySelector('#daysValue')
const hoursValue = document.querySelector('#hoursValue')
const minutesValue = document.querySelector('#minutesValue')
const secondsValue = document.querySelector('#secondsValue')

let finalTimeObject = {
    selectedYear: 2024,
    selectedMonth: 9,
    selectedDay: 12,
    selectedHour: 12,
    selectedMinuts: 30,
    selectedSeconds: 0,
    selectedMiliSecinds: 10
}

var finalTime = new Date(
    finalTimeObject.selectedYear,
    finalTimeObject.selectedMonth - 1,
    finalTimeObject.selectedDay,
    finalTimeObject.selectedHour,
    finalTimeObject.selectedMinuts,
    finalTimeObject.selectedSeconds,
    finalTimeObject.selectedMiliSecinds
)

function startCounter() {
    setInterval(() => {
        const currentTime = new Date();

        var difMiliSeconds = finalTime.getTime() - currentTime.getTime()
        var difSeconds = (Math.floor(difMiliSeconds / 1000)) % 60;
        var difMinutes = (Math.floor(difMiliSeconds / 60000)) % 60;
        var difHour = (Math.floor(difMiliSeconds / 3600000)) % 24;
        var difDay = Math.floor(difMiliSeconds / 86400000)
        // console.log(finalTime);
        // console.log(currentTime);
        // console.log('  dif time : ' + difMiliSeconds + ' mili second ');
        setTimerView(difSeconds, difMinutes, difHour, difDay)
    }, 1000)
}

function setTimerView(seconds, minutes, hours, days) {
    if (seconds < 10) {
        seconds = `0${seconds}`
    }
    if (minutes < 10) {
        minutes = `0${minutes}`
    }
    if (hours < 10) {
        hours = `0${hours}`
    }
    if (days < 10) {
        days = `0${days}`
    }
    daysValue.innerHTML = `<div class="semicircle1"></div><hr class="seperator" /><div class="semicircle2"></div>${days}`
    hoursValue.innerHTML = `<div class="semicircle1"></div><hr class="seperator" /><div class="semicircle2"></div>${hours}`
    minutesValue.innerHTML = `<div class="semicircle1"></div><hr class="seperator" /><div class="semicircle2"></div>${minutes}`
    secondsValue.innerHTML = `<div class="semicircle1"></div><hr class="seperator" /><div class="semicircle2"></div>${seconds}`
}