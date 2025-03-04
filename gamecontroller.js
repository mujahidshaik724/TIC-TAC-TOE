// Module to control the game logic
const GameController = (() => {
    let player1, player2;
    let currentPlayer;
    const winningCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
  
    // Start the game with two players
    const startGame = (name1, name2) => {
      player1 = Player(name1, 'X');
      player2 = Player(name2, 'O');
      currentPlayer = player1;
      Gameboard.resetBoard();
      DisplayController.render();
      DisplayController.displayResult('');
    };
  
    // Switch to the next player
    const switchPlayer = () => {
      currentPlayer = currentPlayer === player1 ? player2 : player1;
    };
  
    // Handle a round of play
    const playRound = (index) => {
      if (Gameboard.setMark(index, currentPlayer.mark)) {
        if (checkWin()) {
          DisplayController.displayResult(`${currentPlayer.name} wins!`);
        } else if (Gameboard.getBoard().every(cell => cell !== '')) {
          DisplayController.displayResult(`It's a draw!`);
        } else {
          switchPlayer();
        }
        DisplayController.render();
      }
    };
  
    // Check if the current player has won
    const checkWin = () => {
      return winningCombinations.some(combination =>
        combination.every(index => Gameboard.getBoard()[index] === currentPlayer.mark)
      );
    };
  
    return { startGame, playRound };
  })();
  