import styled from 'styled-components';
import Card from '../UI/Card';
import BarChart from './BarChart';
import DoughnutChart from './DoughnutChart';

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

function Chart({
  minHeight,
  minWidth,
  title,
  type = 'bar',
  data = [],
  labels = [],
  id,
  options = {},
}) {
  return (
    <Wrapper minHeight={minHeight} minWidth={minWidth}>
      <Title>{title}</Title>
      <Card>
        <CanvasWrapper>
          {
            {
              bar: (
                <BarChart {...options} data={data} labels={labels} id={id} />
              ),
              doughnut: (
                <DoughnutChart
                  data={data}
                  labels={labels}
                  id={id}
                  {...options}
                />
              ),
            }[type]
          }
        </CanvasWrapper>
      </Card>
    </Wrapper>
  );
}

export default Chart;
