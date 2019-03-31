import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 340px;
`;

export const FormComponent = ({ onSubmit, children }) => (
  <StyledForm>
    <Form onSubmit={onSubmit}>
      {children}
    </Form>
  </StyledForm>);

FormComponent.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default FormComponent;
