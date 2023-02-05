import React from 'react';
import styled from 'styled-components';
import loadingImg from '../../assets/images/intro_bunny_ani.gif';

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function IntroLoading() {
  return (
    <Container>
      <img
        src={loadingImg}
        alt="loading
      "
      />
    </Container>
  );
}

export default IntroLoading;
