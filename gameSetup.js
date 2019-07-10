let playerObject;
let foodObject;

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
  playerObject = new Player(20, 20, 'red', 180, 180, myGameArea.context);
  foodObject = new Food(20, 20, 'green', myGameArea.context);
}
