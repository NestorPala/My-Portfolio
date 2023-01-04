const speed = 0.07;
const ms = 16;
const x_Limit = 10000;
let x = 1;

function moveBackground() {
    const bodyElements = document.querySelectorAll("body");

    bodyElements.forEach(function (element) {
        const newPosition = (x * speed) % x_Limit + "% 200px";
        element.style.backgroundPosition = newPosition;
    });

    x++;
}

setInterval(moveBackground, ms);