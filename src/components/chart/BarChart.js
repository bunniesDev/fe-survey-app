import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { backgroundColor, borderColor } from './color';

// domId, data, label, xy축 결정
function BarChart({ data = [], labels = [], axis = 'x', id }) {
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
      layout: {
        padding: {
          top: axis === 'x' ? 30 : 0,
          right: axis === 'y' ? 30 : 0,
        },
      },
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

  return <canvas ref={canvasRef} id={`chart${id}`} />;
}

export default BarChart;
