// Interfaces
import workerInterface from '../../store/workers/interfaces';

export default function calculateBaseIncome (worker: workerInterface) {
	return worker.salario - worker.desconto - worker.dependentes * 164.56;
}