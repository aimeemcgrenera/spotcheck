import fetch from 'isomorphic-fetch';
import SpotNew from '../containers/SpotNew';

function search(odd_even, direction, street) {
  return fetch(`api/zone?odd_even=${odd_even}&street_direction=${direction}&street_name=${street}`, {
    method: 'GET',
    accept: 'application/json',
  }).then(results => parseJSON(results))
    .then((data) => {
      return data;
    }).catch(err => {throw err})
}

function parseJSON(response) {
  return response.json();
}

const ZoneSearch = { search };
export default ZoneSearch;
