export default function spotsReducer(state= {loading: false, spots: []}, action) {
  switch ( action.type ){
    case 'LOADING_SPOTS':
      return Object.assign({}, state,{loading: true})
    case 'FETCH_SPOTS':
      return {loading: false, spots: action.payload}
    default:
      return state;
  }
}
