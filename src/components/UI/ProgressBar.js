import React, { useMemo } from 'react';
import styled from 'styled-components';
import { color, radius } from '../../theme';

const StyledProgressBarContainer = styled.div`
  position: relative;
  border-radius: ${radius.$lg};
  background-color: ${color.$light};
  height: 1rem;
  overflow: hidden;
`;

const StyledProgressBar = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  transition: width 0.4s ease;
  width: ${({ percent }) => percent}%;
  background-color: ${color.$success};
`;

function ProgressBar({ step = 0, total }) {
  const percent = useMemo(() => (step / total) * 100, [step, total]);

  return (
    <StyledProgressBarContainer>
      <StyledProgressBar percent={percent} />
    </StyledProgressBarContainer>
  );
}

export default ProgressBar;
