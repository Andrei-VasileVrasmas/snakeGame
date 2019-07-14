class Player {
  constructor(width, height, color, x, y, ctx) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.color = color;
    this.ctx = ctx;
    this.score = 0;
    this.blocks = [];
    this.lastMove = null;
    this.lastTailMove = null;
  }


  update() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);

    for (let i = 0; i < this.blocks.length; i += 1) {
      let posX = this.x;
      let posY = this.y;

      for (let b = 0; b <= i; b += 1) {
        if (this.blocks[b] === 'up') {
          posY += 20;
        }
        if (this.blocks[b] === 'down') {
          posY -= 20;
        }
        if (this.blocks[b] === 'left') {
          posX += 20;
        }
        if (this.blocks[b] === 'right') {
          posX -= 20;
        }
      }

      this.ctx.fillRect(posX, posY, this.width, this.height);
    }
  }


  addScore() {
    this.score += 1;
    document.getElementById('score').innerHTML = 'Score:' + this.score;

    if (this.blocks.length > 0) {
      this.blocks.push(this.lastTailMove);
    } else {
      this.blocks.push(this.lastMove);
    }
  }
}
