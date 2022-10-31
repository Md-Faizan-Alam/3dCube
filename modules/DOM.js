const cubeContainer = document.getElementById("cubeContainer");
const angle = document.getElementsByClassName("angle");

["red", "blue", "green", "yellow", "violet", "orange"].forEach((color) => {
    const square = document.createElement("div");
    square.setAttribute("class", "square");
    square.style.backgroundColor = color;
    cubeContainer.appendChild(square);
});

const square = document.getElementsByClassName("square");

export { angle, square };
