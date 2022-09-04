const title = "My Web Portfolio";
let titleMyPortfolio = document.getElementById("title-my-portfolio");
let aestheticWriterCursor = document.getElementById("aesthetic-writer-cursor");
const timeMs = 200;

function showTitle(index) {
    if (index == title.length) {
        return;
    }
    setTimeout(() => {
        if (index == 0) {
            titleMyPortfolio.innerHTML = title[index];
        } else {
            titleMyPortfolio.innerHTML += title[index];
        }
        aestheticWriterCursor.innerHTML = aestheticWriterCursor.innerHTML == "" ? "_" : "";
        showTitle(index + 1);
    }, timeMs);
}

aestheticWriterCursor.innerHTML = "";
showTitle(0);
