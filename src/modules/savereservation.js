const addreservation = async (inputname, inputdatestart, inputdateend, id) => {
    await fetch(
        'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ipgqEHaKcpkeW71IX5YM/reservations', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 'item_id': id, 'username': inputname.value, 'date_start': inputdatestart.value, 'end': inputdateend.value,}),
        },
      );
      inputname.value = '';
      inputdatestart.value = '';
      inputdateend.value = '';
}

export default addreservation;