import React, { createContext, useState, useMemo } from 'react';
// import { postQuestions } from '../util/firebaseApi';
import data from '../dummy/data';

const submitData = [];
for (let i = 0; i < data.length; i += 1) {
  submitData.push({ id: i, select: null });
}

const SurveyContext = createContext({
  questionList: '',
  answerList: [],
  stepIndex: 0,
  changeValueHandler: () => {},
  prevPageHandler: () => {},
  nextPageHandler: () => {},
});

export function SurveyContextProvider({ children }) {
  const [selected, setSelectedValue] = useState(submitData);
  const [counter, setCounter] = useState(0);

  const changeValueHandler = value => {
    if (counter === selected[counter].id) {
      const update = [...selected];
      update.splice(counter, 1, { id: counter, select: value ? +value : null });
      setSelectedValue(update);
    }
  };

  const submitHandler = () => {
    setCounter(0);
    setSelectedValue(submitData);
  };

  const nextQuestionHandler = () => {
    setCounter(prevState => prevState + 1);
  };

  const prevQuestionHandler = () => {
    setCounter(prevState => prevState - 1);
  };

  const value = useMemo(
    () => ({
      selectedValue: selected,
      stepIndex: counter,
      onPrevQuestionHandler: prevQuestionHandler,
      onNextQuestionHandler: nextQuestionHandler,
      onChangeValueHandler: changeValueHandler,
      onSubmitHandler: submitHandler,
    }),
    [counter, selected],
  );

  return (
    <SurveyContext.Provider value={value}>{children}</SurveyContext.Provider>
  );
}

export default SurveyContext;
