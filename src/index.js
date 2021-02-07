import './styles.css';

import fetchImgs from './js/apiService';
import renderCard from './js/renderCard';
import refs from './js/refs';

const key = 'key=15482023-2b053900c18c0e4b941c4a2ed';
const page = 1;

refs.searchForm.addEventListener('submit', handleForm);

function handleForm(e) {
  e.preventDefault();
  const input = e.target.elements[0];
  const inputValue = input.value;

  refs.gallery.innerHTML = '';

  if (inputValue.length > 0) {
    fetchImgs(inputValue, page, key)
      // .then(response => response.json())
      .then(images => {
        renderCard(images);
      })
  }
}

refs.loadMoreBtn.addEventListener('click', () => {
  fetchImgs(inputValue, page, key)
    // .then(response => response.json())
    .then(images => {
      renderCard(images);
    })
})

// scrollToBottom = () => {
//   window.scrollTo({
//     top: document.documentElement.scrollHeight,
//     behavior: "smooth"
//   });
// };
