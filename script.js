const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const stopBtn = document.getElementById("stopBtn");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const milliSeconds = document.getElementById("milliSeconds");

//Helping variables
let stopBtnFlag = true;


//Defining Numbers to change
let elapsedHours=0;
let elapsedMinutes=0;
let elapsedSeconnds=0;
let elapsedMilliSeconds=0;

//Defining Intervals
let milliSecondsInterval, secondsInterval;

stopBtn.disabled = true;
stopBtn.style.opacity ="0.5";

const start =()=>{
    clearInterval(milliSecondsInterval);
    clearInterval(secondsInterval);

    stopBtn.disabled = false;
    stopBtn.style.opacity ="1";
    startBtn.disabled = true;
    startBtn.style.opacity ="0.5";
    


    secondsInterval = setInterval(() => {
        if(elapsedSeconnds>58){
            elapsedSeconnds =0;
            if(elapsedMinutes>58){
                elapsedMinutes = 0;
                elapsedHours+=1;
                hours.innerHTML = String(elapsedHours).padStart(2,0);
            }
            else{
                elapsedMinutes+=1;
            }
            minutes.innerHTML = String(elapsedMinutes).padStart(2,0);
        }
        else{
            elapsedSeconnds +=1;
        }
        seconds.innerHTML= String(elapsedSeconnds).padStart(2,0);
    }, 1000);

    milliSecondsInterval =setInterval(() => {
        if(elapsedMilliSeconds>58){
            elapsedMilliSeconds =0;
        }
        elapsedMilliSeconds+=1;
        milliSeconds.innerHTML = String(elapsedMilliSeconds).padStart(2,0);
    }, 1);
}

startBtn.addEventListener("click",start)

stopBtn.addEventListener("click",()=>{
    if(stopBtnFlag){
        clearInterval(secondsInterval);
        clearInterval(milliSecondsInterval);

        stopBtn.innerText = "Resume";
        stopBtnFlag = false;
    }
    else{
        stopBtn.innerText = "Stop";
        stopBtnFlag = true;
        start();
    }
})

resetBtn.addEventListener("click",()=>{
    clearInterval(secondsInterval);
    clearInterval(milliSecondsInterval);

    hours.innerHTML = "00";
    minutes.innerHTML = "00";
    seconds.innerHTML = "00";
    milliSeconds.innerHTML = "00";

    stopBtn.disabled = true;
    stopBtn.style.opacity ="0.5";
    startBtn.disabled = false;
    startBtn.style.opacity ="1";
})