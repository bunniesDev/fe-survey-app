import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/UI/Button';
import IntroLoading from '../components/UI/IntroLoading';
import NoneLayout from '../components/layouts/NoneLayout';
import IntroBunny from '../assets/images/intro_bunny.png';
import IntroBg from '../assets/images/intro_bg.png';
import { color } from '../theme';
import useDialogs from '../components/UI/Dialog/useDialogs';
import DialogAlerts from '../components/UI/Dialog/DialogAlerts';

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3rem 1.5rem;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);

  overflow-y: auto;
  &.intro-main {
    background-image: url(${IntroBg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom center;
    background-color: #81b2e3;
  }
`;

const StyledIntroTitle = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  font-family: 'CookieRunRegular', sans-serif;
  margin: 0 0 1rem;
  word-break: keep-all;
  color: white;
`;

const StyledIntroImage = styled.figure`
  margin: 0 auto;
  max-width: 20rem;
  max-height: 20rem;
  width: 60%;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;

  img {
    max-width: 100%;
    max-height: inherit;
    animation: fadeZoomIn 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    transform-origin: left bottom;
  }

  @keyframes fadeZoomIn {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const StyledButtnGroup = styled.div`
  margin: 2rem 0;
`;

const StyledFooter = styled.footer`
  text-align: center;
  margin: 2vh 0 0;
  p {
    color: ${color.$black};
    font-weight: 600;
    font-size: 1rem;
    margin: 0;
  }
`;

function SubmittedModal({ onClose, onCustom, onSubmit }) {
  return (
    <DialogAlerts
      onSubmit={onSubmit}
      onClose={onClose}
      onCustom={onCustom}
      title="제출완료"
      labelClose="닫기"
      labelCustom="다시하기"
      labelSubmit="이동하기"
    >
      이미 설문조사를 완료하였습니다. <br />
      결과 페이지로 이동하시겠습니까?
    </DialogAlerts>
  );
}

function IntroPage() {
  const [loading, setLoading] = useState(false);
  const { openDialog } = useDialogs();
  const navigate = useNavigate();

  const startSurveyHandler = () => {
    const isdone = localStorage.getItem('isSubmit');
    if (isdone === 'done') {
      openDialog(SubmittedModal, {
        onSubmit: () => {
          navigate('/chart');
        },
        onCustom: () => {
          localStorage.removeItem('isSubmit');
          navigate('/survey');
        },
      });
    } else {
      navigate('/survey');
    }
  };

  const resultPageHandler = () => {
    navigate('/chart');
  };

  const loadingTime = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      localStorage.setItem('visitedRecord', true);
    }, 3000);
  };

  useEffect(() => {
    if (!localStorage.getItem('visitedRecord')) {
      loadingTime();
    }
  }, []);

  const renderIntroLoading = <IntroLoading />;
  const renderIntroPage = (
    <>
      <div>
        <StyledIntroTitle>
          프론트엔드 취준생 <br />
          설문조사
        </StyledIntroTitle>
      </div>
      <div>
        <StyledIntroImage>
          <img src={IntroBunny} alt="" />
        </StyledIntroImage>
      </div>
      <div>
        <StyledButtnGroup>
          <Button
            variant="primary"
            size="lg"
            block
            onClick={startSurveyHandler}
          >
            시작하기
          </Button>
          <Button
            variant="secondary"
            size="lg"
            block
            onClick={resultPageHandler}
          >
            결과보기
          </Button>
        </StyledButtnGroup>
        <StyledFooter>
          <p>Product By.Bunnies Dev</p>
        </StyledFooter>
      </div>
    </>
  );

  return (
    <NoneLayout>
      <StyledArticle className={!loading && 'intro-main'}>
        {loading ? renderIntroLoading : renderIntroPage}
      </StyledArticle>
    </NoneLayout>
  );
}

export default IntroPage;
