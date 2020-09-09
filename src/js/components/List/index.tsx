// Packages
import React from 'react';

// Interfaces
import ListInterface from './interface';

export default function List ({children, data, onEmpty}: ListInterface) {

	// -------------------------------------------------
	// Memos
	// -------------------------------------------------

	const RenderChildren = React.useMemo((): any => {
		if (data.length === 0)
			return onEmpty || null;

		const response: any[] = [];

		for (let i = 0; i < data.length; i++) {
			response.push(React.cloneElement(children,{
				key: i,
				...data[i],
				...children.props,
			}));
		}

		return response;
	}, [children, data, onEmpty]);

	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	return RenderChildren;
}