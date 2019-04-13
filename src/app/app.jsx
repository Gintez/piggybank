import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import { Grid } from 'react-flexbox-grid';

import LoginPage from 'pages/login-page';
import SignUpPage from 'pages/sign-up-page';
import ResetPasswordPage from 'pages/reset-password-page';
import ChangePasswordPage from 'pages/change-password-page';
import EmailVerificationPage from 'pages/email-verification-page';
import DashboardPage from 'pages/dashboard-page';
import ProtectedRoute from 'components/protected-route';
import { setupErrorInterceptor } from 'api/notifications/notifications-actions';
import Header from 'components/header';
import Notifications from 'components/notifications';
import api from 'api/api';
import CreateAccountPage from 'pages/create-account-page';
import { configureStore } from './store';
import theme from './theme';

const AppStyled = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const AppContent = styled.div`
  flex: 1;
  display: flex;
`;

const history = createBrowserHistory();
const store = configureStore(history);
setupErrorInterceptor(api, store.dispatch);

class App extends Component {
  render () {
    return (
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <AppStyled>
              <Header />
              <AppContent>
                <Grid>
                  <Switch>
                    <Route component={SignUpPage} path='/sign-up' />
                    <Route component={ResetPasswordPage} path='/reset-password' />
                    <Route component={ChangePasswordPage} path='/change-password/:hash' />
                    <Route component={EmailVerificationPage} path='/email-verify' />
                    <ProtectedRoute component={DashboardPage} path='/dashboard' exact />
                    <ProtectedRoute component={CreateAccountPage} path='/create-account' exact />
                    <Route component={LoginPage} path='/' />
                  </Switch>
                </Grid>
              </AppContent>
              <Notifications />
            </AppStyled>
          </ConnectedRouter>
        </Provider>
      </ThemeProvider>
    );
  }
}

export default App;
