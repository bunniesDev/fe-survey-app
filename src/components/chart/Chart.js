import styled from 'styled-components';
import Card from '../UI/Card';
import BarChart from './BarChart';
import DoughnutChart from './DoughnutChart';
import StackedBarChart from './StackedBarChart';

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
  min-height: ${props => (props.minHeight ? props.minHeight : '300px')};
  min-width: ${props => (props.minWidth ? props.minWidth : 'inherit')};
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
    <Wrapper>
      <Title>{title}</Title>
      <Card>
        <CanvasWrapper minHeight={minHeight} minWidth={minWidth}>
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
              stack: <StackedBarChart />,
            }[type]
          }
        </CanvasWrapper>
      </Card>
    </Wrapper>
  );
}

export default Chart;
