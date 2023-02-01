import styled from 'styled-components';
import Card from '../UI/Card';

/* Wrapper */
const Wrapper = styled.div`
  margin-bottom: 2rem;
`;

/* Title */
const Title = styled.h3`
  text-align: center;
`;

/* Canvas Wrapper */
const CanvasWrapper = styled.div`
  min-height: 300px;
`;

function ChartWrapper({ children, minHeight, minWidth, title }) {
  return (
    <Wrapper minHeight={minHeight} minWidth={minWidth}>
      <Title>{title}</Title>
      <Card>
        <CanvasWrapper>{children}</CanvasWrapper>
      </Card>
    </Wrapper>
  );
}

export default ChartWrapper;
