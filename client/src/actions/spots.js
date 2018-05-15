export const fetchSpots = () => {
  return dispatch => {
    return fetch('/api/spot', {
      method: 'GET',
      accept: 'application/json'
    })
      .then(response => response.json())
      .then((spots) => {
        return spots;
      })
      .catch(error => console.log(error));
  }
}
