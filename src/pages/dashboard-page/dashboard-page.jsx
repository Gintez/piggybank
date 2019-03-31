import React from 'react';
import { lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { compose } from 'ramda';

import { getTransactions } from 'api/transactions/transactions-actions';

const Dashboard = () => (<div>dashboard</div>);

export default compose(
  connect(
    null,
    dispatch => ({
      onLoad () {
        dispatch(getTransactions());
      }
    })
  ),
  lifecycle({
    componentDidMount () {
      this.props.onLoad();
    }
  })
)(Dashboard);
