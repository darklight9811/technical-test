// Packages
import React from 'react';
import { Route } from 'react-complete-router';

// Services
import routes from '../../services/routes';

export default function ComponentRoutes () {
	return routes.map((item) => {

		return (
			<Route {...item} key={item.title}>
				{item.component}
			</Route>
		);
	});
}