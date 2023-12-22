setInterval(() => {

    //  Analog Clock

    let hours = document.getElementById('hours');
    let minute = document.getElementById('minute');
    let second = document.getElementById('second');

    let d = new Date();
    let hr = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();

    let hourRotation = 30 * hr + min / 2;
    let minuteRotation = 6 * min;
    let secondRotation = 6 * sec;

    hours.style.transform = `rotate(${hourRotation}deg)`
    minute.style.transform = `rotate(${minuteRotation}deg)`
    second.style.transform = `rotate(${secondRotation}deg)`


}, 1000)

function showTime() {
    let tim = new Date();
    let hr = tim.getHours();
    let min = tim.getMinutes();
    let sec = tim.getSeconds();

    
        document.getElementById('hour').innerHTML = (hr<10?"0":"") + hr ;
        document.getElementById('minutes').innerHTML = (min<10?"0":"") + min;
        document.getElementById('seconds').innerHTML = (sec<10?"0":"") + sec;
    

}


setInterval(showTime, 1000)
