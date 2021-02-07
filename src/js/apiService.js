const fetchImgs = (query, page, key) => {
  const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=12&${key}`;
  return fetch(url)
    .then(response => response.json())
    .then(res => res.hits)
    .catch(error => console.log(error));
};

export default fetchImgs;

// const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=12&${key}`;
