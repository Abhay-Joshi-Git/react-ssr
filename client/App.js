import React, { useEffect } from 'react';
import { renderRoutes } from 'react-router-config';
import { Provider, useDispatch } from 'react-redux';
import store from './store';
import Header from './components/Header';
import { getHttpClient } from './http-client';
import { setCurrentUser } from './currentUser/actions';
import { getInitialDataValue } from './services/initialData';

const fetchCurrentUser = async () => {
  try {
    const response = await getHttpClient().get('current_user');
    return { currentUser: response.data };
  } catch (e) {
    return { currentUser: null };
  }
};

const App = (props) => {
  const dispatch = useDispatch();
  const { values } = props;
  let currentUser = null;
  if (values) {
    currentUser = values.currentUser;
    if (!values.currentUser) {
      currentUser = getInitialDataValue('currentUser');
    }
    dispatch(setCurrentUser(currentUser));
  }
  useEffect(() => {
    fetchCurrentUser().then(data => {
      dispatch(setCurrentUser(data.currentUser));
    });
  }, [dispatch]);
  return (
    <div>
      <Header currentUser={values && values.currentUser} />
      {renderRoutes(props.route.routes, values)}
    </div>
  )
};

const AppWithStore = (props) => (
  <Provider store={store}>
    <App {...props} />
  </Provider>
);

export default {
  component: AppWithStore,
  fetchData: fetchCurrentUser,
};
