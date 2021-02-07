import imgCardTmp from '../templates/imgCardTmp.hbs';
import refs from './refs';

function renderCard(images) {
  const markup = imgCardTmp(images);
  return refs.gallery.insertAdjacentHTML('beforeend', markup);
}

export default renderCard;
