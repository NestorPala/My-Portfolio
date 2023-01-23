const bodyElements = Array.from(document.querySelectorAll("body")[0].children).filter(e => !Array.from(e.classList).includes("main-title"));
   
const dropDownButton = document.getElementById("dropdownMenuButton1");
const options = { attributes: true };

function callback(mutationList, observer) {
    mutationList.forEach(function(mutation) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            if (Array.from(dropDownButton.classList).includes("show")) {
                bodyElements.forEach(e => e.style.opacity = 0.3);
            } else {
                bodyElements.forEach(e => e.style.opacity = 1.0);
            }
        }
    })
}

const observer = new MutationObserver(callback);
observer.observe(dropDownButton, options);