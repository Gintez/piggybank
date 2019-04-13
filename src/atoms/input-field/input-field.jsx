import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';

export const InputField = ({
  input,
  type,
  label,
  placeholder,
  meta,
  as,
  rows
}) => {
  const { touched, error } = meta;

  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control isInvalid={touched && error} {...input} type={type} placeholder={placeholder} as={as} rows={rows} />
      <Form.Control.Feedback type='invalid'>
        {error}
      </Form.Control.Feedback>
    </Form.Group>);
};

InputField.propTyped = {
  input: PropTypes.shape({}).isRequired,
  type: PropTypes.string,
  rows: PropTypes.number,
  as: PropTypes.oneOf(['textarea'])
};

InputField.defaultProps = {
  type: 'text',
  rows: null,
  as: 'input'
};

export default InputField;
