/* eslint-disable no-unused-vars,no-undef */

function nameEntered() {
  return player1.value && player2.value;
}

function changeStartBtnStatus() {
  if (nameEntered()) {
    startBtn.classList.add('green');
  } else {
    startBtn.classList.remove('green');
  }
}
