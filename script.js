const container = document.querySelector('#container');

const numRows = 16;
const numCols = 16;

for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
        const gridSquare = document.createElement('div');
        gridSquare.setAttribute('id', 'grid-square');
        container.appendChild(gridSquare);
    }
}