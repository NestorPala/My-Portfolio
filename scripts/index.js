window.onload = function() {
    let a = document.querySelectorAll('.project-link');
    for (let i=0; i<a.length; i++) {
        if (a[i].id == "personal-page") continue;
        a[i].setAttribute('target', '_blank');
    }
};


// Moving background
const speed = 0.07;
const ms = 16;
let x = 1;

const moveBackground = function () { 
    document.querySelectorAll("body").forEach(function(element) {
        element.style.backgroundPosition = (x*speed)%10000 + "% 200px";
    });
    x++;
}

setInterval(moveBackground, ms);