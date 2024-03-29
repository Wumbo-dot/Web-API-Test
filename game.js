const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: 'What is 5 + 5?',
        choice1: '55',
        choice2: '20',
        choice3: '1',
        choice4: '10',
        answer: 4,
    },
    {
        question: 'What does HTML stand for?',
        choice1: 'Hybrid Text Marketplace Language',
        choice2: 'HyperText Markup Language',
        choice3: 'Hyperlink Talks Machine Language',
        choice4: 'HyperText Madeup Language',
        answer: 2,
    },
    {
        question: 'What does CSS stand for?',
        choice1: 'Cascading Styled Sheets',
        choice2: 'Cascading Style Sheets',
        choice3: 'Casting Style sheets',
        choice4: "I don't know, I just use it",
        answer: 2,
    },
    {
        question: 'Commonly used data types DO NOT include',
        choice1: 'Strings',
        choice2: 'Booleans',
        choice3: 'Alerts',
        choice4: 'Numbers',
        answer: 4,
    }
]

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 4;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS){
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }

    questionCounter++;
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`;
    console.log(progressBarFull)
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question

    choices.forEach(choice =>{
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers  = true;
}

choices.forEach(choice => {
    choice.addEventListener('click', e =>{
    if(!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset['number'];

    let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

    if(classToApply ==='correct'){
        incrementScore(SCORE_POINTS);
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() =>{
        selectedChoice.parentElement.classList.remove(classToApply);
        getNewQuestion();
    }, 1000)
    })    
})
function countdown(){
    var timeLeft = 5;

var timeInterval = setInverval(function(){
    if(timeLeft>1){
        timeInterval.textContent = timeLeft + 'seconds remaining';
        timeLeft--;
    }
    else if(timeLeft === 1){
        timeInterval.textContent = timeLeft + 'second remaining';
        timeLeft--;
    }
    else{
        timeInterval.textContent = '';
        clearInterval(timeInterval);
        displayMessage()
    }
}, 1000)    
}

incrementScore = num =>{
    score +=num;
    scoreText.innerText = score;
}

startGame();