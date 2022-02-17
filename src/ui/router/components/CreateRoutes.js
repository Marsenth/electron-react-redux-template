import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { map } from 'lodash'
import Auth from './Auth';

const renderRoutes = (routes) => (
  map(routes, ({ element, children, subRoutes, ...rest }, i) => (
    <Route
      key={i}
      {...{
        element: (() => (
          <Auth>
            {element}
          </Auth>
        ))(),
        ...rest
      }}
    >
      {subRoutes && renderRoutes(subRoutes)}
    </Route>
  ))
);

const CreateRoutes = ({ routes }) => (
  <Routes>
    {renderRoutes(routes)}
  </Routes>
);

export default CreateRoutes;
