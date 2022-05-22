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