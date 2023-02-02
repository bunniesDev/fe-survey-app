import styled from 'styled-components';
import React, { useState } from 'react';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import MainLayout from './components/UI/layouts/MainLayout';
import Card from './components/UI/Card';
import ProgressBar from './components/UI/ProgressBar';
import RadioButtonGroup from './components/UI/RadioButton/RadioButtonGroup';
import RadioButton from './components/UI/RadioButton/RadioButton';
import Button from './components/UI/Button';
import data from './data';
import submitData from './submit';
import useDialogs from './components/UI/Dialog/useDialogs';
import DialogAlerts from './components/UI/Dialog/DialogAlerts';

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
const NotSeletedMessage = styled.div`
  color: red;
  display: flex;
  justify-content: center;
`;
const NotSeletedMessageFont = styled.h3`
  margin: 5px;
`;

let count = 0;

function MyModal({ onClose, onSubmit }) {
  return (
    <DialogAlerts
      onSubmit={onSubmit}
      onClose={onClose}
      title="프론트엔드 설문조사"
      labelClose="돌아가기"
      labelSubmit="제출하기"
    >
      제출하시겠습니까?
    </DialogAlerts>
  );
}

export default function App1() {
  const [selectedVaule, setSelectedValue] = useState(submitData);
  const [question, setQuestion] = useState(data[count].question);
  const [counter, setCounter] = useState(data[count].id + 1);
  const [answer, setAnswer] = useState(data[count].answer);
  const [notSeleted, setNotSeleted] = useState(false);
  const { openDialog } = useDialogs();

  const handleChangeValue = v => {
    if (count === selectedVaule[count].id) {
      const update = [...selectedVaule];
      update.splice(count, 1, { id: count, select: v });
      console.log(update);
      setSelectedValue(update);
    }
  };
  const submitHandler = () => {
    if (selectedVaule[count].select === null) {
      setNotSeleted(true);
      return;
    }
    setNotSeleted(false);
    openDialog(MyModal, {
      onSubmit: () => {
        // console.log('비지니스 로직 처리...');
      },
    });
  };
  const nextQuestionHandler = () => {
    if (selectedVaule[count].select === null) {
      setNotSeleted(true);
      return;
    }
    count += 1;
    setQuestion(data[count].question);
    setCounter(data[count].id + 1);
    setAnswer(data[count].answer);
    setNotSeleted(false);
  };

  const prevQuestionHandler = () => {
    count -= 1;
    setQuestion(data[count].question);
    setCounter(data[count].id + 1);
    setAnswer(data[count].answer);
    setNotSeleted(false);
  };

  return (
    <MainLayout>
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
          value={selectedVaule[count].select}
          name="question-1"
          onChange={handleChangeValue}
        >
          {answer.map((option, index) => (
            <RadioButton
              id={`radio-${data[index].id}`}
              block
              key={data[index].id}
              value={option}
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
          <Button
            variant="primary"
            size="lg"
            block
            onClick={nextQuestionHandler}
          >
            다음
          </Button>
        )}
        {notSeleted ? (
          <NotSeletedMessage>
            <NotSeletedMessageFont>답변을 선택해주세요</NotSeletedMessageFont>
          </NotSeletedMessage>
        ) : (
          <Blank marginBottom={50} />
        )}
      </Card>
    </MainLayout>
  );
}
