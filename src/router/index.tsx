import { createBrowserRouter, type RouteObject } from 'react-router-dom';
// import { lazy, Suspense } from 'react';

import { Admin } from '../core/components/layouts/Admin';
import Home from '../home'
import Persona from '../admins/persona/views/searchs'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Admin />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/personas',
        element: <Persona />
      }

    ]
  }
]
export default createBrowserRouter(routes);