//board
var blockSize = 25;
var rows = 20;
var cols = 20;
var board;
var context;
var score;

//snake head location
var snakeHeadX = blockSize * 5;
var snakeHeadY = blockSize * 5;

var velocityX = 0;
var velocityY = 0;

var numEatenFruit = 0;
//snake body
var snakeBody = [];

var gameOver = false;

// var updateTime = 200;

window.onload = function () {
  snakeGame();
};

function snakeGame() {
  board = document.getElementById("board");
  board.height = rows * blockSize;
  board.width = cols * blockSize;
  context = board.getContext("2d");
  placeFood();
  document.addEventListener("keyup", changeDirection);

  // setTimeout(update, updateTime);
  setInterval(update, 200); //200ms

  console.log(numEatenFruit);
}

function update() {
  if (gameOver) {
    return;
  }
  //draw board
  context.fillStyle = "black";
  context.fillRect(0, 0, board.width, board.height);

  //check if eat the food
  if (snakeHeadX == foodX && snakeHeadY == foodY) {
    snakeBody.push([foodX, foodY]);
    placeFood();
    numEatenFruit++;
    score = document.getElementById("score");
    score.innerText = "Score:" + numEatenFruit;
    // updateTime = 1000 / (200 - numEatenFruit);
    // setTimeout(update, updateTime);
  }

  //update the body
  for (let i = snakeBody.length - 1; i > 0; i--) {
    snakeBody[i] = snakeBody[i - 1];
  }
  if (snakeBody.length) {
    snakeBody[0] = [snakeHeadX, snakeHeadY];
  }

  //draw food
  context.fillStyle = "red";
  context.fillRect(foodX, foodY, blockSize, blockSize);

  //draw snake head
  context.fillStyle = "#f0f0f0";
  snakeHeadX += velocityX * blockSize;
  snakeHeadY += velocityY * blockSize;
  context.fillRect(snakeHeadX, snakeHeadY, blockSize - 1, blockSize - 1);

  //draw the snakebody
  context.fillStyle = "#999999";
  for (let i = 0; i < snakeBody.length; i++) {
    context.fillRect(
      snakeBody[i][0],
      snakeBody[i][1],
      blockSize - 1,
      blockSize - 1
    );
  }

  //game over conditions
  //check wall collision
  if (
    snakeHeadX < 0 ||
    snakeHeadX > cols * blockSize ||
    snakeHeadY < 0 ||
    snakeHeadY > rows * blockSize
  ) {
    gameOver = true;
    alert("Game Over");
  }

  //check body collision
  for (let i = 0; i < snakeBody.length; i++) {
    if (snakeHeadX == snakeBody[i][0] && snakeHeadY == snakeBody[i][1]) {
      gameOver = true;
      alert("Game Over");
    }
  }
}

function changeDirection(keyInterrupt) {
  if (keyInterrupt.code == "ArrowUp" && velocityY != 1) {
    velocityX = 0;
    velocityY = -1;
  } else if (keyInterrupt.code == "ArrowDown" && velocityY != -1) {
    velocityX = 0;
    velocityY = 1;
  } else if (keyInterrupt.code == "ArrowLeft" && velocityX != 1) {
    velocityX = -1;
    velocityY = 0;
  } else if (keyInterrupt.code == "ArrowRight" && velocityX != -1) {
    velocityX = 1;
    velocityY = 0;
  }
}

function placeFood() {
  foodX = Math.floor(cols * Math.random()) * blockSize;
  foodY = Math.floor(rows * Math.random()) * blockSize;
}
