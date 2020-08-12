function handleClick(e) {
  const cell = e.target;
  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
  placeMark(cell, currentClass);
  // Check for Win
  if (checkWin(currentClass)) {
    endGame(false);
  } else if (isDraw()) {
    endGame(true);
  } else {
    swapTurns();
    setBoardHoverClass();
  }
}

/* eslint-disable no-alert */
function startGame() {
  if (nameEntered()) {
    gameContainer.classList.add("displayBlock");
    playerContainer.classList.add("displayNone");
    circleTurn = false;
    cellElements.forEach((cell) => {
      cell.classList.remove(X_CLASS);
      cell.classList.remove(CIRCLE_CLASS);
      cell.removeEventListener("click", handleClick);
      cell.addEventListener("click", handleClick, { once: true });
    });
    setBoardHoverClass();
    winningMessageElement.classList.remove("show");
  } else {
    alert("Please Enter Player's Name");
  }
}
/* eslint-enable no-alert */

function restart() {
  gameContainer.classList.remove("displayBlock");
  playerContainer.classList.remove("displayNone");
  winningMessageElement.classList.remove("show");
  player1.value = "";
  player2.value = "";
  changeStartBtnStatus();
}

// Event Listeners
restartButton.addEventListener("click", restart);
// player1.addEventListener("change", (e) => {
//   console.log(e.target.value);
// });
startBtn.addEventListener("click", startGame);
player1.addEventListener("keyup", handlePlayer1);
player2.addEventListener("keyup", handlePlayer2);

// startGame();
