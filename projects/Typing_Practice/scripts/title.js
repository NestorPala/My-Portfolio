const title = "Typing Practice";

const mainTitleElement = document.getElementById("title-typing-practice");
const aestheticWriterCursor = document.getElementById("aesthetic-writer-cursor");
const timeMs = 200;
const cursor = "_";
const noCursor = "";

function showTitle(index) {
    if (index == title.length) {
        return;
    }
    setTimeout(() => {
        if (index == 0) {
            mainTitleElement.innerHTML = title[0];
        } else {
            mainTitleElement.innerHTML += title[index];
        }
        const cursorStatus = aestheticWriterCursor.innerHTML;
        aestheticWriterCursor.innerHTML = (cursorStatus === noCursor) ? cursor : noCursor;
        showTitle(index + 1);
    }, timeMs);
}

aestheticWriterCursor.innerHTML = cursor;

showTitle(0);