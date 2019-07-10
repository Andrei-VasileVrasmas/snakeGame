class Player {
  constructor(width, height, color, x, y, ctx) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.color = color;
    this.ctx = ctx;
    this.score = 0;
  }

  update() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  addScore() {
    this.score += 1;
    document.getElementById('score').innerHTML = 'Score:' + this.score;
  }
}
