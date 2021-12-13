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
]
console.log(images);

let active = 0;
let next = 1;
let previous = (images.length - 1)
const galleryContainer = document.getElementById('galleryContainer');
for(let i = 0; i < images.length; i++) {
    let galleryItem = [];
    galleryItem = document.createElement('img');
    galleryItem.src = 'images/' +  images[i];
    galleryContainer.appendChild(galleryItem);
    console.log(galleryItem);
    for(let i = 0; i < galleryItem.length; i++) {
        galleryItem[0].classList.add('active');
        galleryItem[1].classList.add('next');
        galleryItem[length - 1].classList.add('previous');
    }
}

console.log(galleryContainer);

