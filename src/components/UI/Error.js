import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Card from './Card';
import ErrorImage from '../../assets/images/error.png';

const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledTitle = styled.h2`
  text-align: center;
`;

const StyledDescription = styled.div`
  text-align: center;
`;

const StyledImgWrapper = styled.div`
  max-height: 256px;
  max-width: 256px;
  margin: 2rem;
`;

function Error({ title, onErrorHandler, buttonText = '재시도', description }) {
  return (
    <Card>
      <StyledContentWrapper>
        <StyledTitle>{title}</StyledTitle>
        {description && <StyledDescription>{description}</StyledDescription>}
        <StyledImgWrapper>
          <img src={ErrorImage} alt="error_image" />
        </StyledImgWrapper>
        <Button variant="primary" size="lg" block onClick={onErrorHandler}>
          {buttonText}
        </Button>
      </StyledContentWrapper>
    </Card>
  );
}

export default Error;
