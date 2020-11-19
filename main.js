const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;

// Iteration 1
function drawGrid(x, y) {
  for (let x = 0; x <= width; x += 50) {
    for (let y = 0; y < height; y += 50) {
      ctx.lineWidth = 3;
      ctx.strokeRect(x, y, 50, 50);
      ctx.fillStyle = 'white';
      ctx.fillRect(x, y, 50, 50);
    }
  }
}

function drawEverything() {
  drawGrid();
  // drawPlayer()
  // drawTreasure()
}

drawEverything();

// Iteration 2: The Character Class
class Character {
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }
  moveUp() {
    if (this.row > 0) {
      this.row -= 1;
    }
  }
  moveRight() {
    if (this.col < 9) {
      this.col += 1;
    }
  }
  moveDown() {
    if (this.row < 9) {
      this.row += 1;
    }
  }
  moveLeft() {
    if (this.col > 0) {
      this.col -= 1;
    }
  }
}
