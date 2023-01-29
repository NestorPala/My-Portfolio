/* 
    https://developer.mozilla.org/es/docs/Web/API/MutationObserver 
*/

const modals = document.getElementsByClassName("modal");
let modalOpen = false;
let scrolled = 0;

function addModalObservers() {
    Array.from(modals).forEach(modal => {
        // Create an observer instance
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                const changingStyle = mutation.type === "attributes" && mutation.attributeName === "style";
                if (changingStyle) {
                    const classList = Array.from(mutation.target.classList);
                    const modalIsShowing = classList.includes("show");
                    if (modalIsShowing) {
                        moveBackground(false);
                        scrolled = window.scrollY;
                        modalOpen = true;
                    } else {
                        if (modalOpen === true) {
                            moveBackground(true);
                            modalOpen = false;
                        }
                    }
                }
            });
        });
    
        // Select the target node
        const target = modal;
    
        // Set-up the observer
        const config = { attributes: true, childList: true, characterData: true };
    
        // Start the observer
        observer.observe(target, config);
    });
}