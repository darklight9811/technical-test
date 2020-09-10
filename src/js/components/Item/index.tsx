// Packages
import React from 'react';
import { Link } from 'react-complete-router';

// Interfaces
import workerInterface from '../../store/workers/interfaces';

// Style
import './style.css';

// Hooks
import { useRemoveWorker } from '../../hooks/worker';
import { calculateBaseIncome, calculateIrrf } from '../../helpers/workers';


export default function Item (props: any) {

	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// hooks
	const removeWorker = useRemoveWorker();

	// constants
	const worker = props as workerInterface;

	// -------------------------------------------------
	// Memos
	// -------------------------------------------------

	const baseIncome = React.useMemo(() => {
		return calculateBaseIncome(worker);
	}, [worker]);

	const irrf = React.useMemo(() => {
		return calculateIrrf(baseIncome);
	}, [baseIncome]);

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<div className="row my-4 item">
			<div className="col-md-1 icon">
				<i className="fa fa-user mb-5" />
			</div>
			<div className="col-md-9">
				<h3>{worker.nome}</h3>
				<div className="row text-left">
					<div className="col-md-6 p-0">
						<p>CPF: {worker.cpf}</p>
						<p>{worker.dependentes} {worker.dependentes === 1? 'dependente':'dependentes'}</p>
						<p>Salário de R$ {worker.salario.toFixed(2)}</p>
						<p>Desconto de R$ {worker.desconto.toFixed(2)}</p>
					</div>
					<div className="col-md-6">
						<p>Salário base IR: R$ {baseIncome.toFixed(2)}</p>
						<p>Desconto IRRF: R$ {irrf.toFixed(2)}</p>
					</div>
				</div>
			</div>
			<div className="col-md-2">
				<div className="d-flex justify-content-end">
					<Link to={`workers/${worker.cpf}`} className="button px-3 group background-secondary-interactive col-sm-6"><i className="fa fa-edit" /></Link>
					<button onClick={() => removeWorker(worker.cpf)} className="button px-3 group background-danger-interactive col-sm-6"><i className="fa fa-times" /></button>
				</div>
			</div>
		</div>
	);
}