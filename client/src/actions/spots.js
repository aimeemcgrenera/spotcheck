import fetch from 'isomorphic-fetch';

export function fetchSpots() {
  return function(dispatch){
    dispatch({type: 'LOADING_SPOTS'})
    return fetch('/api/spot', {
      method: 'GET',
      accept: 'application/json'
    }).then(res => {
      return res.json()
    }).then(responseJSON => {
      dispatch({type: 'FETCH_SPOTS', payload: responseJSON.spots})
    }).catch(error => console.log(error));
  }
}
