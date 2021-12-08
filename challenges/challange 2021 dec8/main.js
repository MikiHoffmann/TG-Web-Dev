const catButton = document.getElementById("cat");
const dogButton = document.getElementById("dog");
const pidgeonButton = document.getElementById("pidgeon");
const popUp = document.getElementById("popUp");

popUp.style.display = 'none';

catButton.onclick =  showCat;
dogButton.onclick =  showDog;
pidgeonButton.onclick =  showPidgeon;

let para = document.createElement('p');
    popUp.appendChild(para);

let span = document.createElement('span');
    span.innerHTML = 'X';


function showCat() {
    popUp.classList.toggle('showPopUp');
    para.innerHTML = '<img src="cat.jpg"/>' + 'dit is een kat';
    para.appendChild(span);
    popUp.style.display = "flex";
    //span.onclick = popUp.style.display = 'none';
}
function showDog() {
    popUp.classList.toggle('showPopUp');
    para.innerHTML = '<img src="dog.jpg"/>' + 'dit is een hond';
    popUp.style.display = "flex";
}
function showPidgeon() {
    popUp.classList.toggle('showPopUp');
    para.innerHTML = '<img src="pidgeon.jpg"/>' + 'dit is een duif';
    popUp.style.display = "flex";
}
window.onclick = function(event) {
    if(event.target == popUp){
        popUp.classList.remove('showPopUp');
        popUp.classList.add('hidePopUp');
        setTimeout(() => {
            popUp.classList.remove('hidePopUp');
            popUp.style.display = 'none';
        }, 800);
    }
}


