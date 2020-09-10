// Packages
import React from 'react';
import { RouterContext } from 'react-complete-router';
import { Form } from 'formalization';

// Hooks
import { useWorker } from '../../hooks/worker';

// Components
import Input from '../../components/Input';
import CPF from '../../components/Input/CPF';
import Numeric from '../../components/Input/Numeric';
import Money from '../../components/Input/Money';

// Store
import workerInterface from '../../store/workers/interfaces';

export default function EditWorker ({id}: {id:string}) {

	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// context
	const { redirect } = React.useContext(RouterContext);

	// hooks
	const [worker, editWorker] = useWorker(id);

	// states
	const [edit, setedit] = React.useState<workerInterface>();

	// -------------------------------------------------
	// Effects
	// -------------------------------------------------

	React.useEffect(() => {
		setedit(worker as workerInterface);
	}, [worker]);

	// -------------------------------------------------
	// Callbacks
	// -------------------------------------------------

	const onEdit = React.useCallback((data) => {
		editWorker(data);
		redirect('/workers');

		return true;
	}, [editWorker, redirect]);

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<div className="container">
			<div className="card">
				<h2 className="text-center bold mb-5">Editar trabalhador</h2>

				<Form onSubmit={onEdit} data={[edit, setedit] as any} className="col-md-6 offset-md-3">
					<Input required label="Nome" name="nome" />
					<CPF required label="CPF" name="cpf" />
					<Money required label="Salário bruto" name="salario" />
					<Numeric required label="Dependentes" name="dependentes" />

					<button className="block button background-primary-interactive m-0 roundless">Editar</button>
				</Form>
			</div>
		</div>
	);
}