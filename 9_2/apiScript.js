const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myFetch = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  
  fetch(API_URL, myFetch)
    .then(response => response.json())
    .then(response => {
      let message = response.joke;
      document.getElementById('jokeContainer').innerHTML = message;
    });
};

window.onload = () => fetchJoke();