// first put all the images in the document

const images = [
    "orangeSleeve.jpg",
    "orangeBlazer.jpg",
    "insidePocket.png",
    "cancanTorso.png"
];
let i = 0;
let slide = document.querySelector('.carrouselContainer');
slide.innerHTML += '<img class="carrouselImg" src="images/' + images[i] + '"/>'


const prevOption = document.getElementById('prevButton');
const nextOption = document.getElementById('nextButton');
nextOption.onclick = showNext;
prevOption.onclick = showPrev;

function showNext() {
    i = i + 1;
    i = i % images.length;
    slide.classList.add('animNext');
    setTimeout(() => {
        slide.innerHTML += '<img class="carrouselImg"src="images/' + images[i] + '"/>';
        slide.classList.remove('animNext');
    }, 700);
    
};
function showPrev() {
    if(i === 0) {i = images.length}
    i = i + 1;
    i = i % images.length; 
    slide.classList.add('animPrev');
    setTimeout(() => {
        slide.innerHTML = '<img class="carrouselImg"src="images/' + images[i] + '"/>';
        slide.classList.remove('animPrev');
    }, 700);
};
