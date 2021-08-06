window.addEventListener("load", () => {
  let seconds = 00;
  let tens = 00;
  let interval;
  const elSeconds = document.querySelector("#seconds");
  const elTens = document.querySelector("#tens");
  const btnStart = document.querySelector("#btn-start");
  const btnStop = document.querySelector("#btn-stop");
  const btnReset = document.querySelector("#btn-reset");

  const startTimer = () => {
    tens++;

    if (tens <= 9) elTens.innerText = "0" + tens;
    if (tens > 9) elTens.innerText = tens;

    if (tens > 99) {
      seconds++;
      elSeconds.innerText = "0" + seconds;
      tens = 0;
      elTens.innerText = "0" + tens;
    }

    if (seconds > 9) {
      elSeconds.innerText = seconds;
    }
  };

  btnStart.addEventListener("click", () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
  });

  btnStop.addEventListener("click", () => {
    clearInterval(interval);
  });

  btnReset.addEventListener("click", () => {
    clearInterval(interval);
    tens = "00";
    seconds = "00";
    elTens.innerText = tens;
    elSeconds.innerText = seconds;
  });
});
