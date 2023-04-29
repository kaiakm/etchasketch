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

const btn = document.querySelector('.clear');

btn.addEventListener('click', () => {
    cells.forEach(cell => {
        cell.style.cssText = 'background: white';
    });
});