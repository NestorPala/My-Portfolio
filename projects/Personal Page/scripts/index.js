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


function listSkills() {
    let skillList = document.getElementById("skills").getElementsByTagName("ul")[0];

    for (let x of skills) {
        let li = document.createElement("li");
        li.setAttribute("style", "display: inline-block; margin: 20px;");
        li.innerHTML = x;
        skillList.appendChild(li);
    }
}


listSkills();
