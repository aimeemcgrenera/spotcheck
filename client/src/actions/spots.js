import fetch from 'isomorphic-fetch';

export function fetchSpots(dispatch) {
  return function(dispatch){
    dispatch({type: 'LOADING_SPOTS'})
    return fetch('/api/spot')
    .then(res => {
      return res.json()
    }).then(responseJSON => {
      return dispatch({type: 'FETCH_SPOTS', spots: responseJSON})
    }).catch(error => console.log(error));
  }
}
