// Packages
import React from 'react';
import { Input as DataInput, Error } from 'formalization';

// Helpers
import {validateRequired} from '../../helpers/validators';

// Interfaces
import InputInterface from './interface';

export default function Input ({label, name, required, autoFocus, validations, filters}: InputInterface) {

	// -------------------------------------------------
	// Validations
	// -------------------------------------------------

	const validates = React.useMemo(() => {
		const response: any[] = [];

		if (validations) response.push(validations);
		if (required) response.push(validateRequired);

		return response;
	}, [required, validations]);

	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	return (
		<div className="form-group">
			{label && <label htmlFor={name}>{label} {required && <span>*</span>}</label>}
			<DataInput validates={validates as any} filters={filters} id={name} name={name} autoFocus={autoFocus} className="form-control" />
			<Error name={name} />
		</div>
	);
}