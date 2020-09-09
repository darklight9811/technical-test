/**
 * We do not put the discount here because it is calculated at runtime
 */
export default interface workerInterface {
	id?: string;
	name: string;
	cpf: string;
	income: number;
	dependents: number;
}

export interface actionInterface {
	type: string,
	payload: workerInterface | string,
}