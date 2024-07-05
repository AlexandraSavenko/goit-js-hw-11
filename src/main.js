const form = document.querySelector('form');
const input = document.querySelector('#date-pictures');
const button = document.querySelector('button');
form.addEventListener('submit', handleSearch);
function handleSearch(event) {
  event.preventDefault();
  return event.target.elements.inputtext.value;
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
getPicturesByQuery('blue+car')
  .then(data => console.log(data))
  .catch(error => console.error('Fetch error: ', error));
