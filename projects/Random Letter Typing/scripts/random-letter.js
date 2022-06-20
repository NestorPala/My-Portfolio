const START_LETTER = 'A'
const STOP_LETTER = 'Z'
const TIME_MIN = 0.5
const TIME_MAX = 5
const DEFAULT_LETTER_COLOR = "white"
const CORRECT_LETTER = "green"
const WRONG_LETTER = "red"
let changeLetterTimeInMiliseconds = 2000
let changeLetterInterval
let timeGapInput = document.getElementById('time-gap')
let startButton = document.getElementById('button-start')
let stopButton = document.getElementById('button-stop')
let randomLetter = document.getElementById('random-letter')
let description = document.getElementById('description')
let timeBetweenLetters = document.getElementById('time-between-letters')
let score = document.getElementById('score')
let scoreText = document.getElementById('score-text')
let hits = 0
let misses = 0


const setTimeBetweenLetters = () => {
    let timeInSeconds = timeGapInput.value

    if (timeInSeconds < TIME_MIN || timeInSeconds > TIME_MAX) {
        alert(`Time must be between ${TIME_MIN} and ${TIME_MAX} seconds!`)
        if (timeGapInput.value > TIME_MAX) {
            timeGapInput.value = TIME_MAX
        } else {
            timeGapInput.value = TIME_MIN
        }
        return false
    }

    changeLetterTimeInMiliseconds = timeInSeconds * 1000
    
    return true
}


// "ABC".charCodeAt(0) // returns 65
const getASCIICodeFromLetter = letter => letter.charCodeAt(0)


// String.fromCharCode(65,66,67); // returns 'ABC'
const getLetterFromASCIICode = asciiCode => String.fromCharCode(asciiCode)


const printLetter = letter => {
    randomLetter.innerHTML = letter
    randomLetter.style.color = DEFAULT_LETTER_COLOR
    score.style.color = DEFAULT_LETTER_COLOR
}


// const getLetter = async randomNumberURL => {
//     let letter

//     await fetch(randomNumberURL)
//     .then(response => response.json())
//     .then(number => getLetterFromASCIICode(number))
//     .then(convertedNumber => {letter = convertedNumber})

//     return letter
// }


const getLetter_ = async (startLetter, stopLetter) => {
    let delta = stopLetter - startLetter
    let randomNumber = Math.floor(Math.random() * delta) + startLetter
    let letter = getLetterFromASCIICode(randomNumber)
    return letter
}


// Doesn't include "Ñ"
const changeLetter = async (startLetter, stopLetter) => {
    startLetter = getASCIICodeFromLetter(startLetter)
    stopLetter = getASCIICodeFromLetter(stopLetter)

    // let randomNumberURL = "http://www.randomnumberapi.com/api/v1.0/random"
    // randomNumberURL += "?min=" + startLetter
    // randomNumberURL += "&max=" + stopLetter
    // randomNumberURL += "&count=1"

    //let newLetter = await getLetter(randomNumberURL)

    // Temporary, getLetter stopped working because RandomNumberAPI is not responding requests.
    // The idea now is to fetch a list of true random numbers from RANDOM.ORG,
    // pop a number from that list and then return it as a letter.
    // When the number list is empty, we just fetch another bunch of numbers and so on.
    let newLetter = await getLetter_(startLetter, stopLetter)

    printLetter(newLetter)
}


const getScore = () => Math.round(hits / (hits + misses) * 100)


const matchKey = (key) => {
    let keyMatchesRandomLetter = key.toLowerCase() == randomLetter.innerHTML.toLowerCase()
    
    if (keyMatchesRandomLetter) {
        randomLetter.style.color = CORRECT_LETTER
        score.style.color = CORRECT_LETTER
        hits += 1
    } else {
        randomLetter.style.color = WRONG_LETTER
        score.style.color = WRONG_LETTER
        misses += 1
    }

    score.innerHTML = getScore()
}


const registerKey = (event) => {
    // console.log(`The key pressed is: ${event.key}`)
    matchKey(event.key)
}


const stopTyping = () => {
    clearInterval(changeLetterInterval)
    window.removeEventListener('keydown', registerKey)
}


const isMobileDevice = () => window.matchMedia("only screen and (max-width: 760px)").matches;


// Temporal fix for mobile
const openMobileKeyboard = () => stopButton.appendChild(document.createElement("input")).focus()


const startTyping = (startLetter, stopLetter) => {
    hits = 0
    misses = 0
    changeLetterInterval = setInterval(changeLetter, changeLetterTimeInMiliseconds, startLetter, stopLetter)
    window.addEventListener('keydown', registerKey)
    if(isMobileDevice()) openMobileKeyboard()
}


function stop() {
    stopTyping()
    description.hidden = false
    timeBetweenLetters.hidden = false
    timeGapInput.hidden = false
    startButton.hidden = false
    randomLetter.hidden = true
    stopButton.hidden = true
    scoreText.hidden = true
    score.innerHTML = 0
    alert("You have stopped typing")
    alert(`Your accuracy is ${getScore()}%`)
    scrollTo({top: 0, left: 0, behavior: 'smooth'});
}


function start() {
    if (!setTimeBetweenLetters()) return
    description.hidden = true
    timeBetweenLetters.hidden = true
    timeGapInput.hidden = true
    startButton.hidden = true
    randomLetter.hidden = false
    stopButton.hidden = false
    scoreText.hidden = false
    startTyping(START_LETTER, STOP_LETTER) 
    alert("You have started typing")
}