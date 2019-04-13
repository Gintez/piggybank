import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'ramda';

import Form from 'atoms/form';
import InputField from 'atoms/input-field';
import Button from 'atoms/button';
import Typography from 'atoms/typography';
import { required, isMaxLength, isMinLength } from 'helpers/field-validations';
import { createAccount } from 'api/account/account-actions';
import { CREATE_ACCOUNT_FORM } from './constants';

const isMaxLength50 = isMaxLength(50);
const isMinLength2 = isMinLength(2);

const CreateAccountPage = ({ handleSubmit, submitting }) => (
  <Form onSubmit={handleSubmit}>
    <Typography color='dark' h2 weight={500}>Create account</Typography>
    <Field
      name='name'
      component={InputField}
      label='Name'
      validate={[required, isMaxLength50, isMinLength2]}
    />
    <Field
      name='description'
      component={InputField}
      label='Description'
      rows='3'
      as='textarea'
      validate={[isMaxLength50, isMinLength2]}
    />
    <Button text='Submit' block variant='primary' type='submit' loading={submitting} />
  </Form>
);

export default compose(
  connect(
    null,
    dispatch => ({
      onSubmit (data) {
        dispatch(createAccount(data));
      }
    })
  ),
  reduxForm({ form: CREATE_ACCOUNT_FORM })
)(CreateAccountPage);
