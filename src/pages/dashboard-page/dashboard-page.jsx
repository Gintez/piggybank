import React from 'react';
import { lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { compose } from 'ramda';
import { routerActions } from 'connected-react-router';
import styled from 'styled-components';

import { getTransactions } from 'api/transactions/transactions-actions';
import Button from 'atoms/button';
import PageHeader from 'atoms/page-header';

const ActionsWrapper = styled.div`
  margin: 16px 0;
`;

const Dashboard = ({ redirectToCreateAccount }) => (
  <div>
    <PageHeader>Dashboard</PageHeader>
    <ActionsWrapper>
      <Button text='Create account' variant='primary' onClick={redirectToCreateAccount} />
    </ActionsWrapper>
  </div>
);

export default compose(
  connect(
    null,
    dispatch => ({
      onLoad () {
        dispatch(getTransactions());
      },
      redirectToCreateAccount () {
        dispatch(routerActions.push('/create-account'));
      }
    })
  ),
  lifecycle({
    componentDidMount () {
      this.props.onLoad();
    }
  })
)(Dashboard);
