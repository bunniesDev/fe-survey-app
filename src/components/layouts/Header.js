import React from 'react';
import styled from 'styled-components';
import { color } from '../../theme';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid ${color.$border};
  height: 4rem;
`;

const StyledHeaderLeftArea = styled.div`
  flex: 1;
  text-align: left;
  button {
    margin-left: -1rem;
  }
`;
const StyledHeaderRightArea = styled.div`
  flex: 1;
  text-align: right;
`;

const StyledTitle = styled.h1`
  flex: 3;
  font-size: 1rem;
  font-weight: bold;
  margin: 0;
  padding: 0;
  text-align: center;
`;

function HeaderLeftArea({ children }) {
  return <StyledHeaderLeftArea>{children}</StyledHeaderLeftArea>;
}

function HeaderTitleArea({ children }) {
  return <StyledTitle>{children}</StyledTitle>;
}

function HeaderRightArea({ children }) {
  return <StyledHeaderRightArea>{children}</StyledHeaderRightArea>;
}

function HeaderMain({ children }) {
  return <StyledHeader>{children}</StyledHeader>;
}

const Header = Object.assign(HeaderMain, {
  Left: HeaderLeftArea,
  Title: HeaderTitleArea,
  Right: HeaderRightArea,
});

export default Header;
