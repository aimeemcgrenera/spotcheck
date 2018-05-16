export default function zonessReducer(state= {zones: []}, action) {
  switch ( action.type ){
    case 'LOADING_ZONES':
      return action.zones;
    case 'FETCH_ZONES':
      return action.zones
    default:
      return state;
  }
}
