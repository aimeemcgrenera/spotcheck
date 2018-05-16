import fetch from 'isomorphic-fetch';

export function fetchZones(dispatch) {
  return function(dispatch) {
    dispatch({type: 'LOADING_ZONES'});
    return fetch('http://localhost:3000/api/allzones')
    .then(response => {
      return response.json()
    }).then(responseJSON => {
      return dispatch({type: 'FETCH_ZONES', zones: responseJSON})
    })
  }
}
