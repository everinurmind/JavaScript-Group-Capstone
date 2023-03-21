// Import
import './style.css';
import logo from './img/pokeball.png';

const img = document.createElement('img');
img.src = logo;

// Hamburger/Overlay
const hamburger = document.querySelector('.hamburger');
const overlay = document.querySelector('.overlay');
const closeButton = document.querySelector('.close-button');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('change');
  overlay.classList.toggle('show');
});

closeButton.addEventListener('click', () => {
  hamburger.classList.remove('change');
  overlay.classList.remove('show');
});

// Fetch API
const pokemonContainer = document.getElementById('item-container');

function createPokemon(pokemon) {
  const card = document.createElement('div');
  card.classList.add('pokemon-block');

  const spriteContainer = document.createElement('div');
  spriteContainer.classList.add('img-container');

  const sprite = document.createElement('img');
  sprite.src = pokemon.sprites.front_default;

  spriteContainer.appendChild(sprite);

  const number = document.createElement('p');
  number.textContent = `${pokemon.id.toString().padStart(1, 0)}`;

  const name = document.createElement('p');
  name.classList.add('name');
  name.textContent = pokemon.name;

  const commentsBtn = document.createElement('button');
  commentsBtn.textContent = 'Comments';
  commentsBtn.classList.add('comments-btn');

  const reservationsBtn = document.createElement('button');
  reservationsBtn.textContent = 'Reservations';
  reservationsBtn.classList.add('reservations-btn');

  card.appendChild(spriteContainer);
  card.appendChild(name);
  card.appendChild(commentsBtn);
  card.appendChild(reservationsBtn);
  card.appendChild(number);

  pokemonContainer.appendChild(card);
}

function fetchPokemon(id) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res) => res.json())
    .then((data) => {
      createPokemon(data);
    });
}

function fetchPokemons(number) {
  for (let i = 1; i <= number; i += 1) {
    fetchPokemon(i);
  }
}

fetchPokemons(9);