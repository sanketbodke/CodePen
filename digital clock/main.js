function displayTime() {
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var mins = dateTime.getMinutes();
    var secs = dateTime.getSeconds();

    if (hrs < 10) {
        hrs = '0' + hrs;
    }

    if (mins < 10) {
        mins = '0' + mins;
    }

    if (secs < 10) {
        secs = '0' + secs;
    }

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = mins;
    document.getElementById('seconds').innerHTML = secs;
}
setInterval(displayTime, 10);