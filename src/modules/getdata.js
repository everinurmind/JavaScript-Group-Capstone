/* eslint-disable no-console */
fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps', {
  method: 'POST',
  headers: {
    'Content-type': 'application/json',
    Accept: 'application/json',
  },
})
  .then((response) => response.json())
  .then((response) => console.log(response));