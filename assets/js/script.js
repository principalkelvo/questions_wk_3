let keys = document.querySelectorAll('.container .key .row span'),
    keyPad = document.querySelector('.container .key'),
    display = document.querySelector('.container .display');
var submit = document.querySelector('.container .submitBtn');
var textBox = document.querySelector('.container .userAnswer');
var sentence = "";
var userAnswer= '';
var preElements = document.getElementsByTagName("pre");

submit.addEventListener('click', submitForm);



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
    userAnswer = textBox.innerHTML;
    display.innerHTML= '';
    clear();
}

async function clear(){
    display.innerText= '';
    sentence = '';
    console.log(userAnswer + ' ' + "hello");
}