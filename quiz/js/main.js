const quizStarter = document.getElementById('quizStarter');
quizStarter.onclick = createQuiz;

function createQuiz() {
    createQuizLayout();
    fillQuizSections();
}
const quizBackground = document.createElement('div');
const prevButton = document.createElement('button');
const quizContainer = document.createElement('div');
const nextButton = document.createElement('button');
const quizHeader = document.createElement('h1');
const quizRoundDisplay = document.createElement('span');
const quizQuestionDisplay = document.createElement('div');
const quizAwnserDisplay = document.createElement('div');

function createQuizLayout() {
    document.body.appendChild(quizBackground);
    quizBackground.appendChild(prevButton);
    quizBackground.appendChild(quizContainer);
    quizBackground.appendChild(nextButton);
    quizContainer.appendChild(quizHeader);
    quizContainer.appendChild(quizRoundDisplay);
    quizContainer.appendChild(quizQuestionDisplay);
    quizContainer.appendChild(quizAwnserDisplay);

    quizBackground.classList.add('quizBackground');
    prevButton.innerText = 'previous';
    prevButton.classList.add('button');
    nextButton.innerHTML = 'next';
    nextButton.classList.add('button');
    quizContainer.classList.add('quizContainer');
    quizHeader.innerText = '-- Math Problem! --';
    quizQuestionDisplay.classList.add('quizQuestionDisplay');
    quizAwnserDisplay.classList.add('quizAwnserDisplay');
}

function fillQuizSections() {

    const labelTemplate = document.createElement('label');
    const radioTemplate = document.createElement('input');
    radioTemplate.type = 'radio';
    radioTemplate.value = '';
    const customRadioTemplate = document.createElement('span');
    customRadioTemplate.innerText = 'x';
    const optionTemplate = document.createElement('span');
    optionTemplate.innerText = radioTemplate.value;
    labelTemplate.appendChild(radioTemplate);
    labelTemplate.appendChild(customRadioTemplate);
    labelTemplate.appendChild(optionTemplate);

    labelTemplate.classList.add('label');
    radioTemplate.classList.add('hideRadio');
    customRadioTemplate.classList.add('customRadio');
    optionTemplate.classList.add('awnserOption');

    let questionNumber = '1';
    let question = '10 + 5';
    let right = '15';
    let wrong = ['1','33','-4','12'];

    let awnser;
    let template = `<label class='label'><input class='hideRadio' type='radio' value='${awnser}'/><span class='customRadio'>x</span><span class='awnserOption'>${awnser}</span><label>`;
    let allLabels = [];
for(let i = 0; i < wrong.length; i++) {
    let label = template;
    label.replace(`${awnser}`, wrong[i]);
    allLabels = document.createElement('span');
    allLabels.innerHTML += label;
    quizAwnserDisplay.appendChild(allLabels);
}
    
    quizRoundDisplay.innerText = 'question ' + questionNumber + ' of ' + wrong.length;
    quizQuestionDisplay.innerText = question;
    /*
    for(let i = 0; i < wrong.length; i++) {
        let label = document.createElement('span');
        label.innerHTML = labelTemplate;
        label.getElementsByClassName('hideRadio');
        label.getElementsByClassName('customRadio')
    }


    let allAwnsers = [];
    let options = wrong.length +1;

    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    const alphabet = alpha.map((x) => String.fromCharCode(x));
    console.log(alphabet);

    */
}