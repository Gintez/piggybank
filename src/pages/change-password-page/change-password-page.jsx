import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose, path } from 'ramda';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import queryString from 'query-string';

import Typography from 'atoms/typography';
import Button from 'atoms/button';
import Form from 'atoms/form';
import InputField from 'atoms/input-field';
import {
  required,
  hasNumber,
  hasUppercaseLetter,
  isMaxLength,
  isMinLength,
  isPasswordsMatching
} from 'helpers/field-validations';
import { changePassword } from 'api/auth/auth-actions';
import { CHANGE_PASSWORD_FORM } from './constants';

const isMaxLength50 = isMaxLength(50);
const isMinLength6 = isMinLength(6);

const validate = values => {
  const repeatPassword = isPasswordsMatching({
    oldPassword: values.password_confirmation,
    newPassword: values.password
  });
  return { password_confirmation: repeatPassword };
};

export const ChangePasswordForm = ({ handleSubmit }) => (
  <Form onSubmit={handleSubmit}>
    <Typography color='dark' h2 weight={500}>Change password</Typography>
    <Field
      name='password'
      component={InputField}
      label='Password'
      type='password'
      placeholder='Enter password'
      validate={[
        required,
        isMaxLength50,
        isMinLength6,
        hasNumber,
        hasUppercaseLetter
      ]}
    />
    <Field
      name='password_confirmation'
      component={InputField}
      label='Password corfirmation'
      type='password'
      placeholder='Repeat password'
      validate={required}
    />
    <Button
      size='lg'
      block
      type='submit'
      variant='primary'
      text='submit'
    />
  </Form>);

ChangePasswordForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default compose(
  connect(
    null,
    (dispatch, ownProps) => ({
      onSubmit (data) {
        const id = path(['match', 'params', 'hash'], ownProps);
        const { email } = queryString.parse(ownProps.location.search);
        dispatch(changePassword({ data: { ...data, email }, id }));
      }
    })
  ),
  reduxForm({ form: CHANGE_PASSWORD_FORM, validate })
)(ChangePasswordForm);
