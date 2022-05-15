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
var start = document.querySelector ('#start')
var input = document.querySelector("#answer2")
var nextQuestion = document.querySelector("#next")
start.addEventListerr(click,function(){
    startButton = 'display: none;'
    console.log("working")
})
var question = [
    {
        Question1:"What does CSS stand for?",
        choices: ["customer service and support", "College Scholarship Service Profile", "combat service support", "Cascading style sheet!"],
        Answer: 3
    },
    {
        Question2:"What language uses Appendchild?",
        choices: ["JavaScript", "HTML", "jQuery", "SQL"],
    },
    {  
        Question3: "Css is combined by using, ____. ",
        choices: ["Link", "script","input", "document"],
        Answer: 0
    },
    {
        Question4: "HTML is used for _____?",
        Answer: 0
    },
    {
        Question5: "What language makes a page dynamic and functional?",
        choices:["HTML", "SQL","Python", "Javascript"],
        Answer: 3
    }      
]

startButton.addEventLister('click, function()')

    // document.getElementById("#start").onclick = () {
    //     this.disabled = true;
    // }


/* var timeInterval = setInterval(function () {
    timeLeft--;
    timeEl.textContent = timeLeft + 'seconds left'
   
    if (secondsLeft === 0){
      clearInterval(timeInterval);
      sendMessage("Are you ready to play again?");
    }
} */