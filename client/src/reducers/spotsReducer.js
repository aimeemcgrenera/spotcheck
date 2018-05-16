export default function spotsReducer(state= {spots: []}, action) {
  switch ( action.type ){
    case 'LOADING_SPOTS':
      return action.spots;
    case 'FETCH_SPOTS':
      return action.spots
    default:
      return state;
  }
}
