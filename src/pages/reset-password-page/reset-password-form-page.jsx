import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'ramda';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import InputField from 'atoms/input-field';
import Button from 'atoms/button';
import Form from 'atoms/form';
import Typography from 'atoms/typography';
import { isEmail, required } from 'helpers/field-validations';
import { resetPassword } from 'api/account/account-actions';
import { RESET_PASSWORD_FORM } from './constants';

export const ResetPasswordForm = ({ handleSubmit }) => (
  <Form onSubmit={handleSubmit}>
    <Typography color='dark' h2 weight={500}>Reset password</Typography>
    <Field
      name='email'
      component={InputField}
      label='Email address'
      placeholder='Enter email'
      validat={[required, isEmail]}
    />
    <Button
      size='lg'
      block
      type='submit'
      variant='primary'
      text='submit'
    />
  </Form>);

ResetPasswordForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default compose(
  connect(
    null,
    dispatch => ({
      onSubmit (data) {
        dispatch(resetPassword(data));
      }
    })
  ),
  reduxForm({ form: RESET_PASSWORD_FORM })
)(ResetPasswordForm);
