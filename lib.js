'use strict';

function checkSet(row) {
  if (!row || row.length !== 9) {
    //throw new Error('incorrect row length ' + row);
    return false;
  }

  let present = {};

  for (let i in row) {
    let value = row[i];
    if (value > 9 || value < 1) {
      throw new Error('value out of bounds ' + value);
      return false;
    }
    if (present[value]) {
      //throw new Error('value already present ' + value);
      return false;
    }
    present[value] = true;
  }

  return true;
}

function getColumn(board, c) {
  let col = [];
  for (let r in board) {
    col[r] = board[r];
  }

  return col;
}


// returns true if board is a valid sudoku solution (false if not)
function isSolved(board) {
  // must have 9 rows
  if (!board || board.length !== 9) {
    throw new Error('incorrect size');
    return false
  }

  // loop over rows, checking each
  for (let r = 0; r < 9; r++) {
    // check this row
    if (!checkSet(board[r])) {
      //throw new Error('row did not check ' + board[r]);
      return false;
    }
  }

  // loop over columns, checking each
  for (let c = 0; c < 9; c++) {
    if (!checkSet(getColumn(board, c))) {
      return false;
    }
  }

  // nothing failed, so this is a solution
  return true;
}

module.exports.isSolved = isSolved;

