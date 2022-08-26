let skills = {
    "HTML" : 4,
    "CSS" : 3,
    "JS" : 3,
    "Node.js" : 2,
    "PHP" : 2,
    "MySQL" : 3,
    "Git" : 3,
    "Python 3" : 3,
    "C" : 3,
};


function listSkills() {
    let skillList = document.getElementById("skills").getElementsByTagName("ul")[0];

    for (let x in skills) {
        let li = document.createElement("li");
        li.innerHTML = x + "&nbsp;";

        for (let i=0; i<skills[x]; i++) {
            li.innerHTML += "⭐";
        }

        skillList.appendChild(li);
    }
}


listSkills();