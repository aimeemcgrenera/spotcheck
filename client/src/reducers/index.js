import {combineReducers} from 'redux';
import spotsReducer from './spotsReducer';
import zonesReducer from './zonesReducer'

const rootReducer = combineReducers({
  spots: spotsReducer,
  zones: zonesReducer
});

export default rootReducer
