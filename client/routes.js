import Home from './pages/Home';
import Users from './pages/Users';
import Layout from './Layout';

const childRoutes = [
  {
    ...Home,
    path: "/",
    exact: true,
  },
  {
    ...Users,
    path: "/users"
  }
];

const routes = [
  {
    ...Layout,
    routes: childRoutes,
  }
];

export default routes;
