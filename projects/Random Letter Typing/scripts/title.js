const title = "Typing Practice";
let titleTypingPractice = document.getElementById("title-typing-practice");
let aestheticWriterCursor = document.getElementById("aesthetic-writer-cursor");
const timeMs = 200;

function showTitle(index) {
    if (index == title.length) {
        return;
    }
    setTimeout(() => {
        if (index == 0) {
            titleTypingPractice.innerHTML = title[index];
        } else {
            titleTypingPractice.innerHTML += title[index];
        }
        aestheticWriterCursor.innerHTML = aestheticWriterCursor.innerHTML == "" ? "_" : "";
        showTitle(index + 1);
    }, timeMs);
}

aestheticWriterCursor.innerHTML = "";
showTitle(0);
