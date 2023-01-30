import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import App from './App';
import DialogProvider from './components/UI/Dialog/DialogProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <DialogProvider>
          <App />
        </DialogProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
