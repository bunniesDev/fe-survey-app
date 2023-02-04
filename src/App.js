import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GlobalStyles from './GlobalStyles';
import ChartPage from './pages/ChartPage';

import IntroPage from './pages/IntroPage';
import TestPage from './pages/TestPage';
import SurveyPage from './pages/SurveyPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="chart" element={<ChartPage />} />
          <Route path="survey" element={<SurveyPage />} />
          <Route path="test" element={<TestPage />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyles />
    </>
  );
}

export default App;
