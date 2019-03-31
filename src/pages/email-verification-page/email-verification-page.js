import React from 'react';
import { withRouter } from 'react-router-dom';
import { lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { compose } from 'ramda';
import queryString from 'query-string';

import { verifyEmail } from 'api/auth/auth-actions';

// TODO style loading;
const EmailVerification = () => (<div>Loading ...</div>);

export default compose(
  withRouter,
  connect(
    null,
    (dispatch, ownProps) => ({
      onLoad () {
        const { token, email } = queryString.parse(ownProps.location.search);
        dispatch(verifyEmail({ token, email }));
      }
    })
  ),
  lifecycle({
    componentDidMount () {
      this.props.onLoad();
    }
  })
)(EmailVerification);
