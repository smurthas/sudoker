'use strict';

const isSolved = require('../lib.js').isSolved;
const brute = require('./brute');

// return the possible values for a given cell on a given board by checking the
// row and column for values already set
function getOptions(board, r, c) {
  // start with all numbers 1-9, as a hash so they can be removed
  let all = { 1:1, 2:1, 3:1, 4:1, 5:1, 6:1, 7:1, 8:1, 9:1 };

  // loop over all rows, deleting values we find
  for (let i = 0; i < 9; i++) {
    if (i === r) {
      continue;
    }

    let value = board[i][c];
    if (value) {
      delete all[value];
    }
  }

  // loop over all columns, deleting values we find
  for (let i = 0; i < 9; i++) {
    if (i === c) {
      continue;
    }

    let value = board[r][i];
    if (value) {
      delete all[value];
    }
  }

  // return remaining values
  return Object.keys(all);
}

function solve(board, square) {
  // if we've made it to the end of the board, check if we've solved it
  if (square >= 81) {
    return isSolved(board);
  }

  let row = Math.floor(square/9);
  let col = square % 9;

  // if this spot is already set, skip it
  if (board[row][col]) {
    return solve(board, square+1);
  }

  let options = getOptions(board, row, col);
  // loop over the possible options for this cell, trying each one and recursing
  for (let i in options) {
    let guess = parseInt(options[i], 10);
    // put this option in the board
    board[row][col] = guess;

    // recurse to the next cell
    if (solve(board, square+1)) {
      return true;
    }
  }

  // since there wasn't a solution, remove the change we've made to the board
  delete board[row][col];
  return false;
}


module.exports = solve;

