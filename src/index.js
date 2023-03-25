// Import
import './style.css';
import logo from './img/pokeball.png';
import { handleScroll, handleScrollTop } from './modules/scroll.js';
import cardpopup from './modules/reservationspopup.js';
import { fetchLikes, postLike, calculateLikes } from './modules/likes.js';
import ShowComments from './modules/commentPopup.js';

const img = document.createElement('img');
img.src = logo;

// Scroll Button
window.addEventListener('scroll', handleScroll);
document.getElementById('scroll-to-top-btn').addEventListener('click', handleScrollTop);

// Pokemon Card
const pokemonContainer = document.getElementById('item-container');

const createPokemon = async (pokemon) => {
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

  commentsBtn.addEventListener('click', () => {
    ShowComments.commentPopup(pokemon);
  });

  const reservationsBtn = document.createElement('button');
  reservationsBtn.textContent = 'Reservations';
  reservationsBtn.classList.add('reservations-btn');
  reservationsBtn.setAttribute('id', `${pokemon.id.toString().padStart(1, 0)}`);
  reservationsBtn.addEventListener('click', () => {
    cardpopup(pokemon);
  });

  // Like Button Handle
  const likes = await fetchLikes(pokemon.id);

  const likeBtn = document.createElement('i');
  likeBtn.classList.add('fas', 'fa-heart', 'like-btn');
  likeBtn.setAttribute('data-id', pokemon.id);

  const likeCount = document.createElement('span');
  likeCount.classList.add('like-num');
  likeCount.textContent = likes;
  likeBtn.appendChild(likeCount);

  likeBtn.addEventListener('click', async () => {
  // Like count
    likeCount.textContent = parseInt(likeCount.textContent, 10) + 1;
    // Involvement API
    await postLike(pokemon.id);
  });

  card.appendChild(spriteContainer);
  card.appendChild(name);
  card.appendChild(likeBtn);
  card.appendChild(commentsBtn);
  card.appendChild(reservationsBtn);

  pokemonContainer.appendChild(card);
};

// Fetch API
const fetchPokemons = async (number) => {
  const urls = Array.from({ length: number }, (_, i) => `https://pokeapi.co/api/v2/pokemon/${i + 1}`);
  const responses = await Promise.all(urls.map((url) => fetch(url)));
  const pokemonData = await Promise.all(responses.map((res) => res.json()));
  await Promise.all(pokemonData.map((pokemon) => createPokemon(pokemon)));
};

fetchPokemons(45);
calculateLikes();
export default { createPokemon };
