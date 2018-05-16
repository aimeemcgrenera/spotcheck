import fetch from 'isomorphic-fetch';

export function fetchZones() {
  return function(dispatch) {
    dispatch({type: 'LOADING_ZONES'});
    return fetch('/api/allzones')
    .then(response => {
      return response.json()
    }).then(responseJSON => {
      return dispatch({type: 'FETCH_ZONES', zones: responseJSON})
    })
  }
}
