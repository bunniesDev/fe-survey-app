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

  const dataList2 = [
    {
      title: '나는 고양이파 vs 강아지파',
      labels: ['고양이', '강아지'],
      data: [0.9, 0.1], // 데이터 자체를 비율에 맞게 formmat해서 보내기
      options: {
        color: ['rgb(75, 192, 192)', 'rgb(255, 159, 64)'],
      },
    },
    {
      title: '나는 부먹 vs 찍먹 ',
      labels: ['부먹', '찍먹'],
      data: [0.35, 0.65],
      options: {
        color: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)'],
      },
    },
  ];

  return (
    <>
      {dataList2.map(chart => (
        <Chart
          type="stack"
          key={chart.title}
          id={chart.title}
          title={chart.title}
          data={chart.data}
          labels={chart.labels}
          options={chart.options}
          minHeight="inherit"
        />
      ))}
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
          minHeight="500px"
        />
      ))}
    </>
  );
}

export default ChartPage;
