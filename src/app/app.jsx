import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router';

import LoginPage from 'pages/login-page';
import SignUpPage from 'pages/sign-up-page';
import ResetPasswordPage from 'pages/reset-password-page';
import ChangePasswordPage from 'pages/change-password-page';
import EmailVerificationPage from 'pages/email-verification-page';
import DashboardPage from 'pages/dashboard-page';
import ProtectedRoute from 'components/protected-route';
import { setupErrorInterceptor } from 'api/notifications/notifications-actions';
import api from 'api/api';
import { configureStore } from './store';
import theme from './theme';

const AppContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
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
            <div>
              <AppContent>
                <Switch>
                  <Route component={SignUpPage} path='/sign-up' />
                  <Route component={ResetPasswordPage} path='/reset-password' />
                  <Route component={ChangePasswordPage} path='/change-password/:hash' />
                  <Route component={EmailVerificationPage} path='/email-verify' />
                  <ProtectedRoute component={DashboardPage} path='/dashboard' exact />
                  <Route component={LoginPage} path='/' />
                </Switch>
              </AppContent>
            </div>
          </ConnectedRouter>
        </Provider>
      </ThemeProvider>
    );
  }
}

export default App;
