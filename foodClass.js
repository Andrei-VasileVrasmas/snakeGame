
class Food {
  constructor(width, height, color, ctx) {
    this.width = width;
    this.height = height;
    this.x = Math.floor(Math.random() * 400);
    this.y = Math.floor(Math.random() * 400);
    this.color = color;
    this.ctx = ctx;
  }

  update() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
