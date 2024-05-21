//1) Define the required variables used to track the state of the game.

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.

/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

/*---------------------------- Variables (state) ----------------------------*/
let board = []; //state of the squares on the board
let turn = ""; // track player turns
let winner = ""; // represent if anyone has won yet
let tie = ""; // indicates the game has ended in a tie

/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll(".sqr");
const messageEl = document.getElementById("message");
const resetBtnEl = document.getElementById("reset");

/*-------------------------------- Functions --------------------------------*/
function placePiece(index) {
  board[index] = turn;
}

function init() {
  console.log("Welcome to Tic Tac Toe!");
  board = ["", "", "", "", "", "", "", "", ""];
  turn = "X";
  winner = false;
  tie = false;
  render();
}

function render() {
  updateBoard();
  updateMessage();
}

function updateBoard() {
  board.forEach((element, index) => {
    element = squareEls[index].textContent;
  });
}

function updateMessage(winner, tie) {
  if (winner === false && tie === false) {
    return `Current turn: ${turn}`;
  } else if (winner === false && tie === true) {
    return "We have a tie";
  }
}

function handleClick(event) {
  const squareId = event.target.id;
  const index = squareId.split("-")[1];
  const squareIndex = parseInt(index, 10);
  placePiece(squareIndex);
  checkForWinner();
  checkForTie();
  switchPlayerTurn();
  render();
  if (board[squareIndex] === "X" || board[squareIndex] === "0") {
    return;
  }
}

function checkForWinner() {
  for (let i = 0; i < winningCombos.length; i++) {
    const [a, b, c] = winningCombos[i];
    if (board[a] != "" && board[a] == board[b] && board[a] == board[c]) {
      winner = true;
    }
  }
}

function checkForTie() {
  if (winner) {
    return;
  }
  if (squareEl === "") {
    tie = false;
  } else {
    tie = true;
  }
}

function switchPlayerTurn() {
  if (winner) {
    return;
  }
  if ((winner = false)) {
    if (turn === "X") {
      turn = "O";
    } else {
      turn = "X";
    }
  }
}
/*----------------------------- Event Listeners -----------------------------*/

squareEls.forEach((squareEl) => {
  squareEl.addEventListener("click", handleClick());
});

resetBtnEl.forEach((btnEl) => {
  btnEl.addEventListener("click", init());
});
