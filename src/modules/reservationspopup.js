import { displayreserv, addreservation } from './savereservation.js';

const cardpopup = (pokemon) => {
  const popup = document.createElement('modal');
  popup.classList.add('openpopup');
  const maincontainer = document.createElement('div');
  maincontainer.classList.add('maincontainer');

  const closecontainer = document.createElement('div');
  closecontainer.classList.add('closecontainer');
  const closeButton = document.createElement('span');
  closeButton.innerHTML = '&times;';
  closeButton.classList.add('closingbutton');
  const titlebutton = document.createElement('p');
  titlebutton.innerHTML = '<h2 class="t-headline">Reservations <span class="t-span">  Window</span></h2>';
  closecontainer.append(titlebutton, closeButton);

  const closeandimage = document.createElement('div');
  closeandimage.classList.add('closeandimage');
  const pokemonimage = document.createElement('img');
  pokemonimage.src = pokemon.sprites.front_default;
  pokemonimage.classList.add('pokemonimage');
  closeandimage.append(pokemonimage);

  const pokemoname = document.createElement('div');
  pokemoname.classList.add('pokemoname');
  const pokemontitle = document.createElement('h3');
  pokemontitle.classList.add('pokemontitle');
  pokemontitle.textContent = pokemon.name;
  pokemoname.append(pokemontitle);

  const characteristics = document.createElement('div');
  characteristics.classList.add('characteristics');
  const weight = document.createElement('p');
  weight.textContent = `Weigth: ${pokemon.weight} Kg`;
  weight.classList.add('weigth');
  const basexperience = document.createElement('p');
  basexperience.textContent = `Base Experience: ${pokemon.base_experience} points`;
  basexperience.classList.add('basexperience');
  const height = document.createElement('p');
  height.textContent = `Height: ${pokemon.height} feet`;
  height.classList.add('height');
  characteristics.append(weight, basexperience, height);

  const reservations = document.createElement('div');
  reservations.classList.add('reservations');
  const reservationstitle = document.createElement('h3');
  reservationstitle.textContent = 'Reservations';
  reservationstitle.classList.add('reservationstitle');

  const reservationslist = document.createElement('table');
  reservationslist.classList.add('reservationslist');
  reservations.append(reservationstitle, reservationslist);

  const addareservation = document.createElement('div');
  addareservation.classList.add('addareservation');
  const addareservationtitle = document.createElement('h3');
  addareservationtitle.classList.add('addareservationtitle');
  addareservationtitle.textContent = 'Add a reservation';
  const inputreserv = document.createElement('ul');
  inputreserv.classList.add('inputreserv');

  const namereservation = document.createElement('li');
  namereservation.classList.add('namereservation');
  const inputname = document.createElement('input');
  inputname.setAttribute('type', 'text');
  inputname.setAttribute('id', 'name');
  inputname.setAttribute('required', 'required');
  inputname.setAttribute('placeholder', 'Your name');
  namereservation.append(inputname);

  const datereservationstart = document.createElement('li');
  datereservationstart.classList.add('datereservationstart');
  const inputdatestart = document.createElement('input');
  inputdatestart.setAttribute('type', 'date');
  inputdatestart.setAttribute('id', 'startdate');
  inputdatestart.setAttribute('placeholder', 'Start date');
  inputdatestart.setAttribute('required', '');
  datereservationstart.append(inputdatestart);

  const datereservationend = document.createElement('li');
  datereservationend.classList.add('datereservationend');
  const inputdateend = document.createElement('input');
  inputdateend.setAttribute('type', 'date');
  inputdateend.setAttribute('id', 'enddate');
  inputdateend.setAttribute('placeholder', 'End date');
  inputdateend.setAttribute('required', ' ');
  datereservationend.append(inputdateend);

  const reservebutton = document.createElement('button');
  reservebutton.setAttribute('type', 'submit');
  reservebutton.setAttribute('id', 'reservebutton');
  reservebutton.innerHTML = 'Reserve';

  inputreserv.append(namereservation, datereservationstart, datereservationend, reservebutton);
  addareservation.append(addareservationtitle, inputreserv);

  maincontainer.append(closecontainer, closeandimage, pokemoname, characteristics,
    reservations, addareservation);
  popup.append(maincontainer);
  document.querySelector('body').appendChild(popup);

  displayreserv(inputname, inputdatestart, inputdateend, pokemon.id, reservationslist);

  reservebutton.addEventListener('click', () => {
    if ((inputname.value && inputdatestart.value && inputdateend.value) !== '') {
      addreservation(inputname, inputdatestart, inputdateend, pokemon.id, reservationslist);
      const tableitem = document.createElement('tr');
      tableitem.classList.add('tableitem');
      tableitem.innerHTML = `${inputdatestart.value} - ${inputdateend.value} by ${inputname.value}`;
      reservationslist.appendChild(tableitem);
    }
  });

  closeButton.addEventListener('click', () => {
    popup.classList.remove('openpopup');
    window.location.reload();
  });
};

export default cardpopup;