// Helpers
import { filterCPF, filterNumber, filterMoney } from ".";

describe("Test filter CPF", () => {
	it("Test write down full CPF", () => {
		const response = filterCPF("98104476718");

		expect(response).toBe("981.044.767-18");
	});

	it("Test write down partial CPF", () => {
		const response = filterCPF("9810");

		expect(response).toBe("981.0");
	});

	it("Test write down nothing", () => {
		const response = filterCPF("");

		expect(response).toBe("");
	});
});

describe("Test filter number", () => {
	it("Test write down a real number", () => {
		const response = filterNumber("100");

		expect(response).toBe("100");
	});

	it("Test write down a real number mixed with letters", () => {
		const response = filterNumber("2a2");

		expect(response).toBe("22");
	});

	it("Test write down nothing", () => {
		const response = filterNumber("");

		expect(response).toBe("0");
	});
});

describe("Test filter money", () => {
	it("Test write down a whole number", () => {
		const response = filterMoney("100");

		expect(response).toBe("1,00");
	});

	it("Test write down a partial number", () => {
		const response = filterMoney("1,00");

		expect(response).toBe("1,00");
	});
});