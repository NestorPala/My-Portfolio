const projects = [
    {
        id: "personal-page",
        href: "projects/Personal_Page/",
        buttonText: "About me",
        repoLink: "https://github.com/NestorPala/Web-Projects/tree/main/projects/Personal_Page"
    },
    {
        id: "todo-list",
        href: "projects/To-Do_List/",
        buttonText: "To-Do List",
        repoLink: "https://github.com/NestorPala/To-Do-List"
    },
    {
        id: "typing-practice",
        href: "projects/Typing_Practice/",
        buttonText: "Typing Practice",
        repoLink: "https://github.com/NestorPala/Web-Projects/tree/main/projects/Typing_Practice"
    },
    {
        id: "product-list",
        href: "https://products-app-7ssx.onrender.com",
        buttonText: "Product List",
        repoLink: "https://github.com/NestorPala/Products-App" 
    },
    {
        id: "notes-app",
        href: "https://notes-app-81r1.onrender.com",
        buttonText: "Notes App (React)",
        repoLink: "https://github.com/NestorPala/Notes-App" 
    },
];

const repoLinks = {};
projects.map(project => repoLinks[project["id"]] = project["repoLink"]);
    
function addProjects() {
    for (const project of projects) {
        const projectList = document.getElementById("project-list");
        const newProjectElement = document.createElement("a");
    
        newProjectElement.className = "project-link";
        newProjectElement.id = project["id"];
        newProjectElement.href = project["href"];
        newProjectElement.dataset.bsToggle = "modal";
        newProjectElement.dataset.bsTarget = `#${project["id"]}Modal`;
        newProjectElement.innerText = project["buttonText"];
    
        projectList.appendChild(newProjectElement);
    }
}