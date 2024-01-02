const skills = {
    frontend: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Bootstrap"
    ],
    backend: [
        "Spring Boot",
        "Node.js",
        "Express.js",
        "Laravel",
        "SQL",
        "Redis",
        "Docker"
    ],
    'more skills': [
        "Kotlin",
        "Java",
        "Maven",
        "Gradle",
        "IntelliJ IDEA",
        "VS Code",
        "Postman",
        "Git",
        "TypeScript",
        "Python 3",
        "C language"
    ]
};

const skillList = document.getElementById("skills").getElementsByTagName("ul")[0];

for (const category in skills) {
    const categoryLi = document.createElement('li');
    categoryLi.className = 'tech-skill-category';

    const categoryTitle = document.createElement('h4');
    categoryTitle.innerText = category.charAt(0).toUpperCase() + category.slice(1);
    categoryLi.appendChild(categoryTitle);

    const categoryItems = document.createElement('ol');
    categoryItems.className = 'tech-skill-category-list';
    categoryItems.style['padding-inline-start'] = '0px';
    categoryLi.appendChild(categoryItems);

    for (const item of skills[category]) {
        const li = document.createElement("li");
        li.innerHTML = item;
        li.className = "tech-skill-category-item";
        categoryItems.appendChild(li);
    }

    skillList.appendChild(categoryLi);
}