import { validateRequired } from ".";

describe("Test required validator", () => {
	it("Test empty field", () => {
		const response = validateRequired('');

		expect(!!response).toBe(true);
	});

	it("Test written field", () => {
		const response = validateRequired('yay');

		expect(!!response).toBe(false);
	});
});