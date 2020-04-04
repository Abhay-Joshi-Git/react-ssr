import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/Header';

const fetchCurrentUser = async () => {
  try {
    const response = await getHttpClient().get('current_user');
    return { currentUser: response.data };
  } catch (e) {
    return { currentUser: null };
  }
};

const Layout = (props) => (
  <div>
    <Header />
    {renderRoutes(props.route.routes, { values: props.values ? props.values.slice(1) : [] })}
  </div>
);

export default {
  component: Layout,
  fetchData: fetchCurrentUser,
};
