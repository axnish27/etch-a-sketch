const grid = document.querySelector('#grid')
const n = 64 
const cellSize = 600 / n

grid.style.gridTemplateColumns = `repeat(${n},${cellSize}px)`;
grid.style.gridTemplateRows = `repeat(${n},${cellSize}px)`;

for(let i = 0; n * n > i; i++){
    const div = document.createElement('div');
    div.className = 'cell'
    grid.appendChild(div)
}

const cells = document.querySelectorAll('.cell');
cells.forEach(function(cell) {
  cell.addEventListener("mouseover", function() {
    cell.style.backgroundColor = "red";
  });
});

