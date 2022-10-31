const setZ = (r) => (r < 0 ? 1 : 2);

function cos(t) {
    return Math.cos((t * Math.PI) / 180);
}
function sin(t) {
    return Math.sin((t * Math.PI) / 180);
}

export { setZ, sin, cos };

