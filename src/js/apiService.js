// const key = 'key=15482023-2b053900c18c0e4b941c4a2ed';

export default {
  page: 1,
  searchQuery: '',
  key: 'key=15482023-2b053900c18c0e4b941c4a2ed',

  fetchImages () {
    const url = `https://pixabay.com/api?image_type=photo&orientation=horizontal&q=${this.query}&per_page=12&${this.key}&page=${this.page}`;

    return fetch(url)
      .then(response => response.json())
      .then(({hits}) => {
        this.page += 1;
        return hits;
      })
      .catch(error => console.log(error));
  },

  resetPage() {
    this.page = 1;
  },

  get query() {
    return this.searchQuery;
  },

  set query(value) {
    this.searchQuery = value;
  }
}
