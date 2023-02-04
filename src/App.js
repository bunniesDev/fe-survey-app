import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GlobalStyles from './GlobalStyles';
import ChartPage from './pages/ChartPage';

import IntroPage from './pages/IntroPage';
import SurveyPage from './pages/SurveyPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="chart" element={<ChartPage />} />
          <Route path="survey" element={<SurveyPage />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyles />
    </>
  );
}

export default App;
