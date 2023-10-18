import { createBrowserRouter, type RouteObject } from 'react-router-dom';

import Admin from '@/core/layouts/Admin';
import Home from '@/home';
import PersonaTypeSearch from '@/generals/persona-type/views/searchs';
import PersonaSearch from '@/generals/personas/views/searchs';

// auth
import Auth from '@/core/layouts/Auth';
import Login from '@/auth/login/views';

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
				path: '/mineral-types',
				element: <PersonaTypeSearch />,
			},
			{
				path: '/minerals',
				element: <PersonaSearch />,
			},
		],
	},

	// login
	{
		path: '/login',
		element: <Auth />,
		children: [
			{
				index: true,
				element: <Login />,
			},
		],
	},
];

export default createBrowserRouter(routes);
