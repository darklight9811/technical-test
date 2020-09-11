export function validateRequired (value: string) {
	if (!value || value === "0,00") return "Esse campo é obrigatório";
}