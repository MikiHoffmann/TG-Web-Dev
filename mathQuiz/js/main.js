const quizStarter = document.getElementById('quizStarter');

quizStarter.onclick = createQuiz();


const quizBackground = document.createElement('div');

function createQuizBackground() {

    document.body.appendChild(quizBackground);
    quizBackground.classList.add('quizBackground');
    quizBackground.appendChild(quizTitle);
    quizTitle.classList.add('quizTitle');
    quizTitle.innerText = '-- Math Problems --';
    quizBackground.appendChild(quizContainer);
    quizContainer.classList.add('quizContainer');
}
function createQuiz() {
    createQuizBackground();
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


function shuffleArray(array) {
    let currentIndex = array.length;
    console.log(currentIndex);
    let randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    };
    return array;
}