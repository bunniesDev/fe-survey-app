import React, { useContext } from 'react';
import styled from 'styled-components';
import { radius, color, blockStyle, inlineStyle, shadow } from '../../../theme';
import RadioContext from './RadioContext';

const StyledRadioButton = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  input[type='radio'] {
    cursor: pointer;
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    z-index: 1;
    + label {
      width: 100%;
      border: 1px solid ${color.$border};
      background-color: ${color.$white};
      padding: 1rem 4rem 1rem 1rem;
      border-radius: ${radius.$md};
      color: ${color.$black};
      font-weight: bold;
      box-shadow: ${shadow.$sm};
      &:before {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 1rem;
        display: block;
        content: '';
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        background-color: ${color.$white};
        border: 2px solid ${color.$border};
      }
    }
    &:checked {
      + label {
        border: 2px solid ${color.$success};
        &:before {
          border-color: ${color.$black};
        }
        &:after {
          position: absolute;
          top: 50%;
          transform: translateY(calc(-50%));
          right: calc(1rem + 0.25rem);
          display: block;
          content: '';
          width: calc(2rem - 0.5rem);
          height: calc(2rem - 0.5rem);
          border-radius: 50%;
          border: 0.25rem solid ${color.$white};
          background-color: ${color.$success};
        }
      }
    }
    &:hover {
      + label {
        background-color: #f1f1f1;
      }
    }
  }

  ${props => (props.block ? blockStyle : inlineStyle)};
`;

function RadioButton({ id, block, name, value, disabled, children, ...props }) {
  const group = useContext(RadioContext);
  const {
    disabled: groupDisabled,
    value: groupValue,
    name: groupName,
    onChange: groupOnChange,
  } = group;

  return (
    <StyledRadioButton block={Boolean(block)}>
      <input
        type="radio"
        value={value}
        name={groupName}
        disabled={disabled || groupDisabled}
        checked={groupValue !== undefined ? value === groupValue : undefined}
        onChange={e => groupOnChange && groupOnChange(e.target.value)}
        {...props}
      />
      <label htmlFor={id}>{children}</label>
    </StyledRadioButton>
  );
}

export default RadioButton;
