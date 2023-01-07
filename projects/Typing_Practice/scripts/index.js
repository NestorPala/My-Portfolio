const backgroundLoaded = document.body.style.backgroundImage != '';

if (!backgroundLoaded) {
    document.body.style["backgroundColor"] = "#230f0a";
}