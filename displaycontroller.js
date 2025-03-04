// Module to control the display and DOM interactions
const DisplayController = (() => {
    const boardContainer = document.getElementById('board-container');
    const form = document.getElementById('player-form');
    const startButton = document.getElementById('start-game');
    const resetButton = document.getElementById('reset');
    const resetGameButton = document.getElementById('reset-game');
    const player1Input = document.getElementById('player1');
    const player2Input = document.getElementById('player2');
    const resultDiv = document.getElementById('result');
  
    // Show the form when the start button is clicked
    startButton.addEventListener('click', () => {
      form.style.display = 'flex';
    });
  
    // Handle form submission to start the game
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const player1Name = player1Input.value.trim();
      const player2Name = player2Input.value.trim();
      if (player1Name && player2Name) {
        form.style.display = 'none';
        boardContainer.style.display = 'flex';
        GameController.startGame(player1Name, player2Name);
      } else {
        alert('Please enter names for both players.');
      }
    });
  
    // Show the form and hide the board when the reset button is clicked
    resetButton.addEventListener('click', () => {
      form.style.display = 'flex';
      boardContainer.style.display = 'none';
    });
  
    // Restart the game when the reset game button is clicked
    resetGameButton.addEventListener('click', () => {
      GameController.startGame(player1Input.value.trim(), player2Input.value.trim());
    });
  
    // Render the game board
    const render = () => {
      const board = Gameboard.getBoard();
      const boardDiv = boardContainer.querySelector('.board');
      boardDiv.innerHTML = '';
      board.forEach((cell, index) => {
        const cellElement = document.createElement('div');
        cellElement.classList.add('cell');
        cellElement.innerText = cell;
        cellElement.addEventListener('click', () => GameController.playRound(index));
        boardDiv.appendChild(cellElement);
      });
    };
  
    // Display the result message
    const displayResult = (message) => {
      resultDiv.innerText = message;
    };
  
    return { render, displayResult };
  })();
  