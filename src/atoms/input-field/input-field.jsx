import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';

export const InputField = ({
  input,
  type,
  label,
  placeholder,
  meta
}) => {
  const { touched, error } = meta;

  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control isInvalid={touched && error} {...input} type={type} placeholder={placeholder} />
      <Form.Control.Feedback type='invalid'>
        {error}
      </Form.Control.Feedback>
    </Form.Group>);
};

InputField.propTyped = {
  input: PropTypes.shape({}).isRequired,
  type: PropTypes.string
};

InputField.defaultProps = {
  type: 'text'
};

export default InputField;
