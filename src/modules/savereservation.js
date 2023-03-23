const displayreserv = async (inputname, inputdatestart, inputdateend, id, reservationslist) =>{

  const result = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/LwQHc3Vs1lC9z58aI8eY/reservations?item_id=${id}`,
  );

  const reservationsdata = await result.json();

  reservationsdata.forEach((reservation) => {
    const tableitem = document.createElement('tr');
    tableitem.classList.add('tableitem');
    tableitem.innerHTML = `${reservation.date_start} - ${reservation.date_end} by ${reservation.username}`;
    reservationslist.appendChild(tableitem);
  });
};

const addreservation = async (inputname, inputdatestart, inputdateend, id) => {
  await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/LwQHc3Vs1lC9z58aI8eY/reservations/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: id, username: inputname.value, date_start: inputdatestart.value, date_end: inputdateend.value
      }),
    },
  );
  inputname.value = '';
  inputdatestart.value = '';
  inputdateend.value = '';
};

export { displayreserv, addreservation };