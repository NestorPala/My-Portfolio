const projects = [
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
        id: "products-app",
        href: "https://products-app-7ssx.onrender.com",
        buttonText: "Products App",
        repoLink: "https://github.com/NestorPala/Products-App",
        deployed: true,
        "tools-used": [
            "html", "css", "javascript", "angular", "typescript", "node", "expressjs", "mongodb"
        ] 
    },
    {
        id: "notes-app",
        href: "https://notes-app-81r1.onrender.com",
        buttonText: "Notes App",
        repoLink: "https://github.com/NestorPala/Notes-App",
        deployed: true,
        "tools-used": [
            "html", "css", "javascript", "react", "node", "expressjs", "mongodb"
        ]
    },
    {
        id: "about-me",
        href: "projects/About_Me/",
        buttonText: `Personal page`,
        repoLink: "https://github.com/NestorPala/My-Portfolio/tree/main/projects/About_Me",
        deployed: true,
        "tools-used": [
            "html", "css", "javascript", "bootstrap"
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

            const newProject = document.createElement("a");
            newProject.className = "project-link";
            newProject.id = project["id"];
            newProject.href = isDeployed(project) ? project["href"] : noDeployPage;
            newProject.dataset.bsToggle = "modal";
            newProject.dataset.bsTarget = `#${project["id"]}Modal`;

                const newProjectText = document.createElement("div");
                newProjectText.style.display = "flex";
                newProjectText.style.justifyContent = "center";
                newProjectText.style.alignItems = "center";
                newProjectText.style.height = "100%";
                newProjectText.style.width = "100%";
                newProjectText.innerHTML = project["buttonText"];
            
            newProject.appendChild(newProjectText);
        
        projectList.appendChild(newProject);
    }
}