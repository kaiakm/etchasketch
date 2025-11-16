const container = document.querySelector('#container');
const containerWidth = container.clientWidth;
const body = document.querySelector("body");

function createGrid (size) {
    for (let i = 0; i < size * size; i++) {
        const item = document.createElement("div");
        item.id = "grid-item";
        item.style.width = `${containerWidth / size}px`;
        item.style.height = `${containerWidth / size}px`;
        item.addEventListener("mouseenter", (e) => {
            e.target.style.backgroundColor = "#615b56";
        });

        container.appendChild(item);
    };
}

const gridSize = document.querySelector('#grid-size');
const newGrid = document.querySelector("#reset-grid");

function resetGrid () {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
};

newGrid.addEventListener("click", () => {
    resetGrid();
    createGrid(16);
});

gridSize.addEventListener("click", () => {
    let input = prompt(`Enter a number (1-100)`);

    function checkValidNumber () {
        if (input > 0 && input < 101) {
            resetGrid();
            createGrid(input);
        } else {
            alert(`Invalid. Please try again.`);
        }
    };

    checkValidNumber();
});

createGrid(16);