const projectLinks = document.getElementsByClassName("project-link");

const repoLinks = {
    "personal-page": "https://github.com/NestorPala/Web-Projects/tree/main/projects/Personal_Page",
    "todolist": "https://github.com/NestorPala/To-Do-List",
    "typing-practice": "https://github.com/NestorPala/Web-Projects/tree/main/projects/Typing_Practice",
    "e-commerce-app": "https://github.com/NestorPala/Products-App"
};

Array.prototype.forEach.call(projectLinks, element => {
    const modal = document.createElement("div");
    const target = (element.id !== 'personal-page') ? 'target="_blank"' : null;
    const href = repoLinks[element.id];
    const messages = [
        "Open this project",
        "Do you want to open the project or to review the code in its repository?",
        "Show me the app!",
        "Visit Repo"
    ];

    modal.innerHTML = `    
        <!-- Modal -->
        <div 
        class="modal fade" 
        id="${element.id}Modal" 
        tabindex="-1" 
        aria-labelledby="${element.id}ModalLabel" 
        aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="${element.id}ModalLabel">
                            ${messages[0]}
                        </h5>
                        <button 
                        type="button" 
                        id="modal-close-button" 
                        class="btn-close" 
                        data-bs-dismiss="modal" 
                        aria-label="Close">
                        </button>
                    </div>
                    <div class="modal-body">
                        ${messages[1]}
                    </div>
                    <div class="modal-footer">
                        <a ${target} href="${element.href}">
                            <button type="button" id="open-project-button" class="btn">
                                ${messages[2]}
                            </button>
                        </a>
                        <a href="${href}">
                            <button type="button" id="visit-repo-button" class="btn">
                                ${messages[3]}
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>`
    ;

    document.body.appendChild(modal);
});