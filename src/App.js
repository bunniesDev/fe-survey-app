import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GlobalStyles from './GlobalStyles';
import ChartPage from './pages/ChartPage';
import MainLayout from './components/layouts/MainLayout';

import IntroPage from './pages/IntroPage';
import TestPage from './pages/TestPage';
import SurveyPage from './pages/SurveyPage';

function App() {
  return (
    <MainLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="chartPage" element={<ChartPage />} />
          <Route path="survey" element={<SurveyPage />} />
          <Route path="test" element={<TestPage />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyles />
    </MainLayout>
  );
}

export default App;
