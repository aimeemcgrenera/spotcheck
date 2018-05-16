export default function zonesReducer(state= {loading: false, zones: []}, action) {
  switch ( action.type ){
    case 'LOADING_ZONES':
      return Object.assign({}, state,{loading: true})
    case 'FETCH_ZONES':
      return {loading: false, zones: action.zones}
    default:
      return state;
  }
}
