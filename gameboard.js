// Module to manage the game board
const Gameboard = (() => {
    let board = ['', '', '', '', '', '', '', '', ''];
  
    // Get the current state of the board
    const getBoard = () => board;
  
    // Reset the board to its initial state
    const resetBoard = () => {
      board = ['', '', '', '', '', '', '', '', ''];
    };
  
    // Set a mark on the board at the specified index
    const setMark = (index, mark) => {
      if (board[index] === '') {
        board[index] = mark;
        return true;
      }
      return false;
    };
  
    return { getBoard, resetBoard, setMark };
  })();
  