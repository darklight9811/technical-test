export default interface PaginatorInterface {
	total: number,
	current: number,
	setCurrent: (data:number) => void,
}