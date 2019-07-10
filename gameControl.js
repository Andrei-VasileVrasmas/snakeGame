const updateGameArea = () => {
  myGameArea.clear();
  foodObject.update();
  playerObject.update();
  ifFoodEaten(playerObject, foodObject);
}

const moveUp = () => {
  playerObject.y -= 20;
  if (playerObject.y < 0) {
    playerObject.y = 380;

  }
}

const moveDown = () => {
  playerObject.y += 20;
  if (playerObject.y >= 400) {
    playerObject.y = 0;
  }
}

const moveLeft = () => {
  playerObject.x -= 20;
  if (playerObject.x < 0) {
    playerObject.x = 380;

  }
}

const moveRight = () => {
  playerObject.x += 20;
  if (playerObject.x >= 400) {
    playerObject.x = 0;
  }
}

const checkKey = (e) => {
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
