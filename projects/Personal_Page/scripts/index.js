let skills = [
    "HTML",
    "CSS",
    "Bootstrap 5",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MySQL",
    "Git",
    "Python 3",
    "C",
    "TypeScript",
    "Angular 2"
];

let skillList = document.getElementById("skills").getElementsByTagName("ul")[0];

for (let x of skills) {
    let li = document.createElement("li");
    li.setAttribute("style", "display: inline-block; margin: 20px;");
    li.innerHTML = x;
    skillList.appendChild(li);
}

let goToTopButton = document.getElementById("go-to-top");
goToTopButton.hidden = true;

goToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});



/*
    Parallax effect extracted from:
    https://stackoverflow.com/questions/29240028/css-make-a-background-image-scroll-slower-than-everything-else
*/

(function () {
    let parallax = document.querySelectorAll("body");
    let speed = 0.5;

    window.onscroll = function () {
        [].slice.call(parallax).forEach(function (element) {
            let windowYOffset = window.pageYOffset;
            let elBackgroundPos = "50% " + (windowYOffset * speed) + "px";

            element.style.backgroundPosition = elBackgroundPos;

            /////

            if (window.scrollY !== 0) {
                goToTopButton.hidden = false;
            } else {
                goToTopButton.hidden = true;
            }
        });
    };
})();

window.onload = function () {
    let a = document.querySelectorAll('.resume-link');
    for (let i = 0; i < a.length; i++) {
        a[i].setAttribute('target', '_blank');
    }
};


const pageSections = [
    {
        sectionButtonId: "section-education-button", 
        sectionElementId: "education"
    },
    {
        sectionButtonId: "section-experience-button", 
        sectionElementId: "work-experience"
    },
    {
        sectionButtonId: "section-skills-button", 
        sectionElementId: "skills"
    },
    {
        sectionButtonId: "section-hobbies-button", 
        sectionElementId: "hobbies"
    },
    {
        sectionButtonId: "section-resume-button", 
        sectionElementId: "resume"
    },
];

pageSections.forEach(function(section) {
    const sectionButton = document.getElementById(section["sectionButtonId"]);
    const sectionElement = document.getElementById(section["sectionElementId"]);

    sectionButton.addEventListener("click", function(event) {
        sectionElement.scrollIntoView({
            behavior: "smooth"
        });
    })
});
