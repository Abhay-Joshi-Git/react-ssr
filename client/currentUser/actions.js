export const CurrentUserActionTypes = {
  SET_CURRENT_USER: 'set_current_user'
};

export const setCurrentUser = (user) => {
  return {
    type: CurrentUserActionTypes.SET_CURRENT_USER,
    payload: user
  };
}
