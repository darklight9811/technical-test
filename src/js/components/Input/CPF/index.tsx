// Packages
import React from 'react';

// Interfaces
import InputInterface from '../interface';

// Helpers
import { filterCPF } from '../../../helpers/filters';

// Components
import Input from '../';

export default function CPF (props: InputInterface) {

	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	return (
		<Input filters={filterCPF} {...props} />
	);
}