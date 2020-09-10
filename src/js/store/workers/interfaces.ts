export default interface WorkerInterface {
	nome: string;
	cpf: string;
	salario: number;
	desconto: number;
	dependentes: number;
}

export interface ActionInterface {
	type: string,
	payload: WorkerInterface | string,
}