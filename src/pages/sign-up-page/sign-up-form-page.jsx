import React from 'react';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import { compose } from 'ramda';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import InputField from 'atoms/input-field';
import Button from 'atoms/button';
import Form from 'atoms/form';
import Typography from 'atoms/typography';
import {
  isEmail,
  required,
  isMaxLength,
  isMinLength,
  hasNumber,
  hasUppercaseLetter,
  isPasswordsMatching
} from 'helpers/field-validations';
import { oneWord } from 'helpers/format';
import { signUp, fieldValidation } from 'api/auth/auth-actions';

import { SIGN_UP_FORM } from './constants';

const isMaxLength50 = isMaxLength(50);
const isMinLength2 = isMinLength(2);
const isMinLength6 = isMinLength(6);

const validate = values => {
  const repeatPassword = isPasswordsMatching({
    oldPassword: values.password_confirmation,
    newPassword: values.password
  });
  return { password_confirmation: repeatPassword };
};

const asyncValidate = async (values, dispatch, props, blurredField) => {
  const previousErrors = props.asyncErrors;
  const message = blurredField === 'email'
    ? 'This email is taken'
    : 'This username is taken';
  try {
    await dispatch(fieldValidation({ [blurredField]: values[blurredField] }));
  } catch (e) {
    throw { ...previousErrors, [blurredField]: message }; // eslint-disable-line
  }
};

export const SignUpForm = ({ handleSubmit, submitting }) => (
  <Form onSubmit={handleSubmit}>
    <Typography color='dark' h2 weight={500}>Sign up</Typography>
    <Field
      name='username'
      format={oneWord}
      component={InputField}
      label='Username'
      placeholder='Enter username'
      validate={[required, isMaxLength50, isMinLength2]}
    />
    <Field
      name='email'
      component={InputField}
      label='Email address'
      placeholder='Enter email'
      validate={[required, isEmail]}
    />
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
      label='Password confirmation'
      type='password'
      placeholder='Repeat password'
      validate={required}
    />
    <Button
      size='lg'
      block
      type='submit'
      variant='primary'
      text='sign up'
      loading={submitting}
    />
    <Link to='/login'>
      Already have an account? Log in
    </Link>
  </Form>);

SignUpForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  password: PropTypes.string
};

SignUpForm.defaultProps = {
  password: null
};

export default compose(
  connect(
    state => ({
      password: formValueSelector(SIGN_UP_FORM)(state, 'password')
    }),
    dispatch => ({
      onSubmit (data) {
        return dispatch(signUp(data));
      }
    })
  ),
  reduxForm({
    form: SIGN_UP_FORM,
    validate,
    asyncBlurFields: ['username', 'email'],
    asyncValidate
  })
)(SignUpForm);
