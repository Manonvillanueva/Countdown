let totalSeconds;
let interval;

const updatesCountdown = () => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const sec = seconds < 10 ? "0" + seconds : seconds;

  countdownDisplay.textContent = `${minutes} : ${sec}`;

  if (totalSeconds > 0) {
    totalSeconds--;
  } else {
    countdownDisplay.textContent = "STOP";
    clearInterval(interval);
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  totalSeconds = choice.value * 60;
  choice.value = "";
  clearInterval(interval);
  interval = setInterval(updatesCountdown, 1000);
});
