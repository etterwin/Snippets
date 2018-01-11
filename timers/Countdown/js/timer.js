let seconds = 235700;

function Timer(time) {

    if (time < 0) {
        time = 0;
    }

    let hour = Math.floor(time/60/60);
    let minute = Math.floor((time - hour*60*60)/60);
    let second = Math.floor(time - hour*60*60 - minute*60);

    if (hour < 10) {
        document.querySelector('.hour').innerHTML = '0' + hour;
    } else {
        document.querySelector('.hour').innerHTML = hour;
    }

    if (toString(minute).length > 1) {
        document.querySelector('.minute').innerHTML = ':' + minute;
    } else {
        document.querySelector('.minute').innerHTML = ':' + '0' + minute;
    }

    if (toString(second).length > 1) {
        document.querySelector('.second').innerHTML = ':' + second;
    } else {
        document.querySelector('.second').innerHTML = ':' + '0' + second;
    }

    seconds--;
    if (seconds <= 0) {
        document.querySelector('.hour').innerHTML = "00";
        document.querySelector('.minute').innerHTML = "00";
        document.querySelector('.second').innerHTML = "00";
    }
}

/*таймер не считает*/


setInterval(Timer(seconds),1000);