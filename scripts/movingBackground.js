const speed = 0.07;
const ms = 16;
const limitX = 10000;
let x = 1;
let moveInterval;

function moveBackground(on = true) {
    const bodyElements = document.querySelectorAll("body");

    const move = () => bodyElements.forEach((element) => {
        const positionX = (++x * speed) % limitX + '%';
        const positionY = "200px";
        element.style.backgroundPosition = `${positionX} ${positionY}`;
    });

    if(on === true) {
        moveInterval = setInterval(move, ms);
    } else {
        clearInterval(moveInterval);
    }
}