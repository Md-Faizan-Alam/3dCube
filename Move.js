// Making variables to access the elements and the input values
let slider= document.getElementById("container");
let angle = document.getElementsByClassName("angle");
let square = document.getElementsByClassName("square");
let x,y,z,n=6;
// Making arrays of attributes to be assigned to the squares
let colors = ["red", "blue", "green", "yellow", "violet", "orange"];
let seeThrough = ["1", "1", "1", "1", "1", "1"];
// Assigning the above mentioned attributes
function defaultStyle(){
    for(let i=0;i<n;++i){
        square[i].style.backgroundColor= colors[i];
        square[i].style.opacity= seeThrough[i];
    }
}
// Dynamically aligning the components to the center
function center(){
    let hShift = screen.width;
    if(hShift>400){
        hShift = (hShift/2)-80;
    }
    else{
        hShift = (hShift/2)-40;
    }
    for(let i=0 ; i<n ; ++i){
        square[i].style.left = hShift+"px";
    }
    slider.style.left= (hShift-50)+"px";
}
// Function to produce integral values for z-index
function setZ(r){
    return(2+Math.floor(r*4));
}
function cos(t){
    return(Math.cos(t*(Math.PI)/180));
}
function sin(t){
    return(Math.sin(t*(Math.PI)/180));
}
// Assinging the required transformation to the respective squares
function orient(){
    x = angle[0].value;
    y = angle[1].value;
    z = angle[2].value;
    square[0].style.zIndex = setZ(cos(x)*cos(y));
    square[1].style.zIndex = setZ(-cos(x)*cos(y));
    square[2].style.zIndex = setZ(sin(y));
    square[3].style.zIndex = setZ(-sin(y));
    square[4].style.zIndex = setZ(sin(x)*cos(y));
    square[5].style.zIndex = setZ(-sin(x)*cos(y));
    square[0].style.transform ="rotateZ("+z+"deg) rotateY("+y+"deg) rotateX("+x+"deg)";
    square[1].style.transform ="rotateZ("+z+"deg) rotateY("+y+"deg) rotateX(180deg) rotateX("+x+"deg)";
    square[2].style.transform ="rotateY(-90deg) rotateX("+z+"deg) rotateY("+y+"deg) rotateZ("+(-x)+"deg)";
    square[3].style.transform ="rotateY(90deg) rotateX("+(-z)+"deg) rotateY("+y+"deg) rotateZ("+x+"deg)";
    square[4].style.transform ="rotateX(-90deg) rotateY("+(-z)+"deg) rotateZ("+y+"deg) rotateX("+x+"deg)";
    square[5].style.transform ="rotateX(90deg) rotateY("+z+"deg) rotateZ("+y+"deg) rotateX("+(-x)+"deg)";
}
// Executing all the functions defined above
defaultStyle();
setInterval(center, 1);
setInterval(orient,1);
