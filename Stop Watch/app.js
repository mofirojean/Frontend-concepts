//  Requirements
/**
 * document.querySelector()
 * document.getElementById()
 * addEventListener()
 * if statement
 * toSring()
 * setInterval()
 * innerHTML
 */

// Variables for buttons

const startStopBtn = document.querySelector("#startStopBtn");
const resetBtn = document.querySelector("#resetBtn");

// Variables to hold times value
let seconds =  0;
let minutes = 0;
let hours = 0;

// Variables for leading zero
let LeadingSeconds = 0;
let LeadingMinutes = 0;
let LeadingHours = 0;

// Variables for set interval & timerstatus
let timerInterval = null;
let timerStaus = "stopped"

// stop watch functon
function stopWatxh(){

    seconds++

    if (seconds / 60 === 1){
        seconds = 0;
        minutes++;

        if (minutes / 60 === 1){
            minutes = 0;
            hours++;
        }
    }


    if (seconds < 10){
        LeadingSeconds = "0" + seconds.toString();
    } else {
        LeadingSeconds = seconds;
    }
    if (minutes < 10){
        LeadingMinutes = "0" + minutes.toString();
    } else {
        LeadingMinutes = minutes;
    }
    if (hours < 10){
        LeadingHours = "0" + hours.toString();
    } else {
        LeadingHours = hours;
    }



    let displayTimer = document.getElementById('timer').innerText = LeadingHours + ":" + LeadingMinutes + ":" + LeadingSeconds;
}

// t display the functionality of our timer we need to display on the window

startStopBtn.addEventListener('click', () =>{
    if (timerStaus === "stopped"){
        timerInterval = window.setInterval(stopWatxh, 1000);
        document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;
        timerStaus = "started"
    } else{
        window.clearInterval(timerInterval)
        document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
        timerStaus = "stopped";
    }
})

resetBtn.addEventListener('click', () => {

    window.clearInterval(timerInterval);
    // it smply clears the timer set up in the setInterval method above
    // we dont only want to stop it 
    //  thats why we set all our time components back to zero
    seconds = 0;
    minutes = 0;
    hours = 0;

    document.getElementById('timer').innerHTML = "00:00:00";
})
