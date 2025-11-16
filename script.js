const container = document.querySelector('#container');
const containerWidth = container.clientWidth;

// for (let i = 0; i < 16 * 16; i++) {
//     const item = document.createElement("div");
//     item.id = "grid-item";
//     item.style.width = `${containerWidth / 16}px`;
//     item.style.height = `${containerWidth / 16}px`;
//     item.addEventListener("mouseenter", (e) => {
//         e.target.style.backgroundColor = "black";
//     });

//     container.appendChild(item);
// };

function createGrid (size) {
    for (let i = 0; i < size * size; i++) {
        const item = document.createElement("div");
        item.id = "grid-item";
        item.style.width = `${containerWidth / 16}px`;
        item.style.height = `${containerWidth / 16}px`;
        item.addEventListener("mouseenter", (e) => {
            e.target.style.backgroundColor = "black";
        });

        container.appendChild(item);
    };
}


const gridSize = document.querySelector('#grid-size');
gridSize.addEventListener("click", () => {
    let input = prompt(`Enter a number (1-100)`);

    function checkValidNumber () {
        if (input > 0 && input < 101) {
            createGrid(input);
        } else {
            alert(`Invalid. Please try again.`);
        }
    }

    checkValidNumber();
});

createGrid(16);