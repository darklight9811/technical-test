// Packages
import React from 'react';

// Hooks
import { useListWorkers } from '../../hooks/worker';

export default function Home () {

	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// hooks
	const workerList = useListWorkers();

	// -------------------------------------------------
	// Memos
	// -------------------------------------------------

	const incomeAll = React.useMemo(() => {
		return workerList.reduce((prev, curr) => prev + curr.salario, 0);
	}, [workerList]);

	const incomeHighest = React.useMemo(() => {
		return workerList.reduce((prev, curr) => prev < curr.salario ? curr.salario:prev, 0);
	}, [workerList]);

	const incomeMedium = React.useMemo(() => {
		return (incomeAll / workerList.length) || 0;
	}, [workerList, incomeAll]);

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<div className="container">
			<div className="card">
				<h2 className="text-center bold mb-5">Tabelas e cálculos do IRRF</h2>
				<p>A tabela do IR é um dos principais instrumentos para auxiliar os contribuintes na hora de enviar as informações fiscais para a Receita. Afinal, é nesse documento que constam as alíquotas do Imposto de Renda</p>
				<p>Isso quer dizer que é essa a fonte para você saber qual é o percentual que deve ser aplicado sobre os seus rendimentos. Portanto, na hora de fazer o cálculo e declarar seus rendimentos, ter essa tabela é fundamental para que você não envie nenhum dado errado e, consequentemente, não caia na malha fina.</p>
			</div>

			<div className="card mt-5">
				<h2 className="text-center bold mb-5">Estatisticas</h2>

				<div className="row">
					<div className="col-md-6">
						<p>Você possui o total de {workerList.length} {workerList.length === 1 ? "funcionário":"funcionários"}.</p>
						<p>Você gasta com o salário de seus funcionários R$ {incomeAll.toFixed(2)} mensal.</p>
						<p>O maior salário de seus funcionários são de R$ {incomeHighest.toFixed(2)}.</p>
						<p>Seus funcionários possuem a média salarial de R$ {incomeMedium.toFixed(2)}.</p>
					</div>
					<div className="col-md-6">
						
					</div>
				</div>
			</div>
		</div>
	);
}