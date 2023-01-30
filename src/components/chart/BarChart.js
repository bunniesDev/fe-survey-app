import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import styled from 'styled-components';
import { backgroundColor, borderColor } from './color';
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

// domId, data, label, xy축 결정
function BarChart({
  data = [],
  labels = [],
  axis = 'x',
  title = '',
  minHeight,
  minWidth,
  id,
}) {
  const canvasRef = useRef();

  const chartData = {
    labels,
    datasets: [
      {
        label: ' ', // 사용안함
        data,
        backgroundColor,
        borderColor,
        borderWidth: 3,
        borderRadius: 15,
      },
    ],
  };
  const config = {
    type: 'bar',
    data: chartData,
    borderWidth: 1,
    plugins: [ChartDataLabels],
    options: {
      // scales: {
      //   xAxes: {},
      //   yAxes: {},
      // },
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
      <Card>
        <CanvasWrapper style={{ minHeight: '300px' }}>
          <canvas ref={canvasRef} id={`chart${id}`} />
        </CanvasWrapper>
      </Card>
    </Wrapper>
  );
}

export default BarChart;
