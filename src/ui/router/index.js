import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import CreateRoutes from './components/CreateRoutes';
// import Auth from './Auth';
import routes from './routes';

const AppRouter = () => (
  <BrowserRouter>
    <CreateRoutes {...{ routes }} />
</BrowserRouter>
);

export default AppRouter;
