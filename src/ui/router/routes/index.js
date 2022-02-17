import Root from '../../containers/Root';
import Dashboard from '../../containers/Dashboard';
import Home from '../../containers/Home';
import Credits from '../../containers/Credits';

const routes = [
  { path: '/', element: <Root/> },
  {
    path: '/home',
    element: <Dashboard/>,
    subRoutes: [
      {
        index: true,
        element: <Home/>,
      },
      {
        path: 'credits',
        element: <Credits/>,
      }
    ]
  }
];

export default routes;
