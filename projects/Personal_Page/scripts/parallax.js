/*
    Parallax effect extracted from:
    https://stackoverflow.com/questions/29240028/css-make-a-background-image-scroll-slower-than-everything-else
*/

const backgroundSpeed = 0.2; //from 0.0 to 1.0
const bodyElements = document.querySelectorAll("body");

function parallax() {
    Array.prototype.forEach.call(bodyElements, function(element) {
        const windowYOffset = window.pageYOffset;
        const backgroundPosition = "50% " + (windowYOffset * (1 - backgroundSpeed)) + "px";

        element.style.backgroundPosition = backgroundPosition;
    });
}