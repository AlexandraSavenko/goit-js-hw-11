import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const form = document.querySelector('form');
const input = document.querySelector('#date-pictures');
const button = document.querySelector('button');
const gallery = document.querySelector('.gallery');
form.addEventListener('submit', handleSearch);
function handleSearch(event) {
  event.preventDefault();
  const queryResult = event.target.elements.inputtext.value;
  getPicturesByQuery(queryResult.toLowerCase().trim())
    .then(data => {
      console.log(data);
      createItem(data.hits);
    })
    .catch(error => alert('Fetch error: ', error.message))
    .finally(() => form.reset());
}

function getPicturesByQuery(query) {
  const API_KEY = '44790874-b72b714502b79af1442269c5d';
  return fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${query}`).then(
    res => {
      console.log(res);
      if (!res.ok) {
        throw new Error(`my mistake is ${res.status}`);
      }
      return res.json();
    }
  );
}

function createItem(items) {
  gallery.innerHTML = '';
  const myGallery = items
    .map(
      item =>
        `<li class="gallery-item">
      <a href="${item.largeImageURL}" class="gallery-link">
    <img src="${item.webformatURL}" alt="${item.tags}" class="gallery-image" />
  </a> 
  <div class="item-info">
<div class="item-info-box">
  <p class="likes name">Likes</p>
  <p class="likes value">${item.likes}</p>
</div>
<div class="item-info-box">
  <p class="views name">Views</p>
  <p class="views value">${item.views}</p>
</div>
<div class="item-info-box">
  <p class="com name">Comments</p>
  <p class="com value">${item.comments}</p>
</div>
<div class="item-info-box">
  <p class="downl name">Downloads</p>
  <p class="downl value">${item.downloads}</p>
</div>
</div>
  </li>
`
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', myGallery);
  let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
}

document.addEventListener('DOMContentLoaded', () => {
  let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
});
