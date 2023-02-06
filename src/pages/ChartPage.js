import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Chart from '../components/chart/Chart';
import { getQuestions } from '../util/firebaseApi';
import staticData from '../dummy/data';
import Loading from '../components/chart/Loading';
import ChartTitle from '../components/chart/ChartTitle';
import Button from '../components/UI/Button';
import MainLayout from '../components/layouts/MainLayout';
import Error from '../components/UI/Error';

function ChartPage() {
  const [questions, setQuestions] = useState([]);
  const [twoOptQuestions, setTwoOptQuestions] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const getChartData = async () => {
    try {
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
      setTimeout(() => {
        setQuestions(threeMoreOpt);
      }, 1500);
      setError(null);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    getChartData();
  }, []);

  if (error) {
    return (
      <MainLayout.Content>
        <Error
          title="설문조사 결과를 가져오는데 실패했습니다."
          description="하단 버튼 클릭 시, 설문 조사 결과를 다시 가져옵니다."
          onErrorHandler={getChartData}
        />
      </MainLayout.Content>
    );
  }

  // 데이터가 없는 경우 로딩 스피너
  if (questions.length === 0) {
    return <Loading />;
  }

  return (
    <>
      <MainLayout.Content>
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
      </MainLayout.Content>
      <MainLayout.Bottom>
        <Button variant="primary" size="lg" block onClick={() => navigate('/')}>
          처음으로
        </Button>
      </MainLayout.Bottom>
    </>
  );
}

export default ChartPage;
