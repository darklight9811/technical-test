// Packages
import React from 'react';

// Interfaces
import InputInterface from '../interface';

// Helpers
import { filterNumber } from '../../../helpers/filters';

// Components
import Input from '../';

export default function Number (props: InputInterface) {

	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	return (
		<Input filters={filterNumber} {...props} />
	);
}