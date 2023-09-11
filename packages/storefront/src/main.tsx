import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux/es/exports';

import { QDSWrapper } from '@quirkles/component-library';

import { store, routes } from './app';

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <StrictMode>
    <ReduxProvider store={store}>
      <QDSWrapper>
        <RouterProvider router={router} />
      </QDSWrapper>
    </ReduxProvider>
  </StrictMode>,
);
