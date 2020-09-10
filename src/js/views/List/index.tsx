// Packages
import React from 'react';
import { Link } from 'react-complete-router';

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
				<div className="row">
					<div className="col-md-10">
						<h2 className="text-center bold mb-5">Lista de funcionários</h2>
					</div>
					<div className="col-md-2">
						<Link to='/workers/add' className="button background-primary-interactive">Adicionar</Link>
					</div>
				</div>

				<List data={workerList} onEmpty="Nenhum funcionário registrado">
					<Item />
				</List>
			</div>
		</div>
	);
}