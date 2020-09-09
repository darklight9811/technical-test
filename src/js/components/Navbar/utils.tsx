// Packages
import React from 'react';
import { Link } from 'react-complete-router';

// Services
import routes from '../../services/routes';

export default function RouteLinks () {
	return routes
	.filter(item => item.navbar)
	.map((item) => {
		return (
			<Link className="navlink" to={item.path} key={item.title}>
				{item.title}
			</Link>
		);
	});
}