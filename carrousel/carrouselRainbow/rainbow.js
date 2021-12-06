const slider = document.querySelector('.galleryWrapper');
const slides = document.querySelectorAll('.carrouselItem');
const prevButton = document.querySelector('#prevButton');
const nextButton = document.querySelector('#nextButton');

let active = 0;
let next = 1;
let previous = (slides.length - 1);

prevButton.onclick = showPrevious;
nextButton.onclick = showNext;

function showNext() {
    if(active < slides.length - 1) {
        nextSlide(active + 1);
    }
    else {
        nextSlide(0);
    }
}
function showPrevious() {
    if(active > 0) {
        nextSlide(active - 1);
    }
    else {
        nextSlide(slides.length - 1);
    }
}
function nextSlide(number) {
    active = number;
    next = active + 1;
    previous = active - 1;

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
        slides[i].classList.remove('next');
        slides[i].classList.remove('previous');
    }
    if (next >= slides.length) {
        next = 0;
    }
    if (previous === -1) {
        previous = (slides.length - 1);
    }
    slides[active].classList.add('active');
    slides[next].classList.add('next');
    slides[previous].classList.add('previous');
}