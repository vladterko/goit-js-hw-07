import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContent = document.querySelector('.gallery');

const markup = galleryItems.map(({preview, original, description}) => `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </div>`
    ).join('');

galleryContent.insertAdjacentHTML('beforeend', markup);
galleryContent.addEventListener('click', onPreviewImgClick);

let instance;

function onPreviewImgClick(evt) {
    evt.preventDefault();
    if (evt.target.nodeName !== 'IMG') {
        return;
    } else {
        instance = basicLightbox.create(`<img src="${evt.target.dataset.source}">`);
        instance.show();
        window.addEventListener('keydown', onEscapeModalClose);
    }
}

function onEscapeModalClose(evt) {
    if (evt.code !== 'Escape') {
        return;
    } else {
        instance.close();
        window.removeEventListener('keydown', onEscapeModalClose);
    }
}
