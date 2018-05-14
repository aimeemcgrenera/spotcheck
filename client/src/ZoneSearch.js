import fetch from 'isomorphic-fetch';
import React from 'react';

export default function ZoneSearch(odd_even, direction, street) {
  fetch(`api/zone?odd_even=${odd_even}&street_direction=${direction}&street_name=${street}`, {
    method: 'GET',
    accept: 'application/json',
  }).then(results => parseJSON(results))
    .then((data) => {
      console.log(data);
    }).catch(err => {throw err})

  return(
    <div>

    </div>
  )
}

function parseJSON(response) {
  return response.json();
}
