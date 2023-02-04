import styled from 'styled-components';
import React, { useState } from 'react';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import Card from '../components/UI/Card';
import ProgressBar from '../components/UI/ProgressBar';
import RadioButtonGroup from '../components/UI/RadioButton/RadioButtonGroup';
import RadioButton from '../components/UI/RadioButton/RadioButton';
import Button from '../components/UI/Button';
import data from '../dummy/data';
import useDialogs from '../components/UI/Dialog/useDialogs';
import DialogAlerts from '../components/UI/Dialog/DialogAlerts';
import { postQuestions } from '../util/firebaseApi';

const Count = styled.h4`
  text-align: center;
  margin-top: 40px;
  margin-bottom: 60px;
  font-size: 20px;
`;

const Question = styled.h2`
  text-align: center;
  margin-top: 40px;
  margin-bottom: 60px;
`;
const Blank = styled.div`
  margin-bottom: ${props => props.marginBottom}px;
`;
const NotSelectedMessage = styled.div`
  color: red;
  display: flex;
  justify-content: center;
`;
const NotSelectedMessageFont = styled.h3`
  margin: 5px;
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
      제출하시겠습니까? 제출 시,잠시후 결과 페이지로 이동됩니다.🎉
    </DialogAlerts>
  );
}

let count = 0;
let indexA = 0;
const submitData = [];
for (let i = 0; i < data.length; i += 1) {
  submitData.push({ id: i, select: null });
}

export default function SurveyPage() {
  const [selectedValue, setSelectedValue] = useState(submitData);
  const [question, setQuestion] = useState(data[count].question);
  const [counter, setCounter] = useState(data[count].id + 1);
  const [answer, setAnswer] = useState(data[count].answer);
  const [notSelected, setNotSelected] = useState(false);
  const navigate = useNavigate();
  const { openDialog } = useDialogs();

  const handleChangeValue = v => {
    if (count === selectedValue[count].id) {
      const update = [...selectedValue];
      update.splice(count, 1, { id: count, select: v, index: indexA });
      setSelectedValue(update);
    }
  };

  const submitHandler = () => {
    if (selectedValue[count].select === null) {
      setNotSelected(true);
      return;
    }
    setNotSelected(false);
    openDialog(MyModal, {
      onSubmit: () => {
        const finalData = selectedValue.map(el => el.index);
        try {
          postQuestions(finalData);
          setTimeout(() => {
            navigate('/chart');
          }, 500);
        } catch (error) {
          console.log('-통신 에러-');
        }
      },
    });
  };

  const nextQuestionHandler = () => {
    if (selectedValue[count].select === null) {
      setNotSelected(true);
      return;
    }
    count += 1;
    setQuestion(data[count].question);
    setCounter(data[count].id + 1);
    setAnswer(data[count].answer);
    setNotSelected(false);
  };

  const prevQuestionHandler = () => {
    count -= 1;
    setQuestion(data[count].question);
    setCounter(data[count].id + 1);
    setAnswer(data[count].answer);
    setNotSelected(false);
  };

  return (
    <Card>
      {count === 0 ? null : (
        <Button
          variant="text"
          size="sm"
          startIcon={<MdKeyboardArrowLeft />}
          onClick={prevQuestionHandler}
        >
          이전질문
        </Button>
      )}
      <Count>
        {counter} of {data.length}
      </Count>
      <ProgressBar step={counter} total="20" />
      <Question>Q. {question}</Question>
      <RadioButtonGroup
        label="질문 1"
        value={selectedValue[count].select}
        name="question-1"
        onChange={handleChangeValue}
      >
        {answer.map((option, index) => (
          <RadioButton
            id={`radio-${data[index].id}`}
            block
            key={data[index].id}
            value={option}
            onClick={() => {
              indexA = index;
            }}
          >
            {option}
          </RadioButton>
        ))}
      </RadioButtonGroup>
      <Blank marginBottom={40} />

      {count === data.length - 1 ? (
        <Button variant="primary" size="lg" block onClick={submitHandler}>
          제출하기
        </Button>
      ) : (
        <Button variant="primary" size="lg" block onClick={nextQuestionHandler}>
          다음
        </Button>
      )}
      {notSelected ? (
        <NotSelectedMessage>
          <NotSelectedMessageFont>답변을 선택해주세요</NotSelectedMessageFont>
        </NotSelectedMessage>
      ) : (
        <Blank marginBottom={50} />
      )}
    </Card>
  );
}
