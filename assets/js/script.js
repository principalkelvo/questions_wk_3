const quizData = [
    {
        question: "Which language runs in a web browser?",
        correct: "javascript",
    },
    {
        question: "Which tool can you use to ensure code quality?",
        correct: "eslint",
    },
    {
        question: "What was the first name of JavaScript?",
        correct: "mocha",
    },
    {
        question: "Who invented Javascript?(first and second name)",
        correct: "brendan eich",
    },
    {
        question: "Javascript File has an extension of .__",
        correct: "js",
    },


];


let keys = document.querySelectorAll('.container .key .row span'),
    keyPad = document.querySelector('.container .key'),
    display = document.querySelector('.container .display');
var submit = document.querySelector('.container .submitBtn');
var preElements = document.getElementsByTagName("pre");
var textBox = document.querySelector('.container .userAnswer');
var quiz = document.querySelector('.container .question');
var sentence = "";
var userAnswer= '';
var currentQuiz=0;
var score=0;

loadQuiz()

submit.addEventListener('click', submitForm);
console.log('hello'+textBox.innerText+'hello');
if(textBox.innerText == ''){
    textBox.classList.add('hide');
}

async function loadQuiz(){
    quiz.innerHTML = quizData[currentQuiz].question;
    // for(let i=0; i<quizData.length; i++){
    //     document.getElementById(i).innerHTML = quizData[currentQuiz][i];
    // }
}

async function getData(){
    if (keys && keyPad && display) {
        let capsLockMode = false;
        keys.forEach(key => {
            //event listener for each key
            key.addEventListener('click', function () {
                // console.log(this.innerText);
                //check if caps lock is on
                if (this.classList.contains('caps')) {
                    this.classList.toggle('active');
                    keyPad.classList.toggle('uppercase');
    
                    capsLockMode ? capsLockMode = false : capsLockMode = true;
                    //checks backspace
                } else if (this.classList.contains('backspace')) {
                    let str = display.innerText;
                    display.innerText = str.substring(0, (str.length - 1));
                    //changes keys to uppercase
                } else {
                    if (capsLockMode) {
                        display.innerText += this.dataset.key.toUpperCase();
                    } else {
                        display.innerText += this.dataset.key.toLowerCase();
                    }
                }
                for (var i= 0; i < preElements.length; i++) {
                    var elements = preElements[i];
                    sentence = elements.innerHTML;
                    console.log(sentence);
                }
            });
        });
        console.log(this.sentence);
    }
};
getData();

//submit user answer
async function submitForm() {
    textBox.innerHTML = sentence;
    userAnswer = textBox.innerHTML.toLowerCase();
    textBox.classList.remove('hide');
console.log('hello'+textBox.innerText+'hello');
    display.innerHTML= '';
    if(userAnswer == quizData[currentQuiz].correct){
        score++;
        console.log(score);
    }
    else{
        console.log('wrong');
    }
    setTimeout(function(){
    currentQuiz++;
    if(currentQuiz < quizData.length){
        loadQuiz();
    textBox.classList.add('hide');

    }
    else{
        console.log('game over');
        currentQuiz=0;
    }
    },3100)
    

    clear();
}

async function clear(){
    display.innerText= '';
    sentence = '';
    console.log(userAnswer + ' ' + "hello");
}