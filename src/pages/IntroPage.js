import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/UI/Button';
import Vector from '../img/Vector.png';

const Wrapper = styled.div`
  margin: 0 1rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h3`
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const BackgroundImg = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const IntroPageBtn = styled(Button)`
  margin-bottom: 1rem;
`;

const ProductInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  margin-bottom: 2rem;
`;

function IntroPage() {
  return (
    <Wrapper>
      <div>
        <Title>프론트엔드 취준생 설문조사</Title>
      </div>
      <BackgroundImg src={Vector} />
      <div>
        <Link to="/survey">
          <IntroPageBtn variant="primary" size="lg" block>
            시작하기
          </IntroPageBtn>
        </Link>

        <Link to="/chart">
          <IntroPageBtn variant="secondary" size="lg" block>
            결과보기
          </IntroPageBtn>
        </Link>
        <ProductInfo>Product By.Bunnies</ProductInfo>
      </div>
    </Wrapper>
  );
}

export default IntroPage;
