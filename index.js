let myGamePiece;


const myGameArea = {
  canvas: document.createElement("canvas"),
  start() {
    this.canvas.width = 400;
    this.canvas.height = 400;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.interval = setInterval(updateGameArea, 20);
  },
  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}


const startGame = () => {
  myGameArea.start();
  myGamePiece = new Square(20, 20, "red", 190, 190, myGameArea.context);
}


class Square {
  constructor(width, height, color, x, y, ctx) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.color = color;
    this.ctx = ctx;
  }

  update() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

const updateGameArea = () => {
  myGameArea.clear();
  myGamePiece.update();
}

const moveUp = () => {
  myGamePiece.y -= 20;
  if (myGamePiece.y <= 0){
myGamePiece.y = 370;

  }
}

const moveDown = () => {
  myGamePiece.y += 20;
  if (myGamePiece.y >= 390){
    myGamePiece.y = 10;
  }
}

const moveLeft = () => {
  myGamePiece.x -= 20;
  if(myGamePiece.x <=0){
    myGamePiece.x = 370;

  }
}

const moveRight = () => {
  myGamePiece.x += 20;
  if(myGamePiece.x >=390){
    myGamePiece.x = 10;
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
