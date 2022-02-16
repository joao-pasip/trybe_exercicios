// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  // Adicionar lógica aqui!
  const jokeText = document.querySelector('#jokeContainer');
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  try {
      fetch(API_URL, myObject)
      .then(response => response.json())
      .then(data => {
        jokeText.innerHTML = data.joke;
      });
    } catch (error) {
      console.log('Error!');
    }
};

window.onload = () => fetchJoke();
