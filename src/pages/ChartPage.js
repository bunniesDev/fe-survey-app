import React, { useEffect, useState } from 'react';
import Chart from '../components/chart/Chart';
import { getQuestions } from '../util/firebaseApi';
import staticData from '../dummy/data';

function ChartPage() {
  const [questions, setQuestions] = useState([]);
  const [twoOptQuestions, setTwoOptQuestions] = useState([]);

  useEffect(() => {
    (async () => {
      const temp = await getQuestions();
      const newArr = staticData.map((item, idx) => ({
        title: item.question,
        id: item.id,
        labels: item.answer,
        data: temp[idx].options,
      }));
      const twoOpt = newArr.filter(item => item.data.length <= 2);
      setTwoOptQuestions(twoOpt);
      setQuestions(newArr);
    })();
  }, []);

  // 데이터가 없는 경우 임시 로딩 스피너
  if (questions.length === 0) {
    return <div>로딩중</div>;
  }

  return (
    <>
      {twoOptQuestions.map(chart => (
        <Chart
          type="stack"
          key={chart.id}
          id={chart.id}
          title={chart.title}
          data={chart.data}
          labels={chart.labels}
          options={chart.options}
          minHeight="inherit"
        />
      ))}
      {questions.map(chart => (
        <Chart
          key={chart.id}
          id={chart.id}
          data={chart.data}
          labels={chart.labels}
          title={chart.title}
          type="bar"
          options={{
            axis: 'x',
          }}
        />
      ))}
      {questions.map(chart => (
        <Chart
          key={chart.id}
          id={chart.id}
          data={chart.data}
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
