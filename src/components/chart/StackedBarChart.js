import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  height: 100px;
  width: 100%;
  gap: 0.25rem;
  & span:first-child {
    border-radius: 10px 0 0 10px;
    border-right: none;
  }
  & span:last-child {
    border-radius: 0 10px 10px 0;
  }
`;

const Bar = styled.span`
  flex: ${props => (props.percent ? props.percent : '1')};
  background-color: ${props => props.backgroundColor};
  transition: all 0.2s ease-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:hover {
    transform: scale(1.02);
  }
`;

const Title = styled.strong`
  font-size: ${props => (props.small ? '1.25rem' : '1.5rem')};
  font-weight: ${props => (props.small ? 'normal' : 'bold')};
  color: #fff;
`;

function StackedBarChart({
  data,
  labels,
  color = ['rgb(255, 99, 132)', 'rgb(54, 162, 235)'],
}) {
  const total = data.reduce((acc, cur) => acc + cur, 0);
  return (
    <Wrapper>
      {data.map((item, idx) => (
        <Bar
          key={`stack-chart-${labels[idx]}`}
          backgroundColor={color[idx]}
          percent={item}
        >
          <Title>{labels[idx]}</Title>
          <Title small>{item ? (item / total).toFixed(2) * 100 : 0}%</Title>
        </Bar>
      ))}
    </Wrapper>
  );
}

export default StackedBarChart;
