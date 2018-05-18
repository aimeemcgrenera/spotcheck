import fetch from 'isomorphic-fetch';

export function fetchSpots(dispatch) {
  return function(dispatch){
    dispatch({type: 'LOADING_SPOTS'})
    return fetch('/api/spot')
    .then(response => {
      return response.json()
    }).then(responseJSON => {
      return dispatch({type: 'FETCH_SPOTS', spots: responseJSON})
    })
  }
}
