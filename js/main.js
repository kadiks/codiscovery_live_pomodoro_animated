let countEl;
let circleEl;
const endTimer = 10;
let count = endTimer;
const secondEndTimer = 3;
let secondCount = secondEndTimer;
let interval;

const init = () => {
  countEl = document.querySelector("#countdown p");
  circleEl = document.querySelector("#timer-circle");

  countEl.textContent = getCountToMin(count);

  interval = setInterval(updateTimer, 1000);

  setTimeout(finishMainTimer, endTimer * 1000);
};

const finishMainTimer = () => {
  // Define animation

  // Define style
  document.body.classList.remove("main-timer");
  document.body.classList.add("second-timer");

  // Define second  timer base value
  countEl.textContent = getCountToMin(secondCount);

  setTimeout(finishSecondTimer, secondEndTimer * 1000);
};

const finishSecondTimer = () => {
  //   circleEl.style.animation = "dash 2s linear infinite";

  document.body.classList.add("main-timer");
  document.body.classList.remove("second-timer");

  count = endTimer;
  secondCount = secondEndTimer;

  countEl.textContent = getCountToMin(count);
  setTimeout(finishMainTimer, endTimer * 1000);
};

const getCountToMin = (sec) => {
  let min = 0;

  min = Math.floor(sec / 60);
  sec -= min * 60;

  const minStr = min < 10 ? `0${min}` : min;
  const secStr = sec < 10 ? `0${sec}` : sec;

  return `${minStr}:${secStr}`;
};

const updateMainTimer = () => {
  count--;
  countEl.textContent = getCountToMin(count);
};

const updateSecondTimer = () => {
  secondCount--;
  countEl.textContent = getCountToMin(secondCount);
};

const updateTimer = () => {
  if (count) {
    updateMainTimer();
  } else {
    updateSecondTimer();
  }
};

window.addEventListener("load", init);
