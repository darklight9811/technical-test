export default interface workerInterface {
	nome: string;
	cpf: string;
	salario: number;
	desconto: number;
	dependentes: number;
}

export interface actionInterface {
	type: string,
	payload: workerInterface | string,
}