// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";
const galleryPick = document.querySelector('.gallery');
const createdPics = createPics(galleryItems);
console.log(galleryItems);
galleryPick.insertAdjacentHTML('beforeend', createdPics)

// galleryPick.addEventListener('click', onImgPic)


function createPics(galleryItems) {
    return galleryItems.map(({preview, original, description})=> { 
  return `<a class="gallery__item" href="${original}">
  <img class="gallery__image"  src="${preview}" alt="${description}" />
</a>`
    }).join("")
}

let lightBox = new SimpleLightbox(".gallery a",{
    captionsData: "alt",
    captionDelay: 250,
    captionPosition:"bottom",
})
console.log(galleryItems);
