// Player Elements
const playerContainer = document.getElementById("player-container");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const startBtn = document.getElementById("start");

function nameEntered() {
  return player1.value && player2.value;
}

function changeStartBtnStatus() {
  if (nameEntered()) {
    startBtn.classList.add("green");
  } else {
    startBtn.classList.remove("green");
  }
}
function handlePlayer1() {
  changeStartBtnStatus();
}

function handlePlayer2() {
  changeStartBtnStatus();
}
