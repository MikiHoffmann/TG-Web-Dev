let images = [
    'bridge1.jpg',
    'bridge2.jpg',
    'bridge3.jpg',
    'bridge4.jpg',
    'bridge5.jpg',
    'bridge6.jpg',
    'bridge7.jpg',
    'bridge8.jpg',
    'bridge9.jpg',
    'bridge10.jpg'
];

const galleryContainer = document.getElementById('galleryContainer');
let galleryItems = [];

for(let i = 0; i < images.length; i++) {
    let galleryItem = document.createElement('img');
    galleryContainer.appendChild(galleryItem);
    galleryItem.src = 'images/' +  images[i];
    galleryItems.push(galleryItem);
}
console.log(galleryItems);
let active = 0;
let next = 1;
let previous = (galleryItems.length - 1);
for(let i = 0; i < galleryItems.length; i++) {
    galleryItems[active].classList.add('active');
    galleryItems[next].classList.add('next');
    galleryItems[previous].classList.add('previous');
}

const previousButton = document.querySelector('#previousButton');
const nextButton = document.querySelector('#nextButton');
previousButton.onclick = showPrevious;
nextButton.onclick = showNext;

function showNext() {
    if(active < galleryItems.length - 1) {
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
        nextSlide(galleryItems.length - 1);
    }
}
function nextSlide(item) {
    active = item;
    next = active + 1;
    previous = active - 1;
    for (let i = 0; i < galleryItems.length; i++) {
        galleryItems[i].classList.remove('active');
        galleryItems[i].classList.remove('next');
        galleryItems[i].classList.remove('previous');
    }
    if (next >= galleryItems.length) {
        next = 0;
    }
    if (previous === -1) {
        previous = (galleryItems.length - 1);
    }
    galleryItems[active].classList.add('active');
    galleryItems[next].classList.add('next');
    galleryItems[previous].classList.add('previous');
}
