export default (state = [], action) => {
  switch(action.type) {
    case 'FETCH_SPOTS':
      return action.spots;

    default:
    return state;
  }
}
