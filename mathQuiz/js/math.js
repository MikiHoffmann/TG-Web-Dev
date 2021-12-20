const quizStarter = document.getElementById('quizStarter');
quizStarter.onclick = createQuiz;

function createQuiz() {
    createQuizBackground();
    createFieldsets();
    createNavButtons();
    navigateForm();
}
const quizBackground = document.createElement('div');
const quizTitle = document.createElement('h1');
const quizContainer = document.createElement('div');
const quizForm = document.createElement('form');
const navButtons = document.createElement('div');

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

    quizContainer.appendChild(navButtons);
    navButtons.id = 'navButtons';
    navButtons.classList.add('navButtons');
}
function createNavButtons() {
    const navButtons = [
        {id:'previousButton',text:'previous'},
        {id:'checkButton',text:'check my awnser'},
        {id:'nextButton',text:'next'}
    ];
    for(let i = 0; i < navButtons.length; i++) {
        let buttonTemplate = `<button id='${navButtons[i].id}' class='button'>${navButtons[i].text}</button>`;
        let navButton = buttonTemplate;
        const buttonDisplay = document.getElementById('navButtons');
        buttonDisplay.innerHTML += navButton;
    }
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
questions[1] = new MathProblems('1 + 2',3,[2,43,-6,100,7,8]);
questions[2] = new MathProblems('6 - 2',4,[55,33,113,44]);
questions[3] = new MathProblems('6 - 2',4,[55,33,113,44]);
   
const keys = questions.keys();
let questionNumbers =[];
let questionNumber;
for(let k of keys){
    questionNumber = k + 1;
    questionNumbers.push(questionNumber);
}
function createFieldsets() {

    for(let i = 0; i < questions.length; i++) {
        let formField = document.createElement('fieldset');
        formField.classList.add('formField');
        formField.id = 'question' + questionNumbers[i];
        console.log(formField); // delete log later
        let legend = document.createElement('legend');

        quizForm.appendChild(formField);
        formField.appendChild(legend);
        legend.innerHTML = `<span>question ` + questionNumbers[i] + ' of ' + questionNumbers.length + `</span><span id='quizQuestionDisplay' class='quizQuestionDisplay'>${questions[i].calculation}</span>`;

        questions[i].wrongAwnsers.push(questions[i].rightAwnser)
        let options = questions[i].wrongAwnsers;
        console.log(options); // delete log later
        for (let i = 0; i < options.length; i++) {
            let allLabels = [];
            let template = `<input class='hideRadio choice' type='radio' name='choice' value='${options[i]}'/><span class='customRadio'>${alphabet[i]}</span><span class='awnserOption choice'>${options[i]}</span>`;
            let label = template;
            allLabels = document.createElement('label');
            allLabels.classList.add('label');
            allLabels.innerHTML += label;
            formField.appendChild(allLabels);
        };    
    }
}
function navigateForm() {
    const formFields = document.getElementsByClassName('formField');
    let allFormFields  = Array.from(formFields);
    console.log(allFormFields);
    let active = 0;
    let next = 1;
    let previous = (allFormFields.length - 1);
    for(let i = 0; i < allFormFields.length; i++) {
        allFormFields[active].classList.add('active');
        allFormFields[next].classList.add('next');
        allFormFields[previous].classList.add('previous');
    }

    const previousButton = document.querySelector('#previousButton');
    const nextButton = document.querySelector('#nextButton');
    previousButton.onclick = showPrevious();
    nextButton.onclick = showNext();
    console.log(previousButton,nextButton);
    function showNext() {
        if(active < allFormFields.length - 1) {
            nextField(active + 1);
        }
        else {
            nextField(0);
        }
    }
    function showPrevious() {
        if(active > 0) {
            nextField(active - 1);
        }
        else {
            nextField(allFormFields.length - 1);
        }
    }
    function nextField(item) {
        active = item;
        next = active + 1;
        previous = active - 1;
        for (let i = 0; i < allFormFields.length; i++) {
            allFormFields[i].classList.remove('active');
            allFormFields[i].classList.remove('next');
            allFormFields[i].classList.remove('previous');
        }
        if (next >= allFormFields.length) {
            next = 0;
        }
        if (previous === -1) {
            previous = (allFormFields.length - 1);
        }
        allFormFields[active].classList.add('active');
        allFormFields[next].classList.add('next');
        allFormFields[previous].classList.add('previous');
    }
}

function checkAwnser() {
    let allOptions = document.querySelectorAll('input[name="choice"]');
    let correct = '';
    //let points = 0;
    for(let j = 0; j < allOptions.length; j++) {
        if(allOptions[j].value === rightAwnser) {
            correct = allOptions[j];
        }
        if((allOptions[i].checked === true) && (allOptions[i].value === rightAwnser)) {
            allOptions[i].parentElement.classList.add('awnserRight');
            //++points;
        }
        if((allOptions[i].checked === true) && (allOptions[i].value !== rightAwnser)) {
            allOptions[i].parentElement.classList.add('awnserWrong');
            correct.parentElement.classList.add('correctionAwnser');
        }
    }
}
/*
    legend.appendChild(quizQuestionDisplay);
    quizQuestionDisplay.innerText = `${questions[i].calculation}`;

    
        let awnserFields = [];
        let fieldTemplate = ;
        awnserField = fieldTemplate;
        awnserFields.innerHTML += awnserField;
        
        quizForm.appendChild(awnserFields);

        allAwnserFields = document.querySelectorAll('fieldset');
        awnserFields = document.getElementById('question' + questionNumbers[i]);
        allAwnserFields += awnserFields;

        console.log(awnserFields); // delete log later

        
            //checkButton.onclick = checkAwnser();


 
*/       
        
