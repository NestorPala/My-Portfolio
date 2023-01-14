const DEFAULT_LETTER_COLOR = "white";
const CORRECT_LETTER = "green";
const WRONG_LETTER = "red";

const description = document.getElementById('description');
const startButton = document.getElementById('button-start');
const stopButton = document.getElementById('button-stop');
const pauseButton = document.getElementById('button-pause');
const resumeButton = document.getElementById('button-resume');
let input;
const mobileInput = document.getElementById('mobile-input');
const randomWordWrapper = document.getElementById('random-word-wrapper');
let randomWordBox = document.getElementById('random-word-box');
let currentLetter = 0;
let hits = 0;
let misses = 0;
let typedCharacters = 0;
let startTime = 0;
let pauseStartTime = 0;
let pauseMinutes = 0;
const scoreContainer = document.getElementById('score-container');
let currentWpm = 0;
const wpmValue = document.getElementById("wpm-value");
const accuracyValue = document.getElementById('accuracy-value');



const isMobileDevice = () => window.matchMedia("only screen and (max-width: 760px)").matches;


const closeMobileKeyboard = () => mobileInput.removeChild(input);


const openMobileKeyboard = () => {
    input = document.createElement("textarea");
    input.setAttribute("type", "text");
    mobileInput.appendChild(input);
    input.focus();
};


const getAccuracy = () => Math.round(hits / (hits + misses) * 100);


// https://indiatyping.com/index.php/typing-tips/typing-speed-calculation-formula
function calculateWPM() {
    const minutesElapsed = (((Date.now() - startTime) / 1000) / 60) - pauseMinutes;
    const calculatedWpm = ((typedCharacters - misses) / 5) / minutesElapsed;
    currentWpm = calculatedWpm;
}


function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * (wordList.length - 1));
    return wordList[randomIndex];
}


function removeWord() {
    randomWordWrapper.removeChild(randomWordBox);
    randomWordBox = document.createElement("div");
    randomWordBox.id = "random-word-box";
    randomWordBox.hidden = true;
    randomWordWrapper.appendChild(randomWordBox);
}


function addWord() {
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


function registerKey(event) {
    let key;

    if (isMobileDevice()) {
        key = mobileInput.firstChild.value.slice(-1);
    } else {
        key = event.key;
    }

    const letter = randomWordBox.childNodes[currentLetter];

    if (letter.innerHTML.toLowerCase() == key.toLowerCase()) {
        letter.setAttribute("style", "color: " + CORRECT_LETTER + ";");
        scoreContainer.style.color = CORRECT_LETTER;
        hits += 1;
    } else {
        letter.setAttribute("style", "color: " + WRONG_LETTER + ";");
        scoreContainer.style.color = WRONG_LETTER;
        misses += 1;
    }

    accuracyValue.innerHTML = getAccuracy();

    currentLetter++;

    calculateWPM();
    typedCharacters++;

    wpmValue.innerHTML = ((currentWpm >= 0) ? currentWpm : 0).toFixed(2);

    if (currentLetter == randomWordBox.childNodes.length) {
        if (isMobileDevice()) {
            closeMobileKeyboard();
            openMobileKeyboard();
        }
        removeWord();
        addWord();
        currentLetter = 0;
    }
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
    removeWord();
    disableKeyRegister();

    description.hidden = false;
    startButton.hidden = false;
    randomWordBox.hidden = true;
    stopButton.hidden = true;
    pauseButton.hidden = true;
    scoreContainer.hidden = true;
    scoreContainer.style.color = DEFAULT_LETTER_COLOR;

    currentLetter = 0;
    pauseMinutes = 0;
    accuracyValue.innerHTML = 0;
    wpmValue.innerHTML = 0.00;
    
    alert("You have stopped typing");
    alert(`Your accuracy is ${getAccuracy()}%`);
    alert("Your WPM is: " + currentWpm.toFixed(2));

    currentWpm = 0;
    typedCharacters = 0;
    startTime = 0;

    scrollTo({ top: 0, left: 0, behavior: 'smooth' });
};


function start() {
    description.hidden = true;
    startButton.hidden = true;
    randomWordBox.hidden = false;
    stopButton.hidden = false;
    pauseButton.hidden = false;
    scoreContainer.hidden = false;

    currentLetter = 0;
    typedCharacters = 0;
    startTime = Date.now();
    hits = 0;
    misses = 0;

    addWord();
    enableKeyRegister();

    alert("You have started typing");
};


function pause() {
    stopButton.hidden = true;
    pauseButton.hidden = true;
    resumeButton.hidden = false;
    pauseStartTime = Date.now();
    disableKeyRegister();
}


function resume() {
    stopButton.hidden = false;
    pauseButton.hidden = false;
    resumeButton.hidden = true;
    pauseMinutes += ((Date.now() - pauseStartTime) / 1000) / 60;
    pauseStartTime = 0;
    enableKeyRegister();
}