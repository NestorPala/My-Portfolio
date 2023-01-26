function addDropdownObserver() {
    const bodyElementsExceptDropdown = [
        document.getElementById("main-title-content"),
        document.getElementById("main-footer"),
        ...document.getElementsByClassName("project-link"),
    ];
    
    const dropDownButton = document.getElementById("dropdownMenuButton1");
    const options = { attributes: true };

    function callback(mutationList, observer) {
        const mainTitle = document.getElementById("main-title-content");
        mutationList.forEach(function(mutation) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                if (Array.from(dropDownButton.classList).includes("show")) {
                    bodyElementsExceptDropdown.forEach(e => e.style.opacity = 0.6);
                    moveBackground(false);
                } else {
                    bodyElementsExceptDropdown.forEach(e => e.style.opacity = 1.0);
                    moveBackground(true);
                }
            }
        });
    }

    const observer = new MutationObserver(callback);
    observer.observe(dropDownButton, options);
}