
let slider = document.getElementsByClassName("slider");
let face = document.getElementsByClassName("face");
function sin(a){
    return(Math.sin((a*Math.PI)/180));
}
function cos(a){
    return(Math.cos((a*Math.PI)/180));
}
function setZ(r){
    return (2+Math.floor(r*4));
}
function move(){
    let x=slider[0].value;
    let y=slider[1].value;
    let z=slider[2].value;
    let r1 = (cos(x)*cos(y));
    let r2 = sin(y);
    let r3 = (sin(x)*cos(y));
    face[0].style.zIndex = setZ(r1);
    face[1].style.zIndex = setZ(-r1);
    face[2].style.zIndex = setZ(r2);
    face[3].style.zIndex = setZ(-r2);
    face[4].style.zIndex = setZ(r3);
    face[5].style.zIndex = setZ(-r3);
    face[0].style.transform ="rotateZ("+z+"deg) rotateY("+y+"deg) rotateX("+x+"deg)";
    face[1].style.transform ="rotateZ("+z+"deg) rotateY("+y+"deg) rotateX(180deg) rotateX("+x+"deg)";
    face[2].style.transform ="rotateY(-90deg) rotateX("+z+"deg) rotateY("+y+"deg) rotateZ("+(-x)+"deg)";
    face[3].style.transform ="rotateY(90deg) rotateX("+(-z)+"deg) rotateY("+y+"deg) rotateZ("+x+"deg)";
    face[4].style.transform ="rotateX(-90deg) rotateY("+(-z)+"deg) rotateZ("+y+"deg) rotateX("+x+"deg)";
    face[5].style.transform ="rotateX(90deg) rotateY("+z+"deg) rotateZ("+y+"deg) rotateX("+(-x)+"deg)";
}
setInterval(move,1);