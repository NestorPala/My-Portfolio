/*
    Parallax effect extracted from:
    https://stackoverflow.com/questions/29240028/css-make-a-background-image-scroll-slower-than-everything-else
*/

const backgroundSpeed = 0.2; //from 0.0 to 1.0
const background = document.getElementById("background");

function parallax() {
    let widthVH = 37.5;
    let heightVW = 40;

    const documentWidth = window.innerWidth;
    const documentHeight = document.body.scrollHeight;
    const windowYOffset = window.pageYOffset;

    let speedFactor, widthFactor ,heightFactor;

    if (documentWidth < 500) {
        speedFactor = 0.43;
        widthFactor = 1.0;
        heightFactor = 5.9;    
    } else if (documentWidth < 1000) {
        speedFactor = 1;
        widthFactor = 1.3;
        heightFactor = 5;  
    } else {
        speedFactor = 0.6;
        widthFactor = 1.3; 
        heightFactor = 5;   
    }
    
    const newSpeed = backgroundSpeed * speedFactor;
    const newTop = windowYOffset * newSpeed;
    const newWidth = widthFactor * newSpeed * (widthVH * (windowYOffset / documentWidth));
    const newHeight = heightFactor * newSpeed * (heightVW * (windowYOffset / documentHeight));

    background.style.top = `-${newTop}px`;
    background.style.width = `calc(150% + ${widthVH + newWidth}vh)`;
    background.style.height = `calc(150% + ${heightVW + newHeight}vw)`;

}