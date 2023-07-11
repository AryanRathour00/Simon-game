
let intervalId1;
var seconds = 0;
var hours = 0;
var minutes = 0;
let intervalId;

const stopwatch = () => {
  clearInterval(intervalId1);
  clearInterval(intervalId);
  intervalId = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      minutes++;
      seconds = 0;
    } else if (seconds === 60 || minutes === 60) {
      hours++;
      seconds = 0;
      minutes = 0;
    } else if (hours === 24 || minutes === 60 || seconds === 60) {
      seconds = 0;
      minutes = 0;
      hours = 0;
    }

    if (hours < 10) {
      document.querySelector(".js-hour").innerHTML = `0${hours}`;
    } else {
      document.querySelector(".js-hour").innerHTML = hours;
    }
    if (seconds < 10) {
      document.querySelector(".js-second").innerHTML = `0${seconds}`;
    } else {
      document.querySelector(".js-second").innerHTML = seconds;
    }
    if (minutes < 10) {
      document.querySelector(".js-minute").innerHTML = `0${minutes}`;
    } else {
      document.querySelector(".js-minute").innerHTML = minutes;
    }
  }, 1000);
};

document.querySelector("#start-watch").addEventListener("click", () => {
  clearInterval(intervalId1);
  stopwatch();
});

document.querySelector("#stop-watch").addEventListener("click", () => {
  clearInterval(intervalId);
});

document.querySelector(".clock-container").addEventListener("click", () => {
  clearInterval(intervalId); 
  clock();
});
const clock = () => {
  seconds = 0;
  minutes = 0;
  hours = 0;
  intervalId1 = setInterval(() => {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    if (hour < 10) {
      document.querySelector(".js-hour").innerHTML = `0${hour}`;
    } else {
      document.querySelector(".js-hour").innerHTML = hour;
    }
    if (second < 10) {
      document.querySelector(".js-second").innerHTML = `0${second}`;
    } else {
      document.querySelector(".js-second").innerHTML = second;
    }
    if (minute < 10) {
      document.querySelector(".js-minute").innerHTML = `0${minute}`;
    } else {
      document.querySelector(".js-minute").innerHTML = minute;
    }
  }, 1000);
};
clock()