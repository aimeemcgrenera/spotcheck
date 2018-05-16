import fetch from 'isomorphic-fetch';

export function fetchZones() {
  return fetch('api/allzones')
    .then(res => {
      return res.json()
    }).then(zones => {
      return zones
    }).catch(error => console.log(error));
  }
