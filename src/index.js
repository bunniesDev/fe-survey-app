import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import App from './App';
import DialogProvider from './components/UI/Dialog/DialogProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <DialogProvider>
        <App />
      </DialogProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
