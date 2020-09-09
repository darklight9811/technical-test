// Packages
import React from 'react';

// Hooks
import { useListWorkers } from '../../hooks/worker';

// Components
import List from '../../components/List';
import Item from '../../components/Item';

export default function ListWorkers () {

	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// hooks
	const workerList = useListWorkers();

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<div className="container">
			<div className="card">
				<h2 className="text-center bold mb-5">Lista de funcionários</h2>

				<List data={workerList} onEmpty="Nenhum funcionário registrado">
					<Item />
				</List>
			</div>
		</div>
	);
}