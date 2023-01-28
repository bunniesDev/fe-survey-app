import { Chart, registerables } from 'chart.js';
import { useEffect, useRef } from 'react';
import Card from '../UI/Card';
// import useChart from '../../hooks/useChart';

function DoughnutChart({ title, labels, data }) {
  const canvasRef = useRef();

  const chartData = {
    labels,
    datasets: [
      {
        label: 'My First Dataset',
        data,
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
        title: {
          display: true,
          text: title,
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
    <Card>
      <canvas id="canvas" ref={canvasRef} />
    </Card>
  );
}

export default DoughnutChart;
