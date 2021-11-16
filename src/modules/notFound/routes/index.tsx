import { lazy } from 'react';
import { Route } from '../../../config/types/Route.type';

const notFoundRoutes: Route[] = [
    {
        component: lazy(() => import('./../ui/PublicNotFound.wrapper')),
        exact: false,
        isPrivate: false,
        name: 'Not Found Pu',
        path: '/',
        icon: () => (<h1>Icon</h1>),
        noShowInMenu: true,
    },
    {
        component: lazy(() => import('./../ui/Private/PrivateNotFound.wrapper')),
        exact: false,
        isPrivate: true,
        name: 'Not Found Pr',
        path: '/',
        icon: () => (<h1>Icon</h1>),
        noShowInMenu: true,
    },
];

export default notFoundRoutes;