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
            e.target.style.backgroundColor = "black";
        });

        container.appendChild(item);
    };
}

const gridSize = document.querySelector('#grid-size');
const resetGrid = document.querySelector("#reset-grid");

resetGrid.addEventListener("click", () => {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    createGrid(16);
})

gridSize.addEventListener("click", () => {
    let input = prompt(`Enter a number (1-100)`);

    function checkValidNumber () {
        if (input > 0 && input < 101) {
            createGrid(input);
        } else {
            alert(`Invalid. Please try again.`);
        }
    };

    eraseCurrentGrid();
    checkValidNumber();
    createGrid();
});

createGrid(16);