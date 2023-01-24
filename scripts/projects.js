const projects = [
    {
        id: "personal-page",
        href: "projects/Personal_Page/",
        buttonText: "About me",
        repoLink: "https://github.com/NestorPala/My-Portfolio/tree/main/projects/Personal_Page",
        deployed: true,
        "tools-used": [
            "html", "css", "javascript", "bootstrap"
        ]
    },
    {
        id: "todo-list",
        href: "projects/To-Do_List/",
        buttonText: "To-Do List",
        repoLink: "https://github.com/NestorPala/To-Do-List",
        deployed: true,
        "tools-used": [
            "html", "css", "javascript", "angular", "typescript"
        ]
    },
    {
        id: "typing-practice",
        href: "projects/Typing_Practice/",
        buttonText: "Typing Practice",
        repoLink: "https://github.com/NestorPala/My-Portfolio/tree/main/projects/Typing_Practice",
        deployed: true,
        "tools-used": [
            "html", "css", "javascript",
        ]
    },
    {
        id: "product-list",
        href: "https://products-app-7ssx.onrender.com",
        buttonText: "Product List",
        repoLink: "https://github.com/NestorPala/Products-App",
        deployed: true,
        "tools-used": [
            "html", "css", "javascript", "angular", "typescript", "node", "express", "mongodb"
        ] 
    },
    {
        id: "notes-app",
        href: "https://notes-app-81r1.onrender.com",
        buttonText: "Notes App (React)",
        repoLink: "https://github.com/NestorPala/Notes-App",
        deployed: true,
        "tools-used": [
            "html", "css", "javascript", "react", "node", "express", "mongodb"
        ]
    },
];

const projectWithId = id => projects.filter(project => project["id"] === id)[0];

const repoLinks = {};
projects.map(project => repoLinks[project["id"]] = project["repoLink"]);
    
function addProjects() {
    const noDeployPage = "messages/no-deploy.html";
    const isDeployed = project => project["deployed"] === true;

    for (const project of projects) {
        const projectList = document.getElementById("project-list");
        const newProjectElement = document.createElement("a");
    
        newProjectElement.className = "project-link";
        newProjectElement.id = project["id"];
        newProjectElement.href = isDeployed(project) ? project["href"] : noDeployPage;
        newProjectElement.dataset.bsToggle = "modal";
        newProjectElement.dataset.bsTarget = `#${project["id"]}Modal`;
        newProjectElement.innerText = project["buttonText"];
    
        projectList.appendChild(newProjectElement);
    }
}