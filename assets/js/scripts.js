var startButton = document.querySelector('start-btn')
var nextButton = document.getElementById('next-btn')
var questionContainerElement = document.getElementById
('#question-container')
var questionElement = document.getElementById('question')
var answerButtonElement = document.getElementById('answer-buttons')


let currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;

var startScreenEl = document.getElementById

startButton.addEventListener('click', playGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function playGame(){

    var start = [];
}
console.log('start')
startButton.classList.add('.hide')

function getQuestionsFromPool(arr) {
    var shuffleQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('.hide')
    nextQuestion()
}

function nextQuestion(){
    resetState()
    showQuestion(shuffleQuestions[currentQuestionIndex])
}

function showQuestion(question){
questionElement.innerText = questions.question
question.answers.forEach(answer =>{
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
        button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonElement.appendChild(button)
})
}
function resetState(){
nextButton.classList.add('hide')
while (answerButtonElement.firstChild){
    answerButtonElement.removeChild
    (answerButtonElement.firstChild)
}
}


function pickAnswer(e) {
const selectedButton = e.target
const correct = selectedButton.dataset.correct
getStatusClass(document.body, correct)
Array.from(answerButtonElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)    
})
if (shuffleQuestions.length > currentQuestionIndex + 1) {
nextButton.classList.remove('hide')
    }
else{
    startButton.innerText = 'restart'
    startButton.classList.remove('hide')
}
}
function setStatusClass(element, correct) {
clearStatusclass(element)
if(correct) {
    element.classList.add('correct')
} else {
    element.classList.add('wrong')
}
}

const questions = [
{
    question: 'What?',
    answer:[
        { text:'4', correct: true },
        { text:'22', correct: false }
    ]
 }
]





