'use strict';

const assert = require('assert');

const SOLVER_NAMES = [/*'brute', */'simple'];


for (let i in SOLVER_NAMES) {
  let solverName = SOLVER_NAMES[i];
  let solver = require('../solvers/' + solverName);

  describe(solverName, function() {

    let solve = solver;
    it('should solve a board 1 away from completion', function() {
      let board = [
        [1,2,3,4,5,6,7,8,9],
        [2,3,4,5,6,7,8,9,1],
        [3,4,5,6,7,8,9,1,2],
        [4,5,6,7,8,9,1,2,3],
        [5,6,7,8,9,1,2,3,4],
        [6,7,8,9,1,2,3,4,5],
        [7,8,9,1,2,3,4,5,6],
        [8,9,1,2,3,4,5,6,7],
        [9,1,2,3,4,5,6,7, ],
      ];

      assert(solve(board, 0));
    });

    it('should solve a board 5 from completion', function() {
      let board = [
        [1,2,3,4,5,6,7,8,9],
        [2,3,4,5,6,7,8,9,1],
        [3,4,5,6, ,8,9,1,2],
        [4,5,6,7,8,9,1,2,3],
        [5,6,7,8,9,1,2,3,4],
        [6,7,8,9, ,2,3, ,5],
        [7,8,9,1,2,3,4,5,6],
        [8,9,1,2,3,4,5, ,7],
        [9,1,2,3,4,5,6,7, ],
      ];

      assert(solve(board, 0));
    });

    it('should solve a board 9 from completion', function() {
      let board = [
        [1,2,3,4,5,6,7,8,9],
        [2, ,4,5,6,7,8,9,1],
        [3,4,5,6, ,8,9,1,2],
        [4,5,6,7,8,9,1,2, ],
        [5,6, ,8,9,1,2,3,4],
        [6,7,8,9, ,2,3, ,5],
        [7,8,9,1,2, ,4,5,6],
        [8,9,1,2,3,4,5, ,7],
        [9,1,2,3,4,5,6,7, ],
      ];

      assert(solve(board, 0));
    });

    it('should solve a board 16 from completion', function() {
      let board = [
        [1,2,3,4,5, ,7,8,9],
        [2, ,4,5,6, ,8,9,1],
        [3,4,5,6, ,8,9,1,2],
        [4,5,6,7,8,9, ,2, ],
        [ ,6, ,8,9,1,2,3,4],
        [6,7,8,9, ,2,3, ,5],
        [7, ,9,1,2, ,4,5,6],
        [8,9, ,2,3,4,5, ,7],
        [9, ,2,3,4,5,6,7, ],
      ];

      assert(solve(board, 0));
    });

    it('should solve a board 25 from completion', function() {
      let board = [
        [1,2, ,4,5, ,7,8, ],
        [2, ,4,5,6, ,8,9,1],
        [3,4, ,6, ,8,9,1, ],
        [4,5,6,7, ,9, ,2, ],
        [ ,6, ,8,9, ,2,3,4],
        [6,7, ,9, ,2,3, ,5],
        [7, ,9, ,2, ,4,5,6],
        [8,9, ,2,3,4,5, ,7],
        [9, ,2,3,4, ,6,7, ],
      ];

      assert(solve(board, 0));
    });

    it('should solve a board 36 from completion', function() {
      let board = [
        [1,2, ,4, , ,7, , ],
        [2, ,4, ,6, ,8, ,1],
        [3,4, , , ,8, ,1, ],
        [4,5,6, , ,9, ,2, ],
        [ ,6, , ,9, ,2, ,4],
        [6,7, ,9, ,2,3, ,5],
        [7, ,9, ,2, ,4,5,6],
        [8,9, ,2,3, ,5, ,7],
        [9, ,2, ,4, ,6,7, ],
      ];

      assert(solve(board, 0));
    });

    it('should solve a board 49 from completion', function() {
      let board = [
        [1,2, ,4, , ,7, , ],
        [ , ,4, ,6, ,8, ,1],
        [3,4, , , , , ,1, ],
        [4, ,6, , ,9, ,2, ],
        [ , , , ,9, ,2, ,4],
        [6, , ,9, ,2, , ,5],
        [ , ,9, ,2, , , ,6],
        [ ,9, ,2, , , , ,7],
        [9, ,2, ,4, , ,7, ],
      ];

      assert(solve(board, 0));
    });

    it('should solve a board 64 from completion', function() {
      let board = [
        [1,2, , , , ,7, , ],
        [ , ,4, , , , , ,1],
        [ , , , , , , ,1, ],
        [4, ,6, , , , , , ],
        [ , , , ,9, ,2, , ],
        [6, , , , , , , , ],
        [ , , , ,2, , , , ],
        [ ,9, , , , , , ,7],
        [9, , , ,4, , ,7, ],
      ];

      assert(solve(board, 0));
    });

    it('should solve a real board', function() {
      let board = [
        [7, , , ,3,2,4, , ],
        [ , , ,6,9, , , , ],
        [ , ,9, ,4,1, ,2, ],
        [ , ,7, ,1, , ,3, ],
        [ ,9, ,2, ,7, ,8, ],
        [ ,4, , ,5, ,7, , ],
        [ ,2, ,9,7, ,5, , ],
        [ , , , ,8,3, , ,7],
        [ , ,5,1,2, , , ,3],
      ];

      assert(solve(board, 0));
    });

  });

}

