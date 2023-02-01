import { Chart, registerables } from 'chart.js';
import { useEffect, useRef } from 'react';
import ChartWrapper from './ChartWrapper';

function DoughnutChart({
  data = [],
  labels = [],
  title = '',
  minHeight,
  minWidth,
  id,
}) {
  const canvasRef = useRef();
  const total = data.reduce((acc, cur) => acc + cur);
  const sortLabelAndData = data
    .map((value, index) => [labels[index], Math.floor((value / total) * 100)])
    .sort((a, b) => b[1] - a[1]);

  const chartData = {
    labels: sortLabelAndData.map(LabelAndData => LabelAndData[0]),
    datasets: [
      {
        label: ' ',
        data: sortLabelAndData.map(LabelAndData => LabelAndData[1]),
        hoverOffset: 4,
      },
    ],
  };

  const config = {
    type: 'doughnut',
    data: chartData,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
          labels: {
            font: {
              size: 14,
            },
          },
        },
        datalabels: {
          labels: {
            name: {
              formatter: (val, ctx) => {
                if (val < 15) {
                  return '';
                }

                return ctx.chart.data.labels[ctx.dataIndex];
              },
              align: 'bottom',
            },
            value: {
              formatter: value => {
                if (value < 3) {
                  return '';
                }

                return `${value}%`;
              },
              align: 'center',
            },
          },
        },
      },
    },
  };

  useEffect(() => {
    const ctx = canvasRef.current && canvasRef.current.getContext('2d');
    Chart.register(...registerables);

    const chart = new Chart(ctx, config);

    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <ChartWrapper minHeight={minHeight} minWidth={minWidth} title={title}>
      <canvas ref={canvasRef} id={`chart${id}`} />
    </ChartWrapper>
  );
}

export default DoughnutChart;