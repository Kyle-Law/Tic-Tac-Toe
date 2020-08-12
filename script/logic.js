/* eslint-disable no-unused-vars,no-undef */

// Winning Message Elements
const winningMessageElement = document.getElementById('winningMessage');
const winningMessageTextElement = document.querySelector(
  '[data-winning-message-text]',
);
const restartButton = document.getElementById('restartButton');

/* eslint max-len: ["error", { "code": 200 }] */
function checkWin(currentClass) {
  return WINNING_COMBINATIONS.some((combination) => combination.every((index) => cellElements[index].classList.contains(currentClass)));
}

function isDraw() {
  return [...cellElements].every(
    (cell) => cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS),
  );
}

function endGame(draw) {
  if (draw) {
    winningMessageTextElement.innerText = 'Draw!';
  } else {
    winningMessageTextElement.innerText = `${
      circleTurn ? player2.value : player1.value
    } Wins!`;
  }
  winningMessageElement.classList.add('show');
}
