# Let's solve a Sudoku board!

Hard for humans, easy for a computer! I was curious on a family vacation, so I
wrote a few Sudoku solvers -- here they are.

There are two solvers in the `solvers` directory:

* `brute` is as dumb as it gets. It just loops over all cells, trying 1-9 in order.
* `simple` is a bit smarter. It loops over all cells, but only tries numbers that aren't already set in that row or column.

`brute` can only really solve boards with 6 or 7 empty cells, whereas `simple`
can solve really any sudoku puzzle in a few milliseconds.

