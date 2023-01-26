window.onload = function () {
    let a = document.querySelectorAll('.resume-link');
    for (let i = 0; i < a.length; i++) {
        a[i].setAttribute('target', '_blank');
    }
};

window.onscroll = () => {
    parallax();
    goToTopButton.hidden = window.scrollY === 0;
};