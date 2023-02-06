import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import App from './App';
import DialogProvider from './components/UI/Dialog/DialogProvider';
import { SurveyContextProvider } from './context/survey-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <SurveyContextProvider>
        <DialogProvider>
          <App />
        </DialogProvider>
      </SurveyContextProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
