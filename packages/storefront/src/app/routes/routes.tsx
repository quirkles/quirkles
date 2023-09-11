import { RouteObject } from 'react-router-dom';

import { Login, HomePage } from '../pages';

export const routes: RouteObject[] = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/home',
    element: <HomePage />,
  },
];
