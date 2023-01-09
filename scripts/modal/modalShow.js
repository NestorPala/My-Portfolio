/* 
    https://developer.mozilla.org/es/docs/Web/API/MutationObserver 
*/

const modals = document.getElementsByClassName("modal");
let open = false;
let scrolled = 0;

Array.prototype.forEach.call(modals, modal => {
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
                    open = true;
                } else {
                    if (open === true) {
                        moveBackground(true);
                        open = false;
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

// Prevent scroll when the modal is open while preserving current scroll status
// Not using "body position: fixed" because it resets scroll position to 0 (undesired behavior)
window.onscroll = () => {
    if (open === true) {
        window.scrollTo({ top: scrolled, behavior: "instant" });
    }
};