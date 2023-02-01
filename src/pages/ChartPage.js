import React from 'react';
import Chart from '../components/chart/Chart';
import { mock, QUESTION } from '../components/chart/data';

function ChartPage() {
  // mock data
  const dataList = [
    {
      chartData: mock.q1.options,
      labels: QUESTION[1].options,
      title: QUESTION[1].title,
    },
    {
      chartData: mock.q2.options,
      labels: QUESTION[2].options,
      title: QUESTION[2].title,
    },
  ];

  return (
    <>
      {dataList.map(chart => (
        <Chart
          key={chart.title}
          id={chart.title}
          data={chart.chartData}
          labels={chart.labels}
          title={chart.title}
          type="bar"
          options={{
            axis: 'x',
          }}
        />
      ))}
      {dataList.map(chart => (
        <Chart
          key={chart.title}
          id={chart.title}
          data={chart.chartData}
          labels={chart.labels}
          title={chart.title}
          type="doughnut"
        />
      ))}
    </>
  );
}

export default ChartPage;
