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

// Winning Message Elements
const winningMessageElement = document.getElementById("winningMessage");
const winningMessageTextElement = document.querySelector(
  "[data-winning-message-text]"
);
const restartButton = document.getElementById("restartButton");

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
