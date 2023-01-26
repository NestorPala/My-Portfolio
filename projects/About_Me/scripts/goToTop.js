const goToTopButton = document.getElementById("go-to-top");
goToTopButton.hidden = true;

goToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// window.onscroll = () => goToTopButton.hidden = window.scrollY === 0;