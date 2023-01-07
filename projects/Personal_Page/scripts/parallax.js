/*
    Parallax effect extracted from:
    https://stackoverflow.com/questions/29240028/css-make-a-background-image-scroll-slower-than-everything-else
*/

const backgroundSpeed = 0.2; //from 0.0 to 1.0

function parallax(backgroundSpeed) {
    const bodyElements = document.querySelectorAll("body");

    Array.prototype.forEach.call(bodyElements, function(element) {
        const windowYOffset = window.pageYOffset;
        const backgroundPosition = "50% " + (windowYOffset * (1 - backgroundSpeed)) + "px";

        element.style.backgroundPosition = backgroundPosition;
    });
}

window.onscroll = () => {
    parallax(backgroundSpeed);
    goToTopButton.hidden = window.scrollY === 0; //should not be here
};