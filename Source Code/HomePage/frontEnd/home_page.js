const circularProgressBar = document.querySelector("#circularProgressBar");
const circularProgressBarNumber = document.querySelector("#circularProgressBar .progress-value");
const buttonTypePomodoro = document.querySelector("#buttonTypePomodoro");
const buttonTypeShortBreak = document.querySelector("#buttonTypeShortBreak");

const pomodoroTimerInSeconds = 1500;
const shortBreakTimerInSeconds = 300;
const TIMER_TYPE_POMODORO = 'POMODORO';
const TIMER_TYPE_SHORT_BREAK = 'SHORTBREAK';

let progressInterval;
let pomodoroType = TIMER_TYPE_POMODORO;
let timerValue = pomodoroTimerInSeconds;
let multiplierFactor = 360 / timerValue;

const audio = new Audio('Source Code/HomePage/alarm/Eerie-clock-chime-sound-effect.mp3');

function formatNumberInStringMinute(number) {
    const minutes = Math.trunc(number / 60).toString().padStart(2, '0');
    const seconds = Math.trunc(number % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
}

const startTimer = () => {
    playAudio();
    progressInterval = setInterval(() => {
        timerValue--;
        setInfoCircularProgressBar();
    }, 1000);

    // Stop the audio after 2000 milliseconds (2 seconds)
    setTimeout(stopAudio, 6000);
}

const stopTimer = () => clearInterval(progressInterval);

const resetTimer = () => {
    clearInterval(progressInterval);
    timerValue = (pomodoroType === TIMER_TYPE_POMODORO) ? pomodoroTimerInSeconds : shortBreakTimerInSeconds;
    multiplierFactor = 360 / timerValue;
    setInfoCircularProgressBar();
    stopAudio();
}

function setInfoCircularProgressBar() {
    if (timerValue === 0) {
        stopTimer();
    }

    circularProgressBarNumber.textContent = `${formatNumberInStringMinute(timerValue)}`;
    circularProgressBar.style.background = `conic-gradient(var(--blue) ${timerValue * multiplierFactor}deg, var(--purple) 0deg)`;
}

const setPomodoroType = (type) => {
    pomodoroType = type;

    if (type === TIMER_TYPE_POMODORO) {
        buttonTypeShortBreak.classList.remove("active");
        buttonTypePomodoro.classList.add("active");
    } else {
        buttonTypePomodoro.classList.remove("active");
        buttonTypeShortBreak.classList.add("active");
    }

    resetTimer();
}

// Play audio for 2 seconds
function playAudio() {
    audio.play();
    // Stop the audio after 2000 milliseconds (2 seconds)
    setTimeout(stopAudio, 6000);
}

// Stop audio
function stopAudio() {
    audio.pause();
    audio.currentTime = 0; // Reset the audio to the beginning
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

$(document).ready(function () {
    $(".radio-btn").click(function () {
      $(".radio-inner").toggleClass("active");
      $("body").toggleClass("dark");
      

    });
  });


  const linkColor = document.querySelectorAll('.nav__link')

  function colorLink(){
      linkColor.forEach(l => l.classList.remove('active-link'))
      this.classList.add('active-link')
  }
  
  linkColor.forEach(l => l.addEventListener('click', colorLink))
  
  /*=============== SHOW HIDDEN MENU ===============*/
  const showMenu = (toggleId, navbarId) =>{
      const toggle = document.getElementById(toggleId),
      navbar = document.getElementById(navbarId)
  
      if(toggle && navbar){
          toggle.addEventListener('click', ()=>{
              /* Show menu */
              navbar.classList.toggle('show-menu')
              /* Rotate toggle icon */
              toggle.classList.toggle('rotate-icon')
          })
      }
  }
  showMenu('nav-toggle','nav')


let subMenu = document.getElementById("subMenu");
        
function toggleMenu(){
    subMenu.classList.toggle("open-menu");
}