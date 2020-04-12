import { CurrentUserActionTypes } from './actions';

const currentUserReducer = (state = null, action) => {
  switch (action.type) {
    case CurrentUserActionTypes.SET_CURRENT_USER:
      return action.payload;  
    default:
      return state;
  }
};

export default currentUserReducer;
