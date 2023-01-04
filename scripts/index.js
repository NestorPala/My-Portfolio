window.onload = function () {
    let a = document.querySelectorAll('.project-link');
    for (let i = 0; i < a.length; i++) {
        if (a[i].id == "personal-page") continue;
        a[i].setAttribute('target', '_blank');
    }
};



// Moving background
const speed = 0.07;
const ms = 16;
let x = 1;

const moveBackground = function () {
    document.querySelectorAll("body").forEach(function (element) {
        element.style.backgroundPosition = (x * speed) % 10000 + "% 200px";
    });
    x++;
}

setInterval(moveBackground, ms);



// Setting multiple modals
let projectLinks = document.getElementsByClassName("pl");

let repoLinks = {
    "personal-page": "https://github.com/NestorPala/Web-Projects/tree/main/projects/Personal_Page",
    "todolist": "https://github.com/NestorPala/To-Do-List",
    "typing-practice": "https://github.com/NestorPala/Web-Projects/tree/main/projects/Typing_Practice",
    "e-commerce-app": "https://github.com/NestorPala/E-Commerce-App-Backend"
};

Array.prototype.forEach.call(projectLinks, element => {
    let modal = document.createElement("div");

    modal.innerHTML = `    
                        <!-- Modal -->
                        <div class="modal fade" id="` + element.id + `Modal" tabindex="-1" aria-labelledby="` + element.id + `ModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                <h5 class="modal-title" id="` + element.id + `ModalLabel">Open this project</h5>
                                <button type="button" id="modal-close-button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                Do you want to open the project or to review the code in its repository?
                                </div>
                                <div class="modal-footer">
                                <button type="button" id="open-project-button" class="btn">
                                <a href="` + element.href + `">Show me the app!</a>
                                </button>
                                <button type="button" id="visit-repo-button" class="btn">
                                <a href="` + repoLinks[element.id] + `">Visit Repo</a>
                                </button>
                                </div>
                            </div>
                            </div>
                        </div>`;

    document.body.appendChild(modal);
});
