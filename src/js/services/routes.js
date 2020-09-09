// Packages
import { lazy } from 'react';

export default [
	{
		title: "Home",
		path: "/",
		component: lazy(() => import(/* webpackChunkName: "Home" */ '../views/Home/index.tsx')),
		exact: true,
		navbar: true,
	},
	{
		title: "Lista de funcionários",
		path: "/list",
		component: lazy(() => import(/* webpackChunkName: "List" */ '../views/List/index.tsx')),
		exact: true,
		navbar: true,
	},
	{
		title: "Adicionar funcionário",
		path: "/add",
		component: lazy(() => import(/* webpackChunkName: "Add" */ '../views/Add/index.tsx')),
		exact: true,
		navbar: true,
	},
	{
		title: "Página não encontrada",
		component: lazy(() => import(/* webpackChunkName: "NotFound" */ '../views/NotFound/index.tsx')),
	}
];