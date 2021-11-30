const prevOption = document.getElementById('prevButton');
const nextOption = document.getElementById('nextButton');
const images = [
    'images/orangeSleeve.jpg',
    'images/orangeBlazer.jpg',
    'images/insidePocket.png',
    'images/cancanTorso.png'
]
let i = 0;
let currentSlide = document.getElementById('imgTemplate');

currentSlide.innerHTML = '<img src=' + images[i] + '/>';

function nextImg() {
    i = i + 1;
    i = i % images.length;

}