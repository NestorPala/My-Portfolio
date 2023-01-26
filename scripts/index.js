window.onload = () => {
    moveBackground();
    addProjects();
    addModals();
    addModalObservers();
    addDropdownObserver();
}

// Prevent scroll when the modal is open while preserving current scroll status
// Not using "body position: fixed" because it resets scroll position to 0 (undesired behavior)
window.onscroll = () => {
    if (modalOpen === true) {
        window.scrollTo({ top: scrolled, behavior: "instant" });
    }
};