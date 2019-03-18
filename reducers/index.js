import { combineReducers } from 'redux';
import CurrentSessionReducer from './CurrentSessionReducer';

export default combineReducers({
  currentSession: CurrentSessionReducer,
});
