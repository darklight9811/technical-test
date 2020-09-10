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
		path: "/workers",
		component: lazy(() => import(/* webpackChunkName: "List" */ '../views/List/index.tsx')),
		exact: true,
		navbar: true,
	},
	{
		title: "Adicionar funcionário",
		path: "/workers/add",
		component: lazy(() => import(/* webpackChunkName: "Add" */ '../views/Add/index.tsx')),
		exact: true,
	},
	{
		title: "Editar funcionário",
		path: "/workers/{id}",
		component: lazy(() => import(/* webpackChunkName: "Edit" */ '../views/Edit/index.tsx')),
		exact: true,
	},
	{
		title: "Sobre o projeto",
		path: "/about",
		component: lazy(() => import(/* webpackChunkName: "About" */ '../views/About/index.tsx')),
		exact: true,
		navbar: true,
	},
	{
		title: "Página não encontrada",
		component: lazy(() => import(/* webpackChunkName: "NotFound" */ '../views/NotFound/index.tsx')),
	}
];