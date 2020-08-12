const X_CLASS = "x";
const CIRCLE_CLASS = "circle";
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let circleTurn;

// Player Elements
const playerContainer = document.getElementById("player-container");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const startBtn = document.getElementById("start");

// Board Elements
const gameContainer = document.getElementById("game-container");
const board = document.getElementById("board");
const cellElements = document.querySelectorAll("[data-cell]");
const gameStatus = document.getElementById("gameStatus");

// Winning Message Elements
const winningMessageElement = document.getElementById("winningMessage");
const winningMessageTextElement = document.querySelector(
  "[data-winning-message-text]"
);
const restartButton = document.getElementById("restartButton");

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

/* eslint max-len: ["error", { "code": 200 }] */
function checkWin(currentClass) {
  return WINNING_COMBINATIONS.some((combination) =>
    combination.every((index) =>
      cellElements[index].classList.contains(currentClass)
    )
  );
}

function isDraw() {
  return [...cellElements].every(
    (cell) =>
      cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
  );
}

function endGame(draw) {
  if (draw) {
    winningMessageTextElement.innerText = "Draw!";
  } else {
    winningMessageTextElement.innerText = `${
      circleTurn ? player2.value : player1.value
    } Wins!`;
  }
  winningMessageElement.classList.add("show");
}

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
