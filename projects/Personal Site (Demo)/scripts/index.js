let skills = {
    "HTML" : 4,
    "CSS" : 3,
    "JavaScript" : 3,
    "Node.js" : 2,
    "PHP" : 2,
    "MySQL" : 3,
    "Git" : 3,
    "Python 3" : 3,
    "C" : 3,
    "TypeScript" : 3,
    "Angular 2" : 2
};


function listSkills() {
    let skillList = document.getElementById("skills").getElementsByTagName("ul")[0];

    for (let x in skills) {
        let li = document.createElement("li");
        li.setAttribute("style", "display: inline-block; margin: 20px;");
        li.innerHTML = x;
        skillList.appendChild(li);
    }
}


listSkills();
