const DEFAULT_LETTER_COLOR = "white";
const CORRECT_LETTER = "green";
const WRONG_LETTER = "red";

const description = document.getElementById('description');
const startButton = document.getElementById('button-start');
const stopButton = document.getElementById('button-stop');
const pauseButton = document.getElementById('button-pause');
const resumeButton = document.getElementById('button-resume');
const mobileInput = document.getElementById('mobile-input');
const randomWordWrapper = document.getElementById('random-word-wrapper');
const scoreContainer = document.getElementById('score-container');
const wpmValue = document.getElementById("wpm-value");
const accuracyValue = document.getElementById('accuracy-value');

let randomWordBox = document.getElementById('random-word-box');
let input;

let currentLetterIndex = 0;
let typedCharacters = 0;
let startTime = 0;
let hits = 0;
let misses = 0;
let pauseStartTime = 0;
let pauseMinutes = 0;
let currentWpm = 0;


function isMobileDevice() {
    const matchesMobileScreen = window.matchMedia("only screen and (max-width: 760px)").matches;
    return matchesMobileScreen === true;
}


function getAccuracy() {
    const accuracyPercentage = Math.round(hits / (hits + misses) * 100);
    return accuracyPercentage;
}


function msToMinutes(ms) {
    return (ms / 1000) / 60;
}


function resetScoreContainer() {
    scoreContainer.style.color = DEFAULT_LETTER_COLOR;
}


function closeMobileKeyboard() {
    mobileInput.removeChild(input);
}


function openMobileKeyboard() {
    input = document.createElement("textarea");
    input.setAttribute("type", "text");
    mobileInput.appendChild(input);
    input.focus();
};


function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * (wordList.length - 1));
    return wordList[randomIndex];
}


function removeCurrentWord() {
    randomWordWrapper.removeChild(randomWordBox);
    randomWordBox = document.createElement("div");
    randomWordBox.id = "random-word-box";
    randomWordBox.hidden = true;
    randomWordWrapper.appendChild(randomWordBox);
}


function paintLetter(letter, color) {
    letter.setAttribute("style", `color: ${color};`);
    scoreContainer.style.color = color;
}


function disableElements(...elements) {
    elements.forEach(element => element.hidden = true);
}


function enableElements(...elements) {
    elements.forEach(element => element.hidden = false);
}


function showMessage(msg) {
    alert(msg);
}


function scrollToTop() {
    scrollTo({ top: 0, left: 0, behavior: 'smooth' });
}


function resetMobileInput() {
    closeMobileKeyboard();
    openMobileKeyboard();
}


// https://indiatyping.com/index.php/typing-tips/typing-speed-calculation-formula
function calculateWPM() {
    const minutesElapsed = msToMinutes(Date.now() - startTime) - pauseMinutes;
    const calculatedWpm = ((typedCharacters - misses) / 5) / minutesElapsed;
    currentWpm = calculatedWpm;
}


function addNewWord() {
    const randomWord = getRandomWord();

    for (let i = 0; i < randomWord.length; i++) {
        const newLetter = document.createElement("span");
        newLetter.id = i;
        newLetter.className = "letter";
        newLetter.innerHTML = randomWord[i];
        randomWordBox.appendChild(newLetter);
    }

    randomWordBox.hidden = false;
    randomWordWrapper.appendChild(randomWordBox);
}


function detectKeyByDevice(event) {
    if (isMobileDevice()) {
        return mobileInput.firstChild.value.slice(-1);
    } 
    return event.key;
}


function compareKeyWithLetter(event) {
    const key = detectKeyByDevice(event);
    const input = key.toLowerCase();
    const currentLetter = randomWordBox.childNodes[currentLetterIndex];
    const letter = currentLetter.innerHTML.toLowerCase();

    if (letter === input) {
        paintLetter(currentLetter, CORRECT_LETTER);
        hits += 1;
    } else {
        paintLetter(currentLetter, WRONG_LETTER);
        misses += 1;
    }
}


function registerPerformance() {
    accuracyValue.innerHTML = getAccuracy();
    calculateWPM();
    wpmValue.innerHTML = ((currentWpm >= 0) ? currentWpm : 0).toFixed(2);
}


function changeWord() {
    const lastLetterIndex = randomWordBox.childNodes.length - 1;

    if (currentLetterIndex == lastLetterIndex + 1) {
        if (isMobileDevice() === true) resetMobileInput();
        removeCurrentWord();
        addNewWord();
        currentLetterIndex = 0;
    }
}


function registerKey(event) {
    compareKeyWithLetter(event);
    currentLetterIndex++;
    typedCharacters++;
    registerPerformance();
    changeWord();
}


function disableKeyRegister() {
    if (isMobileDevice()) {
        closeMobileKeyboard();
        window.removeEventListener('input', registerKey);
    } else {
        window.removeEventListener('keydown', registerKey);
    }
}


function enableKeyRegister() {
    if (isMobileDevice()) {
        openMobileKeyboard();
        window.addEventListener('input', registerKey);
    } else {
        window.addEventListener('keydown', registerKey);
    }
}


function stop() {
    removeCurrentWord();
    disableKeyRegister();
    enableElements(description, startButton);
    disableElements(randomWordBox, stopButton, pauseButton, scoreContainer);
    resetScoreContainer();

    currentLetterIndex = 0;
    typedCharacters = 0;
    startTime = 0;
    pauseMinutes = 0;
    
    showMessage("You have stopped typing");
    showMessage(`Your accuracy is ${getAccuracy()}%`);
    showMessage(`Your WPM is: ${currentWpm.toFixed(2)}`);

    currentWpm = 0;
    wpmValue.innerHTML = 0.00;
    accuracyValue.innerHTML = 0;

    scrollToTop();
};


function start() {
    addNewWord();
    enableKeyRegister();
    disableElements(description, startButton);
    enableElements(randomWordBox, stopButton, pauseButton, scoreContainer);

    currentLetterIndex = 0;
    typedCharacters = 0;
    startTime = Date.now();
    hits = 0;
    misses = 0;

    showMessage("You have started typing");
};


function pause() {
    disableElements(stopButton, pauseButton);
    enableElements(resumeButton);
    disableKeyRegister();

    pauseStartTime = Date.now();
}


function resume() {
    enableElements(stopButton, pauseButton);
    disableElements(resumeButton);
    enableKeyRegister();

    pauseMinutes += msToMinutes(Date.now() - pauseStartTime);
    pauseStartTime = 0;
}