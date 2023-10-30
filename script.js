const quizData = [
    {
        question: "Which of these is a programming language?",
        a:"Itch",
        b:"Scratch",
        c:"Bite",
        d:"Gnaw",
        correct:"b",
    },
    {
        question: "What do shell windows show in python?",
        a: "IDLE",
        b:"Print Command",
        c:"Program Output",
        d:"Code",
        correct:"c",
    },
    {
        question: "What is Computer coding?",
        a: "TV Show",
        b:"List of functions",
        c:"Telling a computer what to do",
        d:"Radio Show",
        correct:"c",
    },
    {
        question: "Ruby is an ______ interpreted scripting language.",
        a: "Awesome",
        b:"Logical",
        c:"Binary",
        d:"Object-Oriented",
        correct:"d",
    },
    {
        question: "In javaScript, what element is used to store multiple values in single variable?",
        a: "Arrays",
        b:"Strings",
        c:"Variables",
        d:"Functions",
        correct:"a",
    },
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')



let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz()
{
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
    let answer
    answerEls.forEach(answerEl =>{
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer
}
function finish(){
    window.open("quiz.html")
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
        if(answer === quizData[currentQuiz].correct){
         score++
        }
        currentQuiz++
    
    if(currentQuiz < quizData.length){
        loadQuiz()
    }else{
        quiz.innerHTML = `
        <h2> You answered ${score}/${quizData.length} questions correctly </h2>
    
        <button onclick="location.reload()"> Reload </button>
        <button onclick="finish()">Finish</button>
        `
    
    }

    }    
})
