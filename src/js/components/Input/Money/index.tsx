// Packages
import React from 'react';
import { Input as DataInput } from 'formalization';

// Interfaces
import InputInterface from '../interface';

// Helpers
import { validateMoney } from '../../../helpers/validators';

export default function Money ({label, name, required, autoFocus}: InputInterface) {

	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	return (
		<div className="form-group">
			{label && <label htmlFor={name}>{label} {required && <span>*</span>}</label>}
			<DataInput filters={validateMoney} id={name} name={name} autoFocus={autoFocus} className="form-control" />
		</div>
	);
}