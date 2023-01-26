import React from 'react';
import styled from 'styled-components';
import { color, radius, shadow } from '../../theme';

export const StyledCard = styled.div`
  border-radius: ${radius.$lg};
  box-shadow: ${shadow.$md};
  padding: 1rem 1rem;
  background-color: ${color.$white};

  + div {
    margin-top: 1rem;
  }
`;

function Card({ children }) {
  return <StyledCard>{children}</StyledCard>;
}

export default Card;
