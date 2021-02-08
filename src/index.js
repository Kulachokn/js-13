import './styles.css';

import apiService from './js/apiService';
import renderCard from './js/renderCard';
import loadMoreBtn from './js/components/load-more-btn';
import refs from './js/refs';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/src/styles/main.scss';

let lightBox;
let indexCurrentImage;
let nextImage;

loadMoreBtn.refs.button.addEventListener('click', fetchImages);

refs.searchForm.addEventListener('submit',
  function handleForm(e) {
    e.preventDefault();
    const form = e.currentTarget;
    apiService.query = form.elements.query.value;

    refs.gallery.innerHTML = '';
    apiService.resetPage();

    if (apiService.query.length > 0) {
      fetchImages();
    }
  });

refs.gallery.addEventListener('click', event => {
  event.preventDefault();
  if (event.target.nodeName === "IMG") {
    const activeImage = event.target;
    const activeImageLargeURL = activeImage.dataset.src;
    const activeImageLargeALT = activeImage.alt;

    lightBox = basicLightbox.create(`
    <img src="${activeImageLargeURL}" alt="${activeImageLargeALT}" width="850" height="600">
`)
    console.log(lightBox);
    indexCurrentImage = Number(event.target.dataset.index);
    lightBox.show()
  }
  window.addEventListener('keydown', handlePressKey);
});

function handlePressKey(e) {
  if (e.code === 'Escape') {
    lightBox.close();
    window.removeEventListener('keydown', controlsLightBox);
  }
}

function fetchImages() {
  loadMoreBtn.disable();

  apiService.fetchImages()
    .then(images => {
      if (images.length === 0) {
        loadMoreBtn.hideBtn();
        return;
      }
        renderCard(images);
        loadMoreBtn.show();
        loadMoreBtn.enable();

    })
}

// function scrollToBottom() {
//   window.scrollTo({
//     top: document.documentElement.scrollHeight,
//     behavior: "smooth"
//   });
// };
