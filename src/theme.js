import { css } from 'styled-components';

export const inlineStyle = css`
  width: auto;
  + * {
    margin-left: 0.5rem;
  }
`;

export const blockStyle = css`
  width: 100%;
  + * {
    margin-top: 1rem;
  }
`;

export const color = {
  $primary: '#56b1f3',
  $danger: '#d32626',
  $success: '#78EC8A',
  $white: '#ffffff',
  $black: '#131313',
  $light: '#f1f1f1',
  $dark: '#131313',
  $border: '#efefef',
};

export const radius = {
  $sm: '0.25rem',
  $md: '0.5rem',
  $lg: '0.75rem',
};

export const shadow = {
  $sm: `0 0 0.25rem rgba(0,0,0,0.25)`,
  $md: `0 0 0.5rem rgba(0,0,0,0.25)`,
  $lg: `0 0 0.75rem rgba(0,0,0,0.25)`,
};

const theme = {
  color,
  radius,
  shadow,
  inlineStyle,
  blockStyle,
};
export default theme;
