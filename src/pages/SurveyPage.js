import styled from 'styled-components';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RadioButtonGroup from '../components/UI/RadioButton/RadioButtonGroup';
import RadioButton from '../components/UI/RadioButton/RadioButton';
import Button from '../components/UI/Button';
import data from '../dummy/data';
import useDialogs from '../components/UI/Dialog/useDialogs';
import DialogAlerts from '../components/UI/Dialog/DialogAlerts';
import { postQuestions } from '../util/firebaseApi';
import SurveyContext from '../context/survey-context';
import MainLayout from '../components/layouts/MainLayout';
import Error from '../components/UI/Error';

const StyledQuestion = styled.h2`
  text-align: center;
  margin: 0 0 2rem;
  font-size: 1.25rem;
`;

function MyModal({ onClose, onSubmit }) {
  return (
    <DialogAlerts
      onSubmit={onSubmit}
      onClose={onClose}
      title="프론트엔드 설문조사"
      labelClose="돌아가기"
      labelSubmit="제출하기"
    >
      제출하시겠습니까? <br />
      제출 시, 잠시후 결과 페이지로 이동됩니다.🎉
    </DialogAlerts>
  );
}

function SurveyPage() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const { openDialog } = useDialogs();
  const {
    selectedValue,
    onChangeValueHandler,
    onNextQuestionHandler,
    stepIndex,
  } = useContext(SurveyContext);

  const changeValueHandler = (v, i) => {
    onChangeValueHandler(v, i);
  };

  const submitHandler = () => {
    openDialog(MyModal, {
      onSubmit: async () => {
        localStorage.setItem('isSubmit', 'done');
        const finalData = selectedValue.map(el => el.select);
        // API error
        const result = await postQuestions(finalData);
        if (result.error) {
          setError(true);
        } else {
          navigate('/chart', { replace: true });
          setError(null);
        }
      },
    });
  };

  const nextQuestionHandler = () => {
    onNextQuestionHandler();
  };

  if (error) {
    return (
      <MainLayout.Content>
        <Error
          title="설문조사 제출에 실패했습니다."
          description="다시 시도해주세요."
          buttonText="다시 시도하기"
          onErrorHandler={() => {
            setError(null);
            submitHandler();
          }}
        />
      </MainLayout.Content>
    );
  }

  return (
    <>
      <MainLayout.Content>
        <StyledQuestion>Q. {data[stepIndex].question}</StyledQuestion>
        <RadioButtonGroup
          label={data[stepIndex].question}
          value={selectedValue[stepIndex].select}
          name={`question-${stepIndex}`}
          onChange={changeValueHandler}
        >
          {data[stepIndex].answer.map((option, index) => (
            <RadioButton
              id={`radio-${data[index].id}`}
              block
              key={data[index].id}
              value={index}
            >
              {option}
            </RadioButton>
          ))}
        </RadioButtonGroup>
      </MainLayout.Content>
      <MainLayout.Bottom>
        {stepIndex === data.length - 1 ? (
          <Button
            variant="primary"
            size="lg"
            block
            onClick={submitHandler}
            disabled={selectedValue[stepIndex].select === null}
          >
            제출하기
          </Button>
        ) : (
          <Button
            variant="primary"
            size="lg"
            block
            onClick={nextQuestionHandler}
            disabled={selectedValue[stepIndex].select === null}
          >
            다음 ( {stepIndex + 1} / {data.length} )
          </Button>
        )}
      </MainLayout.Bottom>
    </>
  );
}

export default React.memo(SurveyPage);
