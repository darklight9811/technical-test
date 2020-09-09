// Packages
import Mask from 'vanilla-masker';

export function validateCPF (value: string) {
	return Mask.toPattern(value, "999.999.999-99");
}

export function validateNumber (value: string) {
	return Mask.toNumber(value);
}

export function validateMoney (value: string) {
	return Mask.toMoney(value);
}