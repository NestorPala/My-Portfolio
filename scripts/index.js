window.onload = function() {
    let a = document.querySelectorAll('.project-link');
    for (let i=0; i<a.length; i++) {
        if (a[i].id == "personal-page") continue;
        a[i].setAttribute('target', '_blank');
    }
};