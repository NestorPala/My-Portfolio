const bodyElements = document.querySelectorAll("body")[0].children;

const bodyElementsExceptDropdown = Array.from(bodyElements).filter(element => {
    return Array.from(element.classList).includes("main-title") === false;
});
   
const dropDownButton = document.getElementById("dropdownMenuButton1");
const options = { attributes: true };

function callback(mutationList, observer) {
    const mainTitle = document.getElementById("main-title-content");
    mutationList.forEach(function(mutation) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            if (Array.from(dropDownButton.classList).includes("show")) {
                bodyElementsExceptDropdown.forEach(e => e.style.opacity = 0.3);
                mainTitle.style.color = "#735383";
                moveBackground(false);
            } else {
                bodyElementsExceptDropdown.forEach(e => e.style.opacity = 1.0);
                mainTitle.style.color = "white";
                moveBackground(true);
            }
        }
    });
}

const observer = new MutationObserver(callback);
observer.observe(dropDownButton, options);