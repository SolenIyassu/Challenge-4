/* GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score */
console.log('linked')
var start = document.querySelector ('#start')
var buttons = document.querySelector ('.buttons')
var question = document.querySelector('#question')
var nextQuestion = document.querySelector('#next')
var Timer = document.querySelector('#timer')
var answerChoice1= document.querySelector('#button1')
var answerChoice2= document.querySelector('#button2')
var answerChoice3= document.querySelector('#button3')
var answerChoice4= document.querySelector('#button4')
var timer = 60
var scoreBoard = 0
var submit = document.querySelector('#submit')
var input = document.getElementById('input')
var input = document.createElement('answerInput')
input.FormData;
// var answer = document.querySelector('#answer')
var currentIndex = 0
 
var questions = [
    {
        Question:'What does CSS stand for?',
        choices: ['customer service and support', 'College Scholarship Service Profile', 'combat service support', 'Cascading style sheet!'],
        Answer: 3
    },
    {
        Question:'What language uses appendChild?',
        choices: ['JavaScript', 'HTML', 'jQuery', 'SQL'],
        Anwer: 0
    },
    {  
        Question: 'Css is combined by using, ____. ',
        choices: ['Link', 'script','input', 'document'],
        Answer: 0
    },
    {
        Question: 'HTML is used for _____?',
        choices: ['hello','bye',],
        Answer: [0]
    },
    {
        Question: 'What language makes a page dynamic and functional?',
        choices:['HTML', 'SQL','Python', 'Javascript'],
        Answer: 3
    }      
]
var input = document.createElement('form')
input.setAttribute('type', 'text')

function timerFn() {
    console.log ('timer')
    var quizTimer = setInterval(function(){
        if (timer === 0) {
            clearInterval(quizTimer);
        }
        Timer.innerText = timer
        console.log(timer)
       timer--
    },1000)
}
function gameOver() {
    alert('Game over! Add your intials') + timer
}

start.addEventListener('click', function() {
    quizTimer = 60
    scoreBoard = 0
    start.style.display ='none';
    nextQuestion.style.diplay = 'block';
    console.log('working')
    timerFn()
    renderQuestion()
})
function Continue(){
    nextQuestion.style.diplay = 'block';
    currentIndex ++;
    console.log(currentIndex)
}

function renderQuestion(){
    question.innerText = questions[currentIndex].Question
    answerChoice1.innerText = questions[currentIndex].choices[0]
    answerChoice2.innerText = questions[currentIndex].choices[1]
    answerChoice3.innerText = questions[currentIndex].choices[2]
    answerChoice4.innerText = questions[currentIndex].choices[3]
    currentIndex
    nextQuestion.addEventListener('click', Continue())
    console.log(currentIndex)
}
function renderAnswer(){
    Answer.interText = Answer[currentIndex].Answer
    continue()
}