import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  text-align: center;
  margin-top: 0;
`;
const Descriptions = styled.div`
  text-align: center;
`;

function ChartTitle() {
  return (
    <Wrapper>
      <Title>🎉 설문 조사 결과</Title>
      <Descriptions>다른 사람들은 어떤 선택했을까요?</Descriptions>
    </Wrapper>
  );
}

export default ChartTitle;
