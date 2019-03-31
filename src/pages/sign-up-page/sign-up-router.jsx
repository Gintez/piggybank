import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignUpForm from './sign-up-form-page';
import SignUpSuccess from './sign-up-success-page';

const SignUpPage = () => (
  <Switch>
    <Route path='/sign-up' exact component={SignUpForm} />
    <Route path='/sign-up/success' exact component={SignUpSuccess} />
  </Switch>
);

export default SignUpPage;
