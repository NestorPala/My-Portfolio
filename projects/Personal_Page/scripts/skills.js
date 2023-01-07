const skills = [
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

const skillList = document.getElementById("skills").getElementsByTagName("ul")[0];

for (const skill of skills) {
    const li = document.createElement("li");
    li.setAttribute("style", "display: inline-block; margin: 20px;");
    li.innerHTML = skill;
    skillList.appendChild(li);
}