import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import styled from 'styled-components';
import { backgroundColor, borderColor } from './color';

/* Canvas Wrapper */
const Wrapper = styled.div`
  /* min-width: ${props =>
    props.minWidth ? `${props.minWidth}` : 'inherit'}; */
  /* min-height: ${props =>
    props.minHeight ? `${props.minHeight}` : 'inherit'}; */
  margin-bottom: 2rem;
  & canvas {
    margin: 0 auto;
  }
`;

/* Title */
const Title = styled.h3`
  text-align: center;
`;

// domId, data, label, xy축 결정
function BarChart({
  chartData = [],
  labels = [],
  axis = 'x',
  title = '',
  minHeight,
  minWidth,
  id,
}) {
  const canvasRef = useRef();

  const data = {
    labels,
    // labels: QUESTION[1].options,
    datasets: [
      {
        label: '', // 사용안함
        data: chartData,
        // data: mock.q1.options,
        backgroundColor,
        borderColor,
        borderWidth: 3,
        borderRadius: 15,
      },
    ],
  };
  const config = {
    type: 'bar',
    data,
    borderWidth: 1,
    plugins: [ChartDataLabels],
    options: {
      // scales: {
      //   xAxes: {},
      //   yAxes: {},
      // },
      // reponsive: false,
      maintainAspectRatio: false,
      indexAxis: axis,
      plugins: {
        legend: {
          display: false,
        },
        datalabels: {
          color: borderColor,
          anchor: 'end',
          align: 'end',
          labels: {
            title: {
              font: {
                weight: 'bold',
                size: 16,
              },
            },
          },
        },
      },
    },
  };

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    Chart.register(...registerables);
    Chart.register(ChartDataLabels);

    const chart = new Chart(ctx, config);

    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <Wrapper minHeight={minHeight} minWidth={minWidth}>
      <Title>{title}</Title>
      <div>
        <canvas ref={canvasRef} id={`chart${id}`} />
      </div>
    </Wrapper>
  );
}

export default BarChart;
