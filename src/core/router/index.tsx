import { createBrowserRouter, type RouteObject } from 'react-router-dom';

import Admin from '../layouts/Admin';
import Home from '../../home';
import PersonaTypeSearch from '../../generals/persona-type/views/searchs';
import PersonaSearch from '../../generals/personas/views/searchs';

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
];

export default createBrowserRouter(routes);