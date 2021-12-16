const quizStarter = document.getElementById('quizStarter');
quizStarter.onclick = createQuiz;

function createQuiz() {
    createQuizLayout();
    fillQuizSections();
    createButtons();
}
const quizBackground = document.createElement('div');

function createQuizLayout() {
    document.body.appendChild(quizBackground);
    quizBackground.classList.add('quizBackground');
    let containerTemplate = `<h1>-- Math Problem! --</h1><span id='quizRoundDisplay'></span><div id='quizQuestionDisplay' class='quizQuestionDisplay'></div><div id='quizAwnserDisplay' class='quizAwnserDisplay'></div><div id='buttonDisplay' class='buttonDisplay'></div>`;
    let quizContainer = document.createElement('div');
    quizContainer.innerHTML = containerTemplate;
    quizContainer.classList.add('quizContainer');
    quizBackground.appendChild(quizContainer);
}
let questionNumber = '1';
let question = '10 + 5';
let rightAwnser = '15';
let wrong = ['1','33','-4','12'];
wrong.push(rightAwnser);
let allAwnsers = wrong;
const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function fillQuizSections() {
    for(let i = 0; i < allAwnsers.length; i++) {
        let allLabels = [];
        let template = `<input class='hideRadio choice' type='radio' name='choice' value='${allAwnsers[i]}'/><span class='customRadio'>${alphabet[i]}</span><span class='awnserOption choice'>${allAwnsers[i]}</span>`;
        let label = template;
        allLabels = document.createElement('label');
        allLabels.classList.add('label');
        allLabels.innerHTML += label;
        quizAwnserDisplay.appendChild(allLabels);
    }
    quizRoundDisplay.innerText = 'question ' + questionNumber + ' of ' + wrong.length;
    quizQuestionDisplay.innerText = question;
}
function createButtons() {
    const buttons = [
        {id:'previous',text:'previous'},
        {id:'check',text:'check my awnser'},
        {id:'next',text:'next'}
    ];
    for(let i = 0; i < buttons.length; i++) {
        let buttonTemplate = `<button id='${buttons[i].id}' class='button'>${buttons[i].text}</button>`;
        let button = buttonTemplate;
        buttonDisplay.innerHTML += button;
    }
    const check = document.getElementById('check');
    check.onclick = checkAwnser;
}
function checkAwnser() {
    let checkedRadio = document.getElementsByClassName('choice');
    for(let i = 0; i < checkedRadio.length; i++) {
        if((checkedRadio[i].checked === true) && (checkedRadio[i].value === rightAwnser)) {
            checkedRadio[i].parentElement.classList.toggle('awnserRight');
        }
        else if(checkedRadio[i].checked === true) {
            checkedRadio[i].parentElement.classList.toggle('awnserWrong');
        }
    }
}
