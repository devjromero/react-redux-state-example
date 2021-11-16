import dashboardRoutes from '../../modules/dashboard/routes';
import loginRoutes from '../../modules/login/routes';
import notFoundRoutes from '../../modules/notFound/routes';
import { Route } from '../types/Route.type';

export const routes: Route[] = [
    ...loginRoutes,
    ...dashboardRoutes,


    
    
    
    
    
    
    
    
    
    
    
    ...notFoundRoutes,
];

