const bodyElements = document.querySelectorAll("body")[0].children;

const bodyElementsExceptDropdown = Array.from(bodyElements).filter(element => {
    return Array.from(element.classList).includes("main-title") === false;
});
   
const dropDownButton = document.getElementById("dropdownMenuButton1");
const options = { attributes: true };

function callback(mutationList, observer) {
    mutationList.forEach(function(mutation) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            if (Array.from(dropDownButton.classList).includes("show")) {
                bodyElementsExceptDropdown.forEach(e => e.style.opacity = 0.3);
            } else {
                bodyElementsExceptDropdown.forEach(e => e.style.opacity = 1.0);
            }
        }
    });
}

const observer = new MutationObserver(callback);
observer.observe(dropDownButton, options);