import fetch from 'isomorphic-fetch';

function search(odd_even, direction, street) {
  return fetch(`api/zone?odd_even=${odd_even}&street_direction=${direction}&street_name=${street}`, {
    method: 'GET',
    accept: 'application/json',
  }).then(results => parseJSON(results))
    .then((data) => {
      console.log('Check this JSON!', data);
    }).catch(err => {throw err})
}

function parseJSON(response) {
  return response.json();
}

const Client = { search };
export default Client;
