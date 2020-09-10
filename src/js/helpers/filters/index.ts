// Packages
import Mask from 'vanilla-masker';

export function filterCPF (value: string) {
	return Mask.toPattern(value, "999.999.999-99");
}

export function filterNumber (value: string) {
	return Mask.toNumber(value) || "0";
}

export function filterMoney (value: string) {
	return Mask.toMoney(value);
}