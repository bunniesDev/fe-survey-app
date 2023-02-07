import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

import GlobalStyles from './GlobalStyles';
import ChartPage from './pages/ChartPage';

import IntroPage from './pages/IntroPage';
import SurveyPage from './pages/SurveyPage';
import MainLayout from './components/layouts/MainLayout';

function App() {
  function setScreenSize() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  useEffect(() => {
    const isMobile = /Mobi/i.test(window.navigator.userAgent);

    if (isMobile) {
      setScreenSize();
    }
  });

  return (
    <>
      <BrowserRouter basename="fe-survey-app">
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route element={<MainLayout />}>
            <Route path="chart" element={<ChartPage />} />
            <Route path="survey" element={<SurveyPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <GlobalStyles />
    </>
  );
}

export default App;
