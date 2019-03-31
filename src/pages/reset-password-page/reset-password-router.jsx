import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ResetPasswordForm from './reset-password-form-page';
import ResetPasswordSuccess from './reset-password-success-page';

const ResetPasswordRouter = () => (
  <Switch>
    <Route path='/reset-password' exact component={ResetPasswordForm} />
    <Route path='/reset-password/success' exact component={ResetPasswordSuccess} />
  </Switch>
);

export default ResetPasswordRouter;
