import styled from 'styled-components';

const TypographyStyled = styled.div`
  font-size: 1rem;
  font-weight: ${props => props.weight || 400};
  ${props => props.h1 && `font-size: 2.125rem`};
  ${props => props.h2 && `font-size: 1.75rem; padding: 12px 0`};
  color: ${props => props.theme[props.color || 'dark']};
`;

export default TypographyStyled;
