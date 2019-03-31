import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { getAccessToken } from 'api/auth/token-utils';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = !!getAccessToken();
  console.log(isLoggedIn)

  return (
    <Route
      {...rest}
      render={(props) => (
        isLoggedIn
          ? <Component {...props} />
          : <Redirect to='/login' />
      )}
    />
  );
};

export default ProtectedRoute;
