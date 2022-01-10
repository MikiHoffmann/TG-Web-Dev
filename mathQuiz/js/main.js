const quizStarter = document.getElementById('quizStarter');
quizStarter.onclick = createQuiz;

function createQuiz() {
    createQuizBackground();
    createFieldsets();
    createNavButtons();
}
const quizBackground = document.createElement('div');
const quizTitle = document.createElement('h1');
const quizContainer = document.createElement('div');
const quizForm = document.createElement('form');
const navButtonContainer = document.createElement('div');

function createQuizBackground() {
    document.body.appendChild(quizBackground);
    quizBackground.classList.add('quizBackground');

    quizBackground.appendChild(quizTitle);
    quizTitle.classList.add('quizTitle');
    quizTitle.innerText = '-- Math Problems --';

    quizBackground.appendChild(quizContainer);
    quizContainer.classList.add('quizContainer');

    quizContainer.appendChild(quizForm);
    quizForm.classList.add('quizForm');

    quizContainer.appendChild(navButtonContainer);
    navButtonContainer.id = 'navButtonContainer';
    navButtonContainer.classList.add('navButtonContainer');
}
const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
class MathProblems {
    constructor(calculation,rightAwnser,wrongAwnsers) {
        this.calculation = calculation;
        this.rightAwnser = rightAwnser;
        this.wrongAwnsers = wrongAwnsers;
    }
};
let questions = [];
questions[0] = new MathProblems('10 + 5',15,[1,33,-4,12]);
questions[1] = new MathProblems('1 + 2',3,[2,43,-6,100]);
questions[2] = new MathProblems('6 * 2',12,[22,13,23,44]);
questions[3] = new MathProblems('6 - 2',4,[55,33,113,44]);
   
const keys = questions.keys();
let questionNumbers = [];
let questionNumber;
for(let k of keys){
    questionNumber = k + 1;
    questionNumbers.push(questionNumber);
}
let options = [];

let formFields = [];
let formField;
let allLabels = [];
let label = '';
function createFieldsets() {
    for(let i = 0; i < questions.length; i++) {
        formField = document.createElement('fieldset');
        formField.classList.add('formField');
        formField.id = 'question' + questionNumbers[i];
        
        let legend = document.createElement('legend');

        quizForm.appendChild(formField);
        formFields.push(formField);
        formField.appendChild(legend);
        legend.innerHTML = `<span>question ` + questionNumbers[i] + ' of ' + questionNumbers.length + `</span><span id='quizQuestionDisplay' class='quizQuestionDisplay'>${questions[i].calculation}</span>`;
        options = questions[i].wrongAwnsers.map(listOptions);
        function listOptions (value) {
            return value;
        }
        options.push(questions[i].rightAwnser)
        for (let i = 0; i < options.length; i++) {
            let template = `<input class='hideRadio choice' type='radio' name='${formField.id}' value='${options[i]}'/><span class='customRadio'>${alphabet[i]}</span><span class='awnserOption choice'>${options[i]}</span>`;
            label = template;
            allLabels = document.createElement('label');
            allLabels.classList.add('label');
            allLabels.innerHTML += label;
            formField.appendChild(allLabels);
            //console.log(allLabels);
            
        };
        //console.log(formField); // delete log later
        
    }
}
const navButtons = [
    {id:'previousButton',text:'previous'},
    {id:'nextButton',text:'next'},
    {id:'checkButton',text:'check my awnser'},
    {id:'toResultButton',text: 'show result'}
];
function createNavButtons() {
    for(let i = 0; i < navButtons.length; i++) {
        let buttonTemplate = `<button id='${navButtons[i].id}' class='button'>${navButtons[i].text}</button>`;
        let navButton = buttonTemplate;
        navButtonContainer.innerHTML += navButton;
    }
    //console.log(formFields);
    let active = 0;
    let next = 1;
    let previous = (formFields.length - 1);
    for(let i = 0; i < formFields.length; i++) {
        formFields[active].classList.add('active');
        formFields[next].classList.add('next');
        formFields[previous].classList.add('previous');
    }
    const previousButton = document.querySelector('#previousButton');
    const nextButton = document.querySelector('#nextButton');
    const checkButton = document.querySelector('#checkButton');
    const toResultButton = document.querySelector('#toResultButton');
    toResultButton.style.display = 'none';
    previousButton.style.display = 'none';
    previousButton.style.d
    previousButton.onclick = showPrevious;
    nextButton.onclick = showNext;
    checkButton.onclick = checkAwnser;
    //toResultButton.onclick = showResult;
    //console.log(previousButton,nextButton);
    function showNext() {
        if(active < formFields.length - 1) {
            nextField(active + 1);
            previousButton.style.display = 'block';
        }
    }
    function showPrevious() {
        if(active > 0) {
            nextField(active - 1);
            nextButton.style.display = 'block';
        }
    }
    function nextField(item) {
        active = item;
        next = active + 1;
        previous = active - 1;
        for (let i = 0; i < formFields.length; i++) {
            formFields[i].classList.remove('active');
            formFields[i].classList.remove('next');
            formFields[i].classList.remove('previous');
        }
        if (next >= formFields.length) {
            next = 0;
            nextButton.style.display = 'none';
            toResultButton.style.display = 'block';
        }
        if (previous === -1) {
            previous = (formFields.length - 1);
            previousButton.style.display = 'none';
        }
        formFields[active].classList.add('active');
        formFields[next].classList.add('next');
        formFields[previous].classList.add('previous');
    }
}
function checkAwnser() {
    let rightAwnsers = [];
        for(let i = 0; i < questions.length; i++) {
            rightAwnsers[i] = questions[i].rightAwnser;
        }
        console.log(rightAwnsers);
    let choice = [];
    formFields.forEach((formField) => {
        choice = formField.querySelectorAll(`input[name=${formField.id}]`);
        console.log(choice);
        for(let i = 0; i < choice.length; i++) {
            
            if((choice[i].checked === true) && (choice[i].value === rightAwnsers[i])){
                console.log(choice[i].value);
                console.log(rightAwnsers.value);
                choice[i].parentElement.classList.add('awnserRight');
            }
            if((choice[i].checked === true) && (choice[i].value !== '15')){
                console.log(choice[i].value);
                choice[i].parentElement.classList.add('awnserWrong');
            }
        }
    });  
    
    
}