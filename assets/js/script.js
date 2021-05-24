let currentQuestionIndex = 0;
let time = questions.length;
let timeId;



let startButton = document.getElementById('start-btn')
let hsButton = document.getElementById('scores')
let questionContainerElement = document.getElementById
('question-container')
var shuffleQuestions, currentQuestion
var questionElement = document.getElementById('questions')
var answerElement = document.getElementById('answer-buttons')
var choicesElement = document.getElementById('choices')
var nextButton = document.getElementById('next-btn')
var gameOver = document.getElementById('game-over')
let scoreCard = 0


startButton.addEventListener('click', playGame)
nextButton.addEventListener('click', () =>{
    currentQuestionIndex++
    console.log(currentQuestionIndex, shuffleQuestions)
    if (shuffleQuestions.length > currentQuestionIndex){
        showQuestion()
    }
    else{
        startButton.innerText = "RESTART";
        startButton.classList.remove('hide');
        nextButton.classList.add('hide');
        questionContainerElement.classList.add('hide');
        hsButton.classList.remove('hide') 
        
//need to finish it
localStorage.setItem("score", scoreCard)
alert ("Your total score is " + scoreCard)
        return
    }
})

function playGame(){
    console.log('STARTED')
    startButton.classList.add('hide') 
    hsButton.classList.add('hide') 
    shuffleQuestions = questions.sort(() => Math.random() - .5)   
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide');
    showQuestion(questions)
    scoreCard = 0
}
function showQuestion(questions){
    nextButton.classList.add("hide")
    questionContainerElement.classList.remove('hide');
    var currentQuestion = shuffleQuestions[currentQuestionIndex];
    var currentChoices = currentQuestion.choices;
    var rightAnswer = currentQuestion.answer;    


    questionElement.textContent = currentQuestion.title;
    console.log(currentQuestion)
    let choiceButtons = document.querySelectorAll(".btnPick");
    //console.log(choiceButtons)
    

    for(let i=0; i<choiceButtons.length; i++){
        console.log(choiceButtons[i])
        choiceButtons[i].textContent = currentChoices[i];
        choiceButtons[i].setAttribute("data-answer", currentChoices[i])
        choiceButtons[i].addEventListener('click', showAnswer)
        
    }

}

function showAnswer(e) {
    e.preventDefault();
    console.log("Inside button click");
    var ans = this.getAttribute("data-answer");
    console.log(ans);
    nextButton.classList.remove("hide")
    questionContainerElement.classList.add('hide');
    if (ans === questions[currentQuestionIndex].answer) {
        scoreCard++
        alert ("correct your score is, " + scoreCard + " out of 10")
    }
    else{
        console.log("incorrect");
        alert ("wrong")
    
    }
    nextButton.classList.remove("hide")

}


    