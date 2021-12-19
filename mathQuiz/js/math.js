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
    let containerTemplate = `<h1>-- Math Problem! --</h1><span id='quizRoundDisplay'></span><div id='quizQuestionDisplay' class='quizQuestionDisplay'></div><form id='quizAwnserForm' class='quizAwnserForm'></form><div id='navButtons' class='navButtons'></div>`;
    let quizContainer = document.createElement('div');
    quizContainer.innerHTML = containerTemplate;
    quizContainer.classList.add('quizContainer');
    quizBackground.appendChild(quizContainer);
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
let questionNumber = 1;
let question = '10 + 5';
let rightAwnser = '15';
let wrong = ['1','33','-4','12'];
wrong.push(rightAwnser);
let allAwnsers = wrong;
const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function shuffleArray(array) {
    let currentIndex = array.length
    let randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
}

const awnserField = document.createElement('fieldset');
function createFieldsets() {
    shuffleArray(allAwnsers);
    quizAwnserForm = document.getElementById('quizAwnserForm');
    quizAwnserForm.appendChild(awnserField);
    awnserField.id = 'question' + questionNumber;
    for(let i = 0; i < allAwnsers.length; i++) {
        let allLabels = [];
        let template = `<input class='hideRadio choice' type='radio' name='choice' value='${allAwnsers[i]}'/><span class='customRadio'>${alphabet[i]}</span><span class='awnserOption choice'>${allAwnsers[i]}</span>`;
        let label = template;
        allLabels = document.createElement('label');
        allLabels.classList.add('label');
        allLabels.innerHTML += label;
        awnserField.appendChild(allLabels);
    }
    
    quizRoundDisplay.innerText = 'question ' + questionNumber + ' of ' + wrong.length;
    quizQuestionDisplay.innerText = question;
    checkButton.onclick = checkAwnser;
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
