import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App';
import { ColorsProvider } from './contexts/colors';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

// eslint-disable-next-line function-paren-newline
root.render(
  <React.StrictMode>
    <ColorsProvider>
      <App />
    </ColorsProvider>
  </React.StrictMode>);

serviceWorkerRegistration.register();
