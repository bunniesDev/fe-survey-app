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
      <Title>๐ ์ค๋ฌธ ์กฐ์ฌ ๊ฒฐ๊ณผ</Title>
      <Descriptions>๋ค๋ฅธ ์ฌ๋๋ค์ ์ด๋ค ์ ํํ์๊น์?</Descriptions>
    </Wrapper>
  );
}

export default ChartTitle;
