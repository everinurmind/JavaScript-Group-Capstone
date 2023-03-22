// Import
import './style.css';
import logo from './img/pokeball.png';
import cardpopup from './modules/reservationspopup';
import ShowComments from './modules/commentPopup.js';

const img = document.createElement('img');
img.src = logo;

// Scroll Button
window.addEventListener('scroll', () => {
    const scrollBtn = document.getElementById('scroll-to-top-btn');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollBtn.style.display = 'block';
    } else {
        scrollBtn.style.display = 'none';
    }
});

document.getElementById('scroll-to-top-btn').addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

// Fetch API
const pokemonContainer = document.getElementById('item-container');

const createPokemon = (pokemon) => {
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

    const likeBtn = document.createElement('i');
    likeBtn.classList.add('fas', 'fa-heart', 'like-btn');

    const commentsBtn = document.createElement('button');
    commentsBtn.textContent = 'Comments';
    commentsBtn.classList.add('comments-btn');

    commentsBtn.addEventListener('click', () => {
        console.log(pokemon.abilities);
        ShowComments.commentPopup(pokemon);
    });


    const reservationsBtn = document.createElement('button');
    reservationsBtn.textContent = 'Reservations';
    reservationsBtn.classList.add('reservations-btn');
    reservationsBtn.setAttribute('id', `${pokemon.id.toString().padStart(1, 0)}`);
    reservationsBtn.setAttribute('onclick', 'cardpopup(id)');

    card.appendChild(spriteContainer);
    card.appendChild(name);
    card.appendChild(commentsBtn);
    card.appendChild(reservationsBtn);
    card.appendChild(likeBtn);
    // card.appendChild(number);

    pokemonContainer.appendChild(card);
};

const fetchPokemons = async(number) => {
    const urls = Array.from({ length: number }, (_, i) => `https://pokeapi.co/api/v2/pokemon/${i + 1}`);
    const responses = await Promise.all(urls.map((url) => fetch(url)));
    const pokemonData = await Promise.all(responses.map((res) => res.json()));
    pokemonData.forEach((pokemon) => createPokemon(pokemon));
};

fetchPokemons(20);

export default { createPokemon }