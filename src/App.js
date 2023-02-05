import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GlobalStyles from './GlobalStyles';
import ChartPage from './pages/ChartPage';

import IntroPage from './pages/IntroPage';
import SurveyPage from './pages/SurveyPage';
import MainLayout from './components/layouts/MainLayout';

function App() {
  return (
    <>
      <BrowserRouter>
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
