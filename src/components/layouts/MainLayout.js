import React, { useContext } from 'react';
import { MdHome, MdKeyboardArrowLeft } from 'react-icons/md';
import styled from 'styled-components';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import Header from './Header';
import Button from '../UI/Button';
import NoneLayout from './NoneLayout';
import ProgressBar from '../UI/ProgressBar';
import SurveyContext from '../../context/survey-context';
import data from '../../dummy/data';

const StyledMainLayout = styled(NoneLayout)``;

const StyledArticle = styled.article`
  padding: 0;
  height: calc(100vh - 4.5rem); /* fallback */
  height: calc(var(--vh, 1vh) * 100 - 4.5rem);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: auto;
`;

const StyledContentWrapper = styled.div`
  overflow-y: auto;
  padding: 2rem 1.5rem;
`;

const StyledButtonGroup = styled.div`
  padding: 1rem 1.5rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.25);
`;

function ContentArea({ children }) {
  return <StyledContentWrapper>{children}</StyledContentWrapper>;
}

function BottomArea({ children }) {
  return <StyledButtonGroup>{children}</StyledButtonGroup>;
}

function LayoutMain() {
  const navigate = useNavigate();
  const location = useLocation();
  const { stepIndex, onPrevQuestionHandler, onSubmitHandler } =
    useContext(SurveyContext);

  const historyBackHandler = () => {
    if (stepIndex === 0) {
      navigate('/');
    } else {
      onPrevQuestionHandler();
    }
  };

  const resetHandler = () => {
    onSubmitHandler();
    navigate('/');
  };

  return (
    <StyledMainLayout>
      <Header>
        <Header.Left>
          {location.pathname !== '/chart' && (
            <Button
              variant="text"
              size="md"
              startIcon={<MdKeyboardArrowLeft />}
              onClick={historyBackHandler}
            >
              Back
            </Button>
          )}
        </Header.Left>
        <Header.Title>FE Trending</Header.Title>
        <Header.Right>
          {location.pathname === '/chart' && (
            <Button variant="secondary" size="sm" onClick={resetHandler}>
              <MdHome />
            </Button>
          )}
        </Header.Right>
      </Header>
      {location.pathname !== '/chart' && (
        <ProgressBar step={stepIndex + 1} total={data.length} />
      )}
      <StyledArticle>
        <Outlet />
      </StyledArticle>
    </StyledMainLayout>
  );
}

const MainLayout = Object.assign(LayoutMain, {
  Content: ContentArea,
  Bottom: BottomArea,
});

export default MainLayout;
