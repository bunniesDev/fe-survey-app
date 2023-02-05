import React, { useEffect, useState } from 'react';
import Chart from '../components/chart/Chart';
import { getQuestions } from '../util/firebaseApi';
import staticData from '../dummy/data';
import Loading from '../components/chart/Loading';
import ChartTitle from '../components/chart/ChartTitle';

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
      const threeMoreOpt = newArr.filter(item => item.data.length > 2);

      setTwoOptQuestions(twoOpt);
      setQuestions(threeMoreOpt);
    })();
  }, []);

  // 데이터가 없는 경우 임시 로딩 스피너
  if (questions.length === 0) {
    return <Loading />;
  }

  return (
    <>
      <ChartTitle />
      {questions.map(chart => (
        <Chart
          isStacked={false}
          key={chart.id}
          id={chart.id}
          data={chart.data}
          labels={chart.labels}
          title={chart.title}
          type="doughnut"
          minHeight="500px"
        />
      ))}
      {twoOptQuestions.map(chart => (
        <Chart
          isStacked
          key={chart.id}
          id={chart.id}
          title={chart.title}
          data={chart.data}
          labels={chart.labels}
          options={chart.options}
          minHeight="inherit"
        />
      ))}
    </>
  );
}

export default ChartPage;
