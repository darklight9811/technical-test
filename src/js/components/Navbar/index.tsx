// Packages
import React from 'react';

// Style
import './style.css';

// Utils
import RouteLinks from './utils';

export default function Navbar () {

	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	return (
		<div className="navholder">
			<div className="container">
				<div className="navbar">
					{RouteLinks()}
				</div>
			</div>
		</div>
	);
}