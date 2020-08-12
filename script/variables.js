/* eslint-disable no-unused-vars,no-undef */

const X_CLASS = 'x';
const CIRCLE_CLASS = 'circle';
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
const playerContainer = document.getElementById('player-container');
const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');
const startBtn = document.getElementById('start');

// Board Elements
const gameContainer = document.getElementById('game-container');
const board = document.getElementById('board');
const cellElements = document.querySelectorAll('[data-cell]');
const gameStatus = document.getElementById('gameStatus');
