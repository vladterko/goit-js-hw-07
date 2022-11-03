import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContent = document.querySelector('.gallery');

const markup = galleryItems.map(({preview, original, description}) => `
    <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`
    ).join('');

galleryContent.insertAdjacentHTML('beforeend', markup);

new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
