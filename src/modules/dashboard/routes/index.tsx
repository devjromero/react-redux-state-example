import { lazy } from 'react';
import { Route } from '../../../config/types/Route.type';

const dashboardRoutes: Route[] = [
    {
        component: lazy(() => import('./../ui/Dashboard.wrapper')),
        exact: true,
        isPrivate: true,
        name: 'Dashboard',
        path: '/',
        icon: () => (<h1>Icon</h1>)
    }
];

export default dashboardRoutes;