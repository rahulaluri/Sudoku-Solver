function isValid(board, row, col, k) {
    for (let i = 0; i < 9; i++) {
        const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
        const n = 3 * Math.floor(col / 3) + i % 3;
        if (board[row][i] == k || board[i][col] == k || board[m][n] == k) {
          return false;
        }
    }
    return true;
}


var solveSudoku = function(data) {
    for (let i = 0; i < 9; i++) {
     for (let j = 0; j < 9; j++) {
       if (data[i][j] == '.') {
         for (let k = 1; k <= 9; k++) {
           if (isValid(data, i, j, k)) {
             data[i][j] = `${k}`;
           if (solveSudoku(data)) {
            return true;
           } else {
            data[i][j] = '.'
           }
          }
        }
        console.table('data',data,i,j);
        return false;
      }
    }
  }

  console.table(data)
  return true;  
 };

   solveSudoku([
    ["5","3",".","6",".",".",".","1","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
])

// [
// ["5","3","4","6","7","8","9","1","2"],
// ["6","7","2","1","9","5","3","4","8"],
// ["1","9","8","3","4","2","5","6","7"],
// ["8","5","9","7","6","1","4","2","3"],
// ["4","2","6","8","5","3","7","9","1"],
// ["7","1","3","9","2","4","8","5","6"],
// ["9","6","1","5","3","7","2","8","4"],
// ["2","8","7","4","1","9","6","3","5"],
// ["3","4","5","2","8","6","1","7","9"]
// ]

