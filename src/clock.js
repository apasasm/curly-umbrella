function clockPadStart(item) {
  return String(item).padStart(2, "0");
}

function printClock() {
  const myclock = new Date();
  const year = clockPadStart(myclock.getFullYear());
  const month = clockPadStart(myclock.getMonth());
  const day = clockPadStart(myclock.getDate());
  const hour = clockPadStart(myclock.getHours());
  const minite = clockPadStart(myclock.getMinutes());
  const second = clockPadStart(myclock.getSeconds());
  const clockMessage = `${year}-${month}-${day} ${hour}:${minite}:${second}`;
  clockTitle.innerHTML = clockMessage;
}

const clockTitle = document.querySelector(".js-clock");
printClock();
setInterval(printClock, 1000);
