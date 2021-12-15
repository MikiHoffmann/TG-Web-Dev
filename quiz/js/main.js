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
let questionNumber = '1';
    let question = '10 + 5';
    let right = '15';
    let wrong = ['1','33','-4','12'];
    wrong.push(right);
    let allAwnsers = wrong;
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function fillQuizSections() {
    for(let i = 0; i < allAwnsers.length; i++) {
        let allLabels = [];
        let template = `<label class='label'><input class='hideRadio' type='radio' name='choice' value=''/><span class='customRadio'>${alphabet[i]}</span><span class='awnserOption'>${allAwnsers[i]}</span><label>`;
        let label = template;
        allLabels = document.createElement('span');
        allLabels.innerHTML += label;
        quizAwnserDisplay.appendChild(allLabels);
        console.log(label);
    }
    quizRoundDisplay.innerText = 'question ' + questionNumber + ' of ' + wrong.length;
    quizQuestionDisplay.innerText = question;
}
