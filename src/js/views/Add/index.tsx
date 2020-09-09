// Packages
import React from 'react';
import { Form } from 'formalization';

// Hooks
import { useWorkerAdd } from '../../hooks/worker';

// Components
import Input from '../../components/Input';

export default function AddWorker () {

	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// hooks
	const addWorker = useWorkerAdd();

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<div className="container">
			<div className="card">
				<h2 className="text-center bold mb-5">Adicionar novo trabalhador</h2>

				<Form onSubmit={addWorker} className="col-md-6 offset-md-3">
					<Input required label="Nome" name="name" />
					<Input required label="CPF" name="cpf" />
					<Input required label="Salário bruto" name="income" />
					<Input required label="Dependentes" name="dependents" />

					<button className="block button background-primary-interactive m-0">Adicionar</button>
				</Form>
			</div>
		</div>
	);
}