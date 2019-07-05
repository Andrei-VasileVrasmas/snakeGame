const updateGameArea = () => {
  myGameArea.clear();
  foodObject.update();
  playerObject.update();
}

const moveUp = () => {
  playerObject.y -= 20;
  if (playerObject.y <= 0) {
    playerObject.y = 370;

  }
}

const moveDown = () => {
  playerObject.y += 20;
  if (playerObject.y >= 390) {
    playerObject.y = 10;
  }
}

const moveLeft = () => {
  playerObject.x -= 20;
  if (playerObject.x <= 0) {
    playerObject.x = 370;

  }
}

const moveRight = () => {
  playerObject.x += 20;
  if (playerObject.x >= 390) {
    playerObject.x = 10;
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
