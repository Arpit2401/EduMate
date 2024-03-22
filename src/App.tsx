import { Routes, Route } from 'react-router-dom';
import React from 'react';

import { default as Main } from './screens/Main';
import { mainRoute, routeLink } from '@constants';

const App: React.FunctionComponent = (): JSX.Element => {
  return (
    <Routes>
      <Route path={routeLink.HOME} element={<Main />}>
        {mainRoute.map(({ path, element: Element, isProtected }) =>
          isProtected ? (
            <Route key={path} path={path} element={<Element />} />
          ) : (
            <Route key={path} path={path} element={<Element />} />
          )
        )}
      </Route>
    </Routes>
  );
};

export default App;
