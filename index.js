import { angle, square } from "./modules/DOM.js";
import agitate from "./modules/Pond.js";
import { cos, setZ, sin } from "./modules/Utilities.js";

// Assinging the required transformation to the respective squares
function orient() {
    const [x, y, z] = [0, 1, 2].map((i) => parseFloat(angle[i].value));

    square[0].style.zIndex = setZ(cos(x) * cos(y));
    square[1].style.zIndex = setZ(-cos(x) * cos(y));
    square[2].style.zIndex = setZ(sin(y));
    square[3].style.zIndex = setZ(-sin(y));
    square[4].style.zIndex = setZ(sin(x) * cos(y));
    square[5].style.zIndex = setZ(-sin(x) * cos(y));

    square[0].style.transform = `rotateZ(${z}deg) rotateY(${y}deg) rotateX(${x}deg)`;
    square[1].style.transform = `rotateZ(${z}deg) rotateY(${y}deg) rotateX(180deg) rotateX(${x}deg)`;
    square[2].style.transform = `rotateY(-90deg) rotateX(${z}deg) rotateY(${y}deg) rotateZ(${-x}deg)`;
    square[3].style.transform = `rotateY(90deg) rotateX(${-z}deg) rotateY(${y}deg) rotateZ(${x}deg)`;
    square[4].style.transform = `rotateX(-90deg) rotateY(${-z}deg) rotateZ(${y}deg) rotateX(${x}deg)`;
    square[5].style.transform = `rotateX(90deg) rotateY(${z}deg) rotateZ(${y}deg) rotateX(${-x}deg)`;
}

// Updating the orientation
agitate(orient, 25, 1000);
