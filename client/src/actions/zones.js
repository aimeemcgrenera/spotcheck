import fetch from 'isomorphic-fetch';

export function fetchZones() {
  return function(dispatch){
    dispatch({type: 'LOADING_ZONES'})
    return fetch('api/allzones', {
      method: 'GET',
      accept: 'application/json'
    }).then(res => {
      return res.json()
    }).then(responseJSON => {
      dispatch({type: 'FETCH_ZONES', payload: responseJSON.zones})
    }).catch(error => console.log(error));
  }
}
