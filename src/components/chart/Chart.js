import { useState } from 'react';
import styled from 'styled-components';
import Button from '../UI/Button';
import Card from '../UI/Card';
import BarChart from './BarChart';
import DoughnutChart from './DoughnutChart';
import StackedBarChart from './StackedBarChart';

/* Wrapper */
const Wrapper = styled.div`
  padding: 1rem;
`;

const Headr = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

/* Title */
const Title = styled.h3`
  margin: 0;
  text-align: center;
  flex: 1 1 0;
`;

const ToggleButton = styled(Button)`
  justify-items: flex-end;
  align-self: end;
`;

/* Canvas Wrapper */
const CanvasWrapper = styled.div`
  min-height: ${props => (props.minHeight ? props.minHeight : '300px')};
  min-width: ${props => (props.minWidth ? props.minWidth : 'inherit')};
  display: flex;
  align-items: center;
`;

function Chart({
  minHeight,
  minWidth,
  title,
  isStacked = false,
  data = [],
  labels = [],
  id,
  options = {},
}) {
  const [toggle, setToggle] = useState(true);

  const handleClick = () => {
    setToggle(preState => !preState);
  };

  let chart = '';

  if (isStacked) {
    chart = <StackedBarChart data={data} labels={labels} {...options} />;
  } else if (toggle) {
    chart = <BarChart {...options} data={data} labels={labels} id={id} />;
  } else {
    chart = <DoughnutChart data={data} labels={labels} id={id} {...options} />;
  }

  return (
    <Wrapper>
      <Card>
        <Headr>
          <Title>{title}</Title>
          {!isStacked ? (
            <ToggleButton size="sm" onClick={handleClick}>
              {toggle ? 'chart' : 'bar'}
            </ToggleButton>
          ) : (
            ''
          )}
        </Headr>
        <CanvasWrapper minHeight={minHeight} minWidth={minWidth}>
          {chart}
        </CanvasWrapper>
      </Card>
    </Wrapper>
  );
}

export default Chart;
