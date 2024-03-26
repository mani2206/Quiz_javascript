// Questions

let quiz_Data = [
    {
    question: "1. What does HTML stand for?",
     a: "Hyper Text Preprocessor",
     b: "Hyper Text Markup Language",
     c: "Hyper Text Multiple Language",
     d: "Hyper Tool Multi Language",
     correct: "b"
  },
    {
    question: "2. What does CSS stand for?",
      a: "Common Style Sheet",
      b: "Colorful Style Sheet",
      c: "Computer Style Sheet",
      d: "Cascading Style Sheet",
      correct: "d"
  },
    {
    question: "3. What does PHP stand for?",
     a: "Hypertext Preprocessor",
     b: "Hypertext Programming",
     c: "Hypertext Preprogramming",
     d: "Hometext Preprocessor",
     correct: "a",
  },
    {
    question: "4. What does SQL stand for?",
     a: "Stylish Question Language",
     b: "Stylesheet Query Language",
     c: "Statement Question Language",
     d: "Structured Query Language",
     correct: "d",
  },
    {
    question: "5. What does XML stand for?",
     a: "eXtensible Markup Language",
     b: "eXecutable Multiple Language",
     c: "eXTra Multi-Program Language",
     d: "eXamine Multiple Language",
     correct: "a",
  },
];
const questionEl = document.getElementById('questions');
const answerEl = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById("b_text");
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const button = document.getElementById('button');

let currentQuiz  = 0;
let score = 0;
loadQuiz();

function loadQuiz(){
deleteCheck()
const currentQuizData = quiz_Data[currentQuiz]
if(currentQuizData){
questionEl.innerText = currentQuizData.question
a_text.innerText = currentQuizData.a
b_text.innerText = currentQuizData.b
c_text.innerText = currentQuizData.c
d_text.innerText = currentQuizData.d
}
}

function checkAnswer(){
    let answer = undefined
    answerEl.forEach(el =>{
        if(el.checked){
            answer =  el.id;
        }  
    } );
         return answer
}
function deleteCheck(){
    answerEl.forEach(el =>{
        el.checked = false;   
    } )
}
button.addEventListener("click", ()=>{
    const answer = checkAnswer()
    if(answer){
        if(answer === quiz_Data[currentQuiz].correct){
            score++
        }
        currentQuiz++;
        if(currentQuiz < quiz_Data.length){
            loadQuiz()
        }else{
            quiz.innerHTML = `<h1 class="changeColor">Your Score ${score} / ${quiz_Data.length}</h1> <button type="button" class="btn btn-danger sub " onclick="location.reload()">Quit</button>`
        }
    }  
})


