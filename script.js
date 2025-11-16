const container = document.querySelector('#container');
const containerWidth = container.clientWidth;

for (let i = 0; i < 16 * 16; i++) {
    const item = document.createElement("div");
    item.id = "grid-item";
    item.style.width = `${containerWidth / 16}px`;
    item.style.height = `${containerWidth / 16}px`;
    item.addEventListener("mouseenter", (e) => {
        e.target.style.backgroundColor = "black";
    });

    container.appendChild(item);
};