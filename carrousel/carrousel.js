const prevOption = document.getElementById('prevButton');
const nextOption = document.getElementById('nextButton');
const images = [
    'orangeSleeve.jpg',
    'orangeBlazer.jpg',
    'insidePocket.png',
    'cancanTorso.png'
]
let i = 0;
let currentSlide = document.getElementById('imgTemplate');

currentSlide.innerHTML = '<img src="images/' + images[i] + '"/>';

nextOption.onclick = showNext;
prevOption.onclick = showPrev;

function showNext() {
    i = i + 1;
    i = i % images.length;
    currentSlide.dataset.nextImg = images[i];
    setTimeout(() => {
        currentSlide.innerHTML = '<img src="images/' + images[i] + '"/>';
    }, 500);
    
};
function showPrev() {
    if(i === 0) {i = images.length}
    i = i - 1;
    i = i % images.length;
    currentSlide.innerHTML = '<img src="images/' + images[i] + '"/>';
};