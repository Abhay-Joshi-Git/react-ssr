import { combineReducers } from 'redux';
import currentUser from '../currentUser/reducer';

const reducers = combineReducers({
  currentUser
});

export default reducers;
