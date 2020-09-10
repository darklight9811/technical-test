// Packages
import React from 'react';

// Interfaces
import InputInterface from '../interface';

// Helpers
import { filterMoney } from '../../../helpers/filters';

// Components
import Input from '../';

export default function Money (props: InputInterface) {

	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	return (
		<Input filters={filterMoney} {...props} />
	);
}