// first put all the images in the document
let i = 0;
const carrouselItem = document.querySelectorAll('.carrouselItem');

let slide = document.querySelector('.carrouselContainer');
slide.innerHTML += carrouselItem[i];


const prevOption = document.getElementById('prevButton');
const nextOption = document.getElementById('nextButton');
nextOption.onclick = showNext;
prevOption.onclick = showPrev;

function showNext() {
    i = i + 1;
    i = i % color.length;
    slide.classList.add('animNext');
    setTimeout(() => {
        slide.innerHTML = carrouselItem[i];
        slide.classList.remove('animNext');
    }, 700);
    
};
function showPrev() {
    if(i === 0) {i = color.length}
    i = i + 1;
    i = i % color.length; 
    slide.classList.add('animPrev');
    setTimeout(() => {
        slide.innerHTML = carrouselItem[i];
        slide.classList.remove('animPrev');
    }, 700);
};