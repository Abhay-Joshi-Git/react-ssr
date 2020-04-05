import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/Header';
import { getHttpClient } from './http-client';

const fetchCurrentUser = async () => {
  try {
    const response = await getHttpClient().get('current_user');
    return { currentUser: response.data };
  } catch (e) {
    return { currentUser: null };
  }
};

const Layout = (props) => {
  const { values } = props;
  return (
    <div>
      <Header currentUser={values && values.currentUser} />
      {renderRoutes(props.route.routes, values)}
    </div>
  )
};

export default {
  component: Layout,
  fetchData: fetchCurrentUser,
};
