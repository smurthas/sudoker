'use strict';

const isSolved = require('../lib.js').isSolved;

function solve(board, square) {
  if (square >= 81) {
    let solved = isSolved(board);
    //console.error('solved', solved, board);
    return solved;
  }

  let row = Math.floor(square/9);
  let col = square % 9;
  //console.error('row, col', row, col);

  // if this spot is already set, skip it
  if (board[row][col]) {
    return solve(board, square+1);
  }

  for (let guess = 1; guess <= 9; guess++) {
    board[row][col] = guess;
    if (solve(board, square+1)) {
      return true;
    }
  }

  delete board[row][col];
  return false;
}

module.exports = solve;

