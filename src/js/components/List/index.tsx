// Packages
import React from 'react';

// Interfaces
import ListInterface from './interface';
import Paginator from './shared/Paginator';

export default function List ({children, data, onEmpty, paginate}: ListInterface) {

	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	const [ currPage, setCurrPage ] = React.useState(1);
	const [ perPage ] = React.useState(5);

	// -------------------------------------------------
	// Memos
	// -------------------------------------------------

	const RenderChildren = React.useMemo((): any => {
		if (data.length === 0)
			return onEmpty || null;

		const response: any[] = [];
		const startitem = paginate? ((currPage - 1) * perPage):0;
		const countitem = paginate? ((currPage) * perPage):data.length;

		for (let i = startitem; i < countitem; i++) {
			if (!data[i]) continue;

			response.push(React.cloneElement(children,{
				key: i,
				...data[i],
				...children.props,
			}));
		}

		return response;
	}, [children, currPage, data, onEmpty, paginate, perPage]);

	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	return (
		<div className="list">
			{RenderChildren}

			{
				paginate &&
				<Paginator
					current={currPage}
					total={Math.ceil(data.length / perPage)}
					setCurrent={setCurrPage}
				/>
			}
		</div>
	);
}