function getTime() {
    date = new Date();
    return {hour: date.getHours(), minute: date.getMinutes(), second: date.getSeconds()};
}

function tick() {
    const hourHand = document.querySelector(".hour");
    const minHand = document.querySelector(".minute");
    const secHand = document.querySelector(".second");
    time = getTime()
    
    // hour hand
    if(time.hour > 12) {
        hourHand.style.transform = `rotate(${(360 / 12) * (time.hour - 12)}deg)`;
    } else {
        hourHand.style.transform = `rotate(${(360 / 12) * time.hour}deg)`;
    }
    // minute hand
    minHand.style.transform = `rotate(${(360 / 60) * time.minute}deg)`;
    // second hand
    secHand.style.transform = `rotate(${(360 / 60) * time.second}deg)`;
}

let interval = setInterval(tick, 1000);