// Packages
import React from 'react';
import { Router, Switch } from 'react-complete-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Utils
import ComponentRoutes from './utils';

// Components
import Navbar from '../../components/Navbar';

// Store
import store from '../../store';

export default function App() {

	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	return (
		<Provider store={createStore(store)}>
			<Router>
				<Navbar />

				<div className="pt-4">
					<React.Suspense fallback={''}>
						<Switch>
							{ComponentRoutes()}
						</Switch>
					</React.Suspense>
				</div>
			</Router>
		</Provider>
	);
}