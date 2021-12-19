const quizStarter = document.getElementById('quizStarter');
quizStarter.onclick = createQuiz;

function createQuiz() {
    createQuizDisplay();
    createNavButtons();
    createFieldsets();
}
const quizBackground = document.createElement('div');
function createQuizDisplay() {
    document.body.appendChild(quizBackground);
    quizBackground.classList.add('quizBackground');
    let containerTemplate = `<h1>-- Math Problem! --</h1><form id='quizAwnserForm' class='quizAwnserForm'></form><div id='navButtons' class='navButtons'></div>`;
    let quizContainer = document.createElement('div');
    quizContainer.innerHTML = containerTemplate;
    quizContainer.classList.add('quizContainer');
    quizBackground.appendChild(quizContainer);
}
function createNavButtons() {
    const navButtons = [
        {id:'previousButton',text:'previous'},
        //{id:'checkButton',text:'check my awnser'},
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
    constructor(calculations,rightAwnsers,wrongAwnsers) {
        this.calculations = calculations;
        this.rightAwnsers = rightAwnsers;
        this.wrongAwnsers = wrongAwnsers;
    }
};
let questions = [];
questions[0] = new MathProblems('10 + 5',15,[1,33,-4,12]);
questions[1] = new MathProblems('1 + 2',3,[2,43,-6,100,7,8]);
questions[2] = new MathProblems('6 - 2',4,[55,33,113,44]);
   

const keys = questions.keys();
let questionNumbers =[];
let questionNumber;
let rightAwnser = questions.rightAwnsers;
function createFieldsets() {
    quizAwnserForm = document.getElementById('quizAwnserForm');
    let awnserField;
    for(let k of keys){
    questionNumber = k + 1;
    questionNumbers.push(questionNumber);
}
    for(let f = 0; f < questions.length; f++) {
        let quizRoundDisplay = document.createElement('span');
        quizRoundDisplay.innerText = 'question ' + questionNumbers[f] + ' of ' + questions.length;
        let awnserFields = [];
        awnserFields = document.createElement('fieldset');
        let fieldTemplate = `<legend id='quizQuestionDisplay' class='quizQuestionDisplay'>${questions[f].calculations}</legend>`;
        awnserField = fieldTemplate;
        awnserFields.innerHTML += awnserField;
        awnserFields.id = 'question' + questionNumbers[f];
        
        quizAwnserForm.appendChild(quizRoundDisplay);
        quizAwnserForm.appendChild(awnserFields);
        let allAwnserFields = [];
        allAwnserFields = document.querySelectorAll('fieldset');
        awnserFields = document.getElementById('question' + questionNumbers[f]);
        allAwnserFields += awnserFields;
        console.log(awnserFields); // delete log later
        questions[f].wrongAwnsers.push(questions[f].rightAwnsers)
        let options = questions[f].wrongAwnsers;
        console.log(options); // delete log later
        let checkButton = document.createElement('button');
        for (let i = 0; i < options.length; i++) {
            let allLabels = [];
            let template = `<input class='hideRadio choice' type='radio' name='choice' value='${options[i]}'/><span class='customRadio'>${alphabet[i]}</span><span class='awnserOption choice'>${options[i]}</span>`;
            let label = template;
            allLabels = document.createElement('label');
            allLabels.classList.add('label');
            allLabels.innerHTML += label;
            awnserFields.appendChild(allLabels);
            awnserFields.appendChild(checkButton);
            checkButton.classList.add('button','checkButton');
            checkButton.innerText = 'check my awnser';
        
        }
            
        };
          
    //checkButton.onclick = checkAwnser;
    }

function checkAwnser() {
    let awnserNo = document.getElementById('question' + questionNumber);
    let checkedRadio = awnserNo.querySelectorAll('input[name="choice"]');
    let allOptions = checkedRadio;
    let correct = [];
    //let points = 0;
    for(let j = 0; j < allOptions.length; j++) {
        if(allOptions[j].value === rightAwnser) {
            correct = allOptions[j];
        }
    }
    for(let i = 0; i < checkedRadio.length; i++) {
        if((checkedRadio[i].checked === true) && (checkedRadio[i].value === rightAwnser)) {
            checkedRadio[i].parentElement.classList.add('awnserRight');
            //++points;
        }
        if((checkedRadio[i].checked === true) && (checkedRadio[i].value !== rightAwnser)) {
            checkedRadio[i].parentElement.classList.add('awnserWrong');
            correct.parentElement.classList.add('correctionAwnser');
        }
    }
}

function shuffleArray(array) {
    let currentIndex = array.length;
    console.log(currentIndex);
    let randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
}