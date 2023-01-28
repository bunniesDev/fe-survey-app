import React from 'react';
import styled from 'styled-components';
import RadioContext from './RadioContext';

const StyledRadioButtonGroup = styled.fieldset`
  border: none;
  padding: 0;
  legend {
    display: none;
    position: 'absolute';
    top: -10;
    left: 10;
    font-weight: 'bold';
    background-color: '#FFFFFF';
  }
`;

function RadioButtonGroup({ label, children, ...props }) {
  return (
    <StyledRadioButtonGroup>
      <legend>{label}</legend>
      <RadioContext.Provider value={props}>{children}</RadioContext.Provider>
    </StyledRadioButtonGroup>
  );
}

export default RadioButtonGroup;
