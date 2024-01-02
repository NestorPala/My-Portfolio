window.onload = function () {
    generateResumeLinks();
    addExperienceYears();
};

window.onscroll = () => {
    parallax();
    goToTopButton.hidden = window.scrollY === 0;
};

function generateResumeLinks() {
    let a = document.querySelectorAll('.resume-link');
    for (let i = 0; i < a.length; i++) {
        a[i].setAttribute('target', '_blank');
    }
}

function addExperienceYears() {
    let expYears = document.getElementById("exp-years");
    expYears.innerHTML = getExperienceYears("10/25/2021")
}

function getExperienceYears(initialDate) {
    const date1 = new Date(initialDate);
    const date2 = Date.now();
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return (diffDays / 365).toFixed(0)
}
