import React from 'react';
import styled, { css } from 'styled-components';

const GUTTERS = {
  sm: css`
    --row-gutter-gap: 0.5rem;
  `,
  md: css`
    --row-gutter-gap: 1rem;
  `,
  lg: css`
    --row-gutter-gap: 1.25rem;
  `,
};

const StyledRow = styled.div`
  ${props => props.gutterStyle};
  display: flex;
  align-items: center;
  gap: var(--row-gutter-gap);
  + div {
    margin-top: 1rem;
  }
`;

function Row({ gutter, children, ...props }) {
  const gutterStyle = GUTTERS[gutter];
  return (
    <StyledRow gutterStyle={gutterStyle} {...props}>
      {children}
    </StyledRow>
  );
}

export default Row;
