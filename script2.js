const quizData = [
    {
        question: "What is the three fifth of 100?",
        a:"3",
        b:"5",
        c:"20",
        d:"60",
        correct:"d",
    },
    {
        question: "What is the remainder of 21 divided by 7?",
        a: "21",
        b:"7",
        c:"None of these",
        d:"1",
        correct:"c",
    },
    {
        question: "What is the value of x if x^2=169?",
        a: "1",
        b:"169",
        c:"338",
        d:"13",
        correct:"d",
    },
    {
        question: "In a century, how many months are there?",
        a: "12",
        b:"120",
        c:"1200",
        d:"12000",
        correct:"c",
    },
    {
        question: "If Kumar's age is 27 years old in 2011. What was his age in 2003?",
        a: "17 years",
        b:"37 years",
        c:"20 years",
        d:"19 years",
        correct:"d",
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
    
        <button onclick="location.reload() "> Reload</button>
        <button onclick="finish()"> Finish </button>
        `
    
    }

    }    
})
