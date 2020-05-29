import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const authCheck = (WrappedComponent) => {
  const AuthChecker = (props) => {
    const currentUser = useSelector(state => state.currentUser);
    return currentUser
      ? <WrappedComponent {...props} />
      : <Redirect to="/" />
  };
  return AuthChecker;
}

export default authCheck;
