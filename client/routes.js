import Home from './pages/Home';
import Users from './pages/Users';
import Admins from './pages/Admins';
import App from './App';
import RouteNotFound from './pages/RouteNotFound';

const childRoutes = [
  {
    ...Home,
    path: "/",
    exact: true,
  },
  {
    ...Users,
    path: "/users"
  },
  {
    ...Admins,
    path: "/admins"
  },
  {
    ...RouteNotFound
  }
];

const routes = [
  {
    ...App,
    routes: childRoutes,
  }
];

export default routes;
