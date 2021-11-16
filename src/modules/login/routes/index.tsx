import { lazy } from 'react';
import { Route } from '../../../config/types/Route.type';

const loginRoutes: Route[] = [
    {
        component: lazy(() => import('./../ui/Login.wrapper')),
        exact: true,
        isPrivate: false,
        name: 'Login',
        path: '/',
        icon: () => (<h1>Icon</h1>),
        noShowInMenu: true,
    }
]; 

export default loginRoutes;