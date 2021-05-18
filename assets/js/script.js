let currentQuestionIndex = 0;
let time = questions.length = 15;
let timeId;



let startButton = document.getElementById('start-btn')
let questionContainerElement = document.getElementById
('question-container')
var shuffleQuestions, currentQuestion
var questionElement = document.getElementById('questions')
var answerElement = document.getElementById('answer-buttons')
var choicesElement = document.getElementById('choices')

startButton.addEventListener('click', playGame)

function playGame(){
    console.log('STARTED')
    startButton.classList.add('hide') 
    shuffleQuestions = questions.sort(() => Math.random() - .5)   
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide');
    showQuestion(questions)
}
function showQuestion(questions){
    var currentQuestion = questions[currentQuestionIndex];
    var currentChoices = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.title;
    answerElement.innerText = currntChoices.choices;
}


function nextQuestion(questions){
    showQuestion(shuffleQuestions[currentQuestionIndex])
}
    
   // var currentQuestion = questions[currentQuestionIndex];
//questionTextEl.textContent = currentQuestion.title;
//choicesEl.innerHTML = ""; //jhan



function pickAnswer(){

}