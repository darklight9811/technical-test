export default interface InputInterface {
	label?: string,
	name: string,
	required?: boolean,
	autoFocus?: boolean,
	filters?: any[] | any,
	validations?: any[] | any,
}