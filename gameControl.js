const updateGameArea = () => {
  myGameArea.clear();
  ifFoodEaten(playerObject, foodObject);
  foodObject.update();
  playerObject.update();
}

const moveUp = () => {
  playerObject.lastMove = 'up';
  playerObject.blocks.unshift('up');
  playerObject.blocks.pop();

  playerObject.y -= 20;
  if (playerObject.y < 0) {
    playerObject.y = 380;
  }
}

const moveDown = () => {
  playerObject.lastMove = 'down';
  playerObject.blocks.unshift('down');
  playerObject.blocks.pop();

  playerObject.y += 20;
  if (playerObject.y >= 400) {
    playerObject.y = 0;
  }
}

const moveLeft = () => {
  playerObject.lastMove = 'left';
  playerObject.blocks.unshift('left');
  playerObject.blocks.pop();

  playerObject.x -= 20;
  if (playerObject.x < 0) {
    playerObject.x = 380;
  }
}

const moveRight = () => {
  playerObject.lastMove = 'right';
  playerObject.blocks.unshift('right');
  playerObject.blocks.pop();

  playerObject.x += 20;
  if (playerObject.x >= 400) {
    playerObject.x = 0;
  }
}

const checkKey = (e) => {
  playerObject.lastY = playerObject.y;
  playerObject.lastX = playerObject.x;
  playerObject.lastTailMove = playerObject.blocks[playerObject.blocks.length - 1];

  e = e || window.event;

  if (e.keyCode === 37) {
    moveLeft();
  }

  if (e.keyCode === 39) {
    moveRight();
  }

  if (e.keyCode === 38) {
    moveUp();
  }

  if (e.keyCode === 40) {
    moveDown();
  }
}

document.onkeydown = checkKey;
