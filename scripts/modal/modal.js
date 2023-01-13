function addModals() {
    const projectLinks = document.getElementsByClassName("project-link");

    Array.prototype.forEach.call(projectLinks, element => {
        const modal = document.createElement("div");
        const target = (element.id === 'personal-page' 
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
                                <span style="font-weight: bold;">${element.innerHTML}</span>
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
                                <p>Tools used:</p>
                                <div id="project-tools-used">
                                    <!-- For example: React, Angular, Node, etc. -->
                                    ${getProjectToolsHTML(element.id)}
                                </div>
                            </div>
                            <hr>
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
}

function getProjectToolsHTML(projectId) {
    const capitalize = str => str[0].toUpperCase() + str.substring(1);

    const getToolImgHTML = toolName => `
        <img 
        src="images/tool-icons/${toolName}.png" 
        style="margin: 10px;"
        width="50" 
        alt="${toolName}-logo"
        title="${capitalize(toolName)}"
        >
    `;

    const project = projectWithId(projectId);
    const toolsUsed = project["tools-used"];

    let projectToolsHTML = ``;
    toolsUsed.forEach(tool => projectToolsHTML += getToolImgHTML(tool));

    return projectToolsHTML;
}