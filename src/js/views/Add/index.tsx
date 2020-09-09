// Packages
import React from 'react';
import { Form } from 'formalization';

// Hooks
import { useWorkerAdd } from '../../hooks/worker';

// Components
import Input from '../../components/Input';
import CPF from '../../components/Input/CPF';
import Numeric from '../../components/Input/Numeric';
import Money from '../../components/Input/Money';

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
					<CPF required label="CPF" name="cpf" />
					<Money required label="Salário bruto" name="income" />
					<Numeric required label="Dependentes" name="dependents" />

					<button className="block button background-primary-interactive m-0 roundless">Adicionar</button>
				</Form>
			</div>
		</div>
	);
}