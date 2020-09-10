// Services
import reference from '../../services/referenceIrff.json';

export default function calculateIrrf (income: number) {
	// Get right calculation basis
	const key = Object.keys(reference)
	.map(item => parseFloat(item))
	.reduce((prev, curr) => prev < income ? curr:prev, 0);

	// Get data
	const data = (reference as any)[key || "default"];

	return (income / 100) * data.aliquota - data.deducao;
}