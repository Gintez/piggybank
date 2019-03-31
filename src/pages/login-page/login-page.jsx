import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'ramda';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import InputField from 'atoms/input-field';
import Button from 'atoms/button';
import Form from 'atoms/form';
import Typography from 'atoms/typography';
import { isEmail, required } from 'helpers/field-validations';
import { login } from 'api/auth/auth-actions';
import { LOGIN_FORM } from './constants';

export const LoginForm = ({ handleSubmit, submitting }) => (
  <Form onSubmit={handleSubmit}>
    <Typography color='dark' h2 weight={500}>Log in</Typography>
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
      validate={required}
    />
    <Button
      size='lg'
      block
      type='submit'
      variant='primary'
      text='login'
      loading={submitting}
    />
    <div>
      <Link to='/sign-up'>
        Do not have an account? Sign up
      </Link>
    </div>
    <div>
      <Link to='/reset-password'>
        Forgot your password? Reset password
      </Link>
    </div>
  </Form>);

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default compose(
  connect(
    null,
    dispatch => ({
      onSubmit (data) {
        dispatch(login(data));
      }
    })
  ),
  reduxForm({ form: LOGIN_FORM })
)(LoginForm);
