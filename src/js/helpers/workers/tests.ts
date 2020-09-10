// Services
import reference from '../../services/referenceIrff.json';

// interfaces
import workerInterface from '../../store/workers/interfaces';

// Helpers
import calculateIrrf from './calculateIrrf';
import calculateBaseIncome from './calculateBaseIncome';

// -------------------------------------------------
// Base Income
// -------------------------------------------------

describe("Test base IR income", () => {
	it('Test 2000 income, 0 discount, 0 dependent', () => {
		const worker: workerInterface = {salario:2000,desconto:0,dependentes:0,nome:"",cpf:""};
		const calculated = calculateBaseIncome(worker);

		expect(calculated).toBe(2000);
	});

	it('Test 4000 income, 0 discount, 0 dependent', () => {
		const worker: workerInterface = {salario:4000,desconto:0,dependentes:0,nome:"",cpf:""};
		const calculated = calculateBaseIncome(worker);

		expect(calculated).toBe(4000);
	});

	it('Test 2000 income, 100 discount, 0 dependent', () => {
		const worker: workerInterface = {salario:2000,desconto:100,dependentes:0,nome:"",cpf:""};
		const calculated = calculateBaseIncome(worker);

		expect(calculated).toBe(1900);
	});

	it('Test 4000 income, 100 discount, 0 dependent', () => {
		const worker: workerInterface = {salario:4000,desconto:100,dependentes:0,nome:"",cpf:""};
		const calculated = calculateBaseIncome(worker);

		expect(calculated).toBe(3900);
	});

	it('Test 2000 income, 0 discount, 1 dependent', () => {
		const worker: workerInterface = {salario:2000,desconto:0,dependentes:1,nome:"",cpf:""};
		const calculated = calculateBaseIncome(worker);

		expect(calculated).toBeCloseTo(1835.44, 0.1);
	});

	it('Test 2000 income, 0 discount, 2 dependents', () => {
		const worker: workerInterface = {salario:2000,desconto:0,dependentes:2,nome:"",cpf:""};
		const calculated = calculateBaseIncome(worker);

		expect(calculated).toBeCloseTo(1670.88, 0.1);
	});
});

// -------------------------------------------------
// IRRF
// -------------------------------------------------

describe('Test IRRF calculation', () => {
	it('Test the reference file exists', () => {
		expect(reference).toBeDefined();
	});

	it('Test if small income matches lowest bid', () => {
		const income = 500;
		const calculated = calculateIrrf(income);

		expect(calculated).toBe(500);
	});

	it('Test if small income matches lowest bid', () => {
		const income = 1000;
		const calculated = calculateIrrf(income);

		expect(calculated).toBe(1000);
	});

	it('Test if small income matches second bid', () => {
		const income = 2000;
		const calculated = calculateIrrf(income);

		expect(calculated).toBeCloseTo(7.2, 0.1);
	});

	it('Test if small income matches highest bid', () => {
		const income = 5000;
		const calculated = calculateIrrf(income);

		expect(calculated).toBeCloseTo(505.64, 0.1);
	});
});