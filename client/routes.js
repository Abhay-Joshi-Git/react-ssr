import Home from './pages/Home';
import Users from './pages/Users';

const routes = [
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

export default routes;
