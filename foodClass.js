class Food {
  constructor(width, height, color, ctx) {
    this.width = width;
    this.height = height;
    this.x = pickFoodPosition(playerObject.x);
    this.y = pickFoodPosition(playerObject.y);
    this.color = color;
    this.ctx = ctx;
  }

  update() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

const pickFoodPosition = (playerPosition) => {
  let foodPosition = null;

  do {
    foodPosition = Math.floor(Math.random() * 400);
  } while (Math.abs(playerPosition - foodPosition) < 20);

  return foodPosition;
}
