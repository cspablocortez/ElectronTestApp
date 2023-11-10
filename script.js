let hours, minutes, seconds, now;
let hoursSpan, minutesSpan, secondsSpan;

hoursSpan = document.getElementById("hours");
minutesSpan = document.getElementById("minutes");
secondsSpan = document.getElementById("seconds");


function formatTime() {
    const d = new Date();
    let hours, minutes, seconds;
    
    if (d.getHours() < 10) {
        hours = "0" + d.getHours();
    } else {
        hours = d.getHours();
    }
    
    if (d.getMinutes() < 10) {
        minutes = "0" + d.getMinutes();
    } else {
        minutes = d.getMinutes();
    }
    
    if (d.getSeconds() < 10) {
        seconds = "0" + d.getSeconds();
    } else {
        seconds = d.getSeconds();
    }

    // 12 hour clock
    if (hours > 12) {
        hours = hours % 12;
        return hours + "|" + minutes + "|" + seconds + " PM";
    } else {
        return hours + "|" + minutes + "|" + seconds + " AM";
    }
    
    return hours + ":" + minutes + ":" + seconds;
}

function setTime() {
    const timeCell = document.getElementById('time');
    let time = formatTime();
    timeCell.innerHTML = time;
}

window.setInterval(setTime, 1000);