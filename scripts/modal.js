const projectLinks = document.getElementsByClassName("project-link");

const repoLinks = {
    "personal-page": "https://github.com/NestorPala/Web-Projects/tree/main/projects/Personal_Page",
    "todolist": "https://github.com/NestorPala/To-Do-List",
    "typing-practice": "https://github.com/NestorPala/Web-Projects/tree/main/projects/Typing_Practice",
    "e-commerce-app": "https://github.com/NestorPala/E-Commerce-App-Backend"
};

Array.prototype.forEach.call(projectLinks, element => {
    const modal = document.createElement("div");

    modal.innerHTML = `    
        <!-- Modal -->
        <div class="modal fade" id="${element.id}Modal" tabindex="-1" aria-labelledby="${element.id}ModalLabel" aria-hidden="true">
            <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title" id="${element.id}ModalLabel">Open this project</h5>
                <button type="button" id="modal-close-button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                Do you want to open the project or to review the code in its repository?
                </div>
                <div class="modal-footer">
                <button type="button" id="open-project-button" class="btn">
                <a ${(element.id !== 'personal-page') ? 'target="_blank"' : null} href="${element.href}">Show me the app!</a>
                </button>
                <button type="button" id="visit-repo-button" class="btn">
                <a href="${repoLinks[element.id]}">Visit Repo</a>
                </button>
                </div>
            </div>
            </div>
        </div>`
    ;

    document.body.appendChild(modal);
});