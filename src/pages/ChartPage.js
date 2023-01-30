import React from 'react';
import BarChart from '../components/chart/BarChart';
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
        <BarChart
          key={chart.title}
          id={chart.title}
          chartData={chart.chartData}
          labels={chart.labels}
          axis="x"
          title={chart.title}
        />
      ))}
    </>
  );
}

export default ChartPage;
