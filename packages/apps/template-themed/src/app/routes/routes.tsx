import { RouteObject } from 'react-router-dom';
import { Login, Home } from '../pages';

export const routes: RouteObject[] = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <Home />,
  },
];
