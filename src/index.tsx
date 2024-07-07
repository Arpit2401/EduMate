import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/system';
import { CssBaseline } from '@mui/material';

import { defaultTheme } from '@themes';

import App from './App';
import { LoaderProvider } from 'components/FullPageLoader/FullPageLoader.provider';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <BrowserRouter basename={'/'}>
    <React.StrictMode>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline>
          <LoaderProvider>
            <App />
          </LoaderProvider>
        </CssBaseline>
      </ThemeProvider>
    </React.StrictMode>
  </BrowserRouter>
);
