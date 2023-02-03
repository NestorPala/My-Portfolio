const speed = 0.07;
const ms = 16;
const limitX = 10000;
let x = 1;
let moveInterval;
const toggleAnimationButton = document.getElementById("toggle-animation-button");
let animationEnabled = true;

function moveBackground(on = true) {
    const bodyElements = document.querySelectorAll("body");

    const move = () => bodyElements.forEach((element) => {
        const positionX = (++x * speed) % limitX + '%';
        const positionY = "200px";
        element.style.backgroundPosition = `${positionX} ${positionY}`;
    });

    if(on === true) {
        if (animationEnabled === true) {
            moveInterval = setInterval(move, ms);
        }
    } else {
        clearInterval(moveInterval);
    }
}

toggleAnimationButton.onclick = function(event) {
    animationEnabled = !animationEnabled;
    moveBackground(animationEnabled);
};