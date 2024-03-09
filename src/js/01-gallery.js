import SimpleLightbox from "simplelightbox";
// Additional styles import
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

galleryItems.forEach((imgs) => {

    let li = `
    <li class="gallery__item">
        <a class="gallery__link" href="${imgs.original}">
            <img
                class="gallery__image"
                src="${imgs.preview}"
                alt="${imgs.description}"
            />
        </a>
    </li>
    `;
    gallery.innerHTML += li;
});


const resultImg = new SimpleLightbox(".gallery a", {captionsData: "alt", captionDelay: 250});
resultImg.on("show.simplelightbox");    