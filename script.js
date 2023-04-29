const container = document.querySelector('.container');

for (let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    
    for (j = 0; j < 16; j++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        row.appendChild(cell);
    };

    container.appendChild(row);
};

const cells = document.querySelectorAll('.cell');

cells.forEach(cell => {
    cell.addEventListener('mouseenter', () => {
        cell.style.cssText = 'background: gray';
    });
});

const newBtn = document.querySelector('.new');

const clearBtn = document.querySelector('.clear');

clearBtn.addEventListener('click', () => {
    const allCells = document.querySelectorAll('.cell, .new-cell');
    allCells.forEach(cell => {
        cell.style.cssText = 'background: white';
    });
});

function createGrid(size) {
    container.innerHTML = '';
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for(let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('row');

        for (let j = 0; j < size; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.classList.add('new-cell');
            cell.style.cssText = 'background: white';
            cell.addEventListener('mouseenter', () => {
                cell.style.cssText = 'background: gray';
            });

            row.appendChild(cell);
        };

        container.appendChild(row);
    };
};

newBtn.addEventListener('click', () => {
    const gridSize = prompt('grid size (100 max):');

    if (gridSize <= 100 && gridSize > 0) {
        createGrid(gridSize);
    } else if (gridSize === null) {

    } else {
        alert('a number between 1 and 100 thank you');
    };
});