function addModals() {
    const projectLinks = document.getElementsByClassName("project-link");

    Array.prototype.forEach.call(projectLinks, element => {
        const modal = document.createElement("div");
        const target = (element.id === 'about-me' 
                        || Array.from(element.classList).includes('no-deploy')) 
                        ? null : 'target="_blank"';
        const href = repoLinks[element.id];

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
                                Project: &nbsp; 
                                <span style="font-weight: bold;">${element.innerText}</span>
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
                            <div class="row">
                                <div class="col-6">
                                    <p style="font-size: 1.25rem; margin-bottom: 10px;">Tools used:</p>
                                </div>
                                <div class="col-6">
                                    <p id="${element.id}-tool-name" style="font-style: italic; margin-bottom: 0px; margin-top: 3px"></p>
                                </div>
                            </div>
                            <div class="row">
                                <div id="project-tools-used">
                                    <!-- For example: React, Angular, Node, etc. -->
                                    ${getProjectToolsHTML(element)}
                                </div>
                            </div>
                            <hr style="margin-top: 1vh; margin-bottom: 1vh;">
                            <div class="row">
                                Do you want to open the app or to review its source code in the repository?
                            </div>
                        </div>
                        <div class="modal-footer">
                            <a ${target} href="${element.href}">
                                <button type="button" id="open-project-button" class="btn">
                                    Show me the app!
                                </button>
                            </a>
                            <a target="_blank" href="${href}">
                                <button type="button" id="visit-repo-button" class="btn">
                                    Visit Repo
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    
        document.body.appendChild(modal);
    });

    Array.prototype.forEach.call(projectLinks, element => {
        const project = projectWithId(element.id);
        const toolsUsed = project["tools-used"];

        Array.prototype.forEach.call(toolsUsed, toolName => {
            const toolContainer = document.getElementById(`${element.id}-${toolName}-tool-container`);
            const toolNameElement = document.getElementById(`${element.id}-tool-name`);
    
            toolContainer.onmouseover = function(event) {
                toolNameElement.innerText = toolContainer.className;
                toolNameElement.hidden = false;
            };
            toolContainer.onmouseleave = function(event) {
                toolNameElement.innerText = '';
                toolNameElement.hidden = true;
            };
        })
    });
}

function getProjectToolsHTML(projectElement) {
    const capitalize = str => str[0].toUpperCase() + str.substring(1);

    const getToolImgHTML = toolName => `
        <a 
        id="${projectElement.id}-${toolName}-tool-container"
        class="${toolName}"
        href="https://www.google.com/search?q=${toolName}" 
        target="_blank"
        style="color: rgba(0, 0, 0, 0);"
        >
            <img 
            src="images/tool-icons/${toolName}.png" 
            style="margin: 10px;"
            width="50" 
            alt="${toolName}-logo"
            title="${capitalize(toolName)}"
            >
        </a>
    `;

    const project = projectWithId(projectElement.id);
    const toolsUsed = project["tools-used"];

    let projectToolsHTML = ``;
    toolsUsed.forEach(tool => projectToolsHTML += getToolImgHTML(tool));

    return projectToolsHTML;
}