import React from 'react';
import styled from 'styled-components';

import Typography from 'atoms/typography';

const PageHeaderStyled = styled.div`
  margin: 16px 0;
`;

const PageHeader = ({ children }) => (
  <PageHeaderStyled>
    <Typography h1>{children}</Typography>
  </PageHeaderStyled>
);

export default PageHeader;
