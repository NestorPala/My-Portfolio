const speed = 0.07;
const ms = 16;
const x_Limit = 10000;
let x = 1;
let moveInterval;

function move() {
    const bodyElements = document.querySelectorAll("body");

    bodyElements.forEach(function (element) {
        const newPosition = (x * speed) % x_Limit + "% 200px";
        element.style.backgroundPosition = newPosition;
    });

    x++;
}

function moveBackground(on = true) {
    if(on === true) {
        moveInterval = setInterval(move, ms);
    } else {
        clearInterval(moveInterval);
    }
}

window.onload = () => moveBackground(true);