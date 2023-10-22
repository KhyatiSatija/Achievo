const circularProgressBar = document.querySelector("#circularProgressBar");
const circularProgressBarNumber = document.querySelector("#circularProgressBar .progress-value");
const buttonTypePomodoro = document.querySelector("#buttonTypePomodoro");
const buttonTypeShortBreak = document.querySelector("#buttonTypeShortBreak");

const audio = new Audio('alarm.mp3');

const pomodoroTimerInSeconds = 1500; 
const shortBreakTimerInSeconds = 300;
const TIMER_TYPE_POMODORO = 'POMODORO';
const TIMER_TYPE_SHORT_BREAK = 'SHORTBREAK';


let progressInterval;
let pomodoroType = TIMER_TYPE_POMODORO;
let timerValue = pomodoroTimerInSeconds;
let multiplierFactor = 360 / timerValue;


function formatNumberInStringMinute(number){
    
    const minutes = Math.trunc(number / 60)
                        .toString()
                            .padStart(2, '0');
    const seconds = Math.trunc(number % 60)
                            .toString()
                                .padStart(2, '0');
    return `${minutes}:${seconds}`;
}

const startTimer = () => {
    progressInterval = setInterval(() => {
        timerValue--;
        setInfoCircularProgressBar();
    }, 1000);
}

const stopTimer = () => clearInterval(progressInterval);

const resetTimer = () =>{
    clearInterval(progressInterval);

    timerValue = (pomodoroType === TIMER_TYPE_POMODORO) 
                        ? pomodoroTimerInSeconds 
                            : shortBreakTimerInSeconds;

    multiplierFactor = 360 / timerValue;

    setInfoCircularProgressBar();    
    // audio.stop();
}
  
function setInfoCircularProgressBar(){

    if(timerValue === 0){
        stopTimer();
        audio.play();        
    }

    circularProgressBarNumber.textContent = `${formatNumberInStringMinute(timerValue) }`;
    circularProgressBar.style.background = `conic-gradient(var(--blue) ${timerValue * multiplierFactor}deg, var(--purple) 0deg)`;

}

const setPomodoroType = (type) =>{    
    pomodoroType = type; 

    if(type === TIMER_TYPE_POMODORO){
        buttonTypeShortBreak.classList.remove("active");
        buttonTypePomodoro.classList.add("active");                  
    }else{
        buttonTypePomodoro.classList.remove("active");
        buttonTypeShortBreak.classList.add("active"); 
    }

    resetTimer();
}

const inputBox = document.getElementById("input-box");
const ListContainer = document.getElementById("listto");
function addTask(){
    if(inputBox.value === ''){
        alert("write something before adding!")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        ListContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    inputBox.value = '';
}

ListContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
    
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }

}, false);