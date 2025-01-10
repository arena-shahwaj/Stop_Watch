let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

const display = document.getElementById('display');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
const bgMusic = document.getElementById('bg-music');

startButton.addEventListener('click', () => {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(updateTime, 1000);
    bgMusic.play();  
  }
});


stopButton.addEventListener('click', () => {
  clearInterval(timer);
  isRunning = false;
  bgMusic.pause();  
});

resetButton.addEventListener('click', () => {
  clearInterval(timer);
  isRunning = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  display.innerText = '00:00:00';
  bgMusic.currentTime = 0;  
  bgMusic.pause(); 
});

function updateTime() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }

  display.innerText = formatTime(hours, minutes, seconds);
}

function formatTime(hours, minutes, seconds) {
  return (
    (hours < 10 ? '0' : '') +
    hours +
    ':' +
    (minutes < 10 ? '0' : '') +
    minutes +
    ':' +
    (seconds < 10 ? '0' : '') +
    seconds
  );
}

bgMusic.addEventListener('ended', () => {
  bgMusic.currentTime = 0; 
  bgMusic.play(); 
});
