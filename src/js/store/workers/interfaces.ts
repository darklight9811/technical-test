/**
 * We do not put the discount here because it is calculated at runtime
 */
export default interface workerInterface {
	id?: string;
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