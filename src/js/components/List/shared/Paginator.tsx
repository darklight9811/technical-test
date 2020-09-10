// Packages
import React from 'react';

// Interfaces
import PaginatorInterface from './interface';

export default function Paginator ({total, current, setCurrent}: PaginatorInterface) {

	// -------------------------------------------------
	// Memos
	// -------------------------------------------------

	const RenderPages = React.useMemo(() => {
		const response = [];

		for (let i = 1; i <= total; i++) {
			response.push(
				<li key={i} className={"page-item " + (current === i ? "active":"")}>
					<button onClick={() => setCurrent(i)} className="page-link">{i}</button>
				</li>
			);
		}

		return response;
	}, [total, current, setCurrent]);

	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	return (
		<div className="pagination justify-content-center">
			{RenderPages}
		</div>
	);
}