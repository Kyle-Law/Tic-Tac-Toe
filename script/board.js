// Board Elements
const gameContainer = document.getElementById("game-container");
const board = document.getElementById("board");
const cellElements = document.querySelectorAll("[data-cell]");
const gameStatus = document.getElementById("gameStatus");

function setBoardHoverClass() {
  board.classList.remove(X_CLASS);
  board.classList.remove(CIRCLE_CLASS);
  if (circleTurn) {
    board.classList.add(CIRCLE_CLASS);
    gameStatus.textContent = `${player2.value} turns!`;
  } else {
    board.classList.add(X_CLASS);
    gameStatus.textContent = `${player1.value} turns!`;
  }
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
}

function swapTurns() {
  circleTurn = !circleTurn;
}
