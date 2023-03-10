import React from 'react';
import styled from 'styled-components';

function getCalculateCols(span) {
  return `width : ${(span / 12) * 100}%`;
}

const StyledColumn = styled.div`
  ${({ cols }) => cols && getCalculateCols(cols)};
  @media screen and (min-width: 768px) {
    ${({ sm }) => sm && getCalculateCols(sm)}
  }
  @media screen and (min-width: 992px) {
    ${({ md }) => md && getCalculateCols(md)}
  }
  @media screen and (min-width: 1200px) {
    ${({ lg }) => lg && getCalculateCols(lg)}
  }
`;

function Column({ children, ...props }) {
  return <StyledColumn {...props}>{children}</StyledColumn>;
}

export default Column;
