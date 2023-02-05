/* eslint-disable consistent-return */
import React from 'react';
import styled, { css } from 'styled-components';
import { darken } from 'polished';
import { blockStyle, color, inlineStyle, radius, shadow } from '../../theme';

const SIZES = {
  sm: css`
    --button-font-size: 0.875rem;
    --button-padding: 0.25rem 0.5rem;
  `,
  md: css`
    --button-font-size: 1rem;
    --button-padding: 0.5rem 0.75rem;
  `,
  lg: css`
    --button-font-size: 1.25rem;
    --button-padding: 0.75rem 1rem;
  `,
};

const VARIANTS = {
  primary: css`
    --button-color: ${color.$white};
    --button-bg-color: ${color.$primary};
    --button-border-color: ${color.$primary};
    --button-hover-bg-color: ${darken(0.2, color.$primary)};
  `,
  secondary: css`
    --button-color: ${color.$primary};
    --button-bg-color: ${color.$white};
    --button-border-color: ${color.$primary};
    --button-hover-color: ${color.$white};
    --button-hover-bg-color: ${color.$primary};
  `,
  danger: css`
    --button-color: ${color.$white};
    --button-bg-color: ${color.$danger};
    --button-border-color: ${color.$danger};
    --button-hover-bg-color: ${darken(0.2, color.$danger)};
  `,
  text: css`
    --button-color: ${color.$black};
    --button-bg-color: ${color.white};
    --button-border-color: transparent;
    --button-hover-color: ${color.$black};
    --button-hover-bg-color: ${color.$light};
    box-shadow: none;
  `,
};

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  border-width: 2px;
  border-style: solid;
  border-radius: ${props => (props.rounded ? '2rem' : `${radius.$sm}`)};
  padding: var(--button-padding);
  border-color: var(--button-border-color);
  font-size: var(--button-font-size);
  background: var(--button-bg-color);
  color: var(--button-color);
  box-shadow: ${shadow.$sm};
  cursor: pointer;
  gap: 0.5rem;
  svg {
    width: 1.25em;
    height: 1.25em;
  }
  ${props => (props.block ? blockStyle : inlineStyle)};
  ${props => props.sizeStyle}
  ${props => props.variantStyle}

  &:active,
  &:focus,
  &:hover {
    color: var(--button-hover-color, white);
    background: var(--button-hover-bg-color);
    border-color: var(--button-hover-bg-color);
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
    background: #646464;
    border-color: #646464;
    cursor: not-allowed;
  }
`;

function Button({
  disabled,
  size = 'md',
  variant = 'primary',
  block,
  rounded,
  children,
  startIcon,
  endIcon,
  ...props
}) {
  const sizeSytle = SIZES[size];
  const variantStyle = VARIANTS[variant];
  return (
    <StyledButton
      sizeStyle={sizeSytle}
      variantStyle={variantStyle}
      block={block}
      rounded={!!rounded}
      disabled={!!disabled}
      {...props}
    >
      {startIcon}
      {children}
      {endIcon}
    </StyledButton>
  );
}

export default Button;
