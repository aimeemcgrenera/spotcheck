const setSpots = spots => {
  return {
    type: 'FETCH_SPOTS',
    spots,
  }
}

export const fetchSpots = () => {
  return dispatch => {
    return fetch('/api/spot')
      .then(response => response.json())
      .then(spots => dispatch(setSpots(spots)))
      .catch(error => console.log(error));
  }
}
