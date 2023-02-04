import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import bunnyGif from '../img/bunnyGif.gif';

const GifWrapper = styled(Link)`
  display: flex;
  height: 100%;
`;

function IntroPage() {
  return (
    <GifWrapper to="/chartPage">
      <img src={bunnyGif} alt="bunnyGif" />
    </GifWrapper>
  );
}

export default IntroPage;
