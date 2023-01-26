const skills = [
    "HTML",
    "CSS",
    "Bootstrap",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PHP",
    "Laravel",
    "MySQL",
    "Git",
    "Python 3",
    "C",
    "TypeScript",
    "React",
    "Angular 2+",
];

const skillList = document.getElementById("skills").getElementsByTagName("ul")[0];

for (const skill of skills) {
    const li = document.createElement("li");
    li.innerHTML = skill;
    li.className = "tech-skill-item";
    skillList.appendChild(li);
}