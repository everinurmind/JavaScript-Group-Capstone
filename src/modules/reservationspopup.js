import closing from '../img/closebutton.png' 

window.cardpopup = (id) => {
  const fetchPokemons = async (number) => {
    const urls = Array.from({ length: number }, (_, i) => `https://pokeapi.co/api/v2/pokemon/${i + 1}`);
    const responses = await Promise.all(urls.map((url) => fetch(url)));
    const pokemonData = await Promise.all(responses.map((res) => res.json()));
    console.log(pokemonData);
    pokemonData.forEach((pokemon) => {
      if ( id == pokemon.id) {
      const popup = document.createElement('div');
      popup.classList.add('openpopup');
      const maincontainer = document.createElement('div');
      maincontainer.classList.add('maincontainer')
      
      const closeandimage = document.createElement('div')
      closeandimage.classList.add('closeandimage');
      const closeButton = document.createElement('img');
      closeButton.src = closing;
      closeButton.classList.add('closingbutton');
      const pokemonimage = document.createElement('img');
      pokemonimage.src = pokemon.sprites.front_default;
      pokemonimage.classList.add('pokemonimage');
      closeandimage.append(pokemonimage, closeButton);

      const pokemoname = document.createElement('div');
      pokemoname.classList.add('pokemoname');
      const pokemontitle = document.createElement('h3');
      pokemontitle.classList.add('pokemontitle');
      pokemontitle.textContent = pokemon.name;
      pokemoname.append(pokemontitle);

      const characteristics = document.createElement('div');
      characteristics.classList.add('characteristics');
      const weight = document.createElement('p');
      weight.textContent = 'Weigth: '+ pokemon.weight + ' Kg';
      weight.classList.add('weigth');
      const basexperience = document.createElement('p');
      basexperience.textContent = 'Base Experience: '+ pokemon.base_experience + ' points';
      basexperience.classList.add('basexperience');
      const height = document.createElement('p');
      height.textContent = 'Height: '+ pokemon.height + ' feet';
      height.classList.add('height');
      characteristics.append(weight, basexperience, height);

      const reservations = document.createElement('div');
      reservations.classList.add('reservations');
      const reservationstitle = document.createElement('h3');
      reservationstitle.textContent = 'Reservations';
      reservations.append(reservationstitle);

      maincontainer.append(closeandimage, pokemoname, characteristics, reservations);
      popup.append(maincontainer);
      document.querySelector('body').appendChild(popup);

      closeButton.addEventListener('click', () => {
        popup.classList.remove('openpopup');
      })
  }})
  }
      fetchPokemons(9)      
}