import { PropsWithChildren, Suspense } from "react"
import { Route, Switch } from "react-router-dom";

import { LoadingPage } from "../../modules/common/components/loading/loadingPage.wrapper";
import { Route as RouteType } from '../types/Route.type';
import { routes as appRoutes } from './routes';

// type PropTypes = PropsWithChildren<{
//     loadRoutesWhenPrivateAttributeIs: boolean
// }>
type PropTypes = {
    loadRoutesWhenPrivateAttributeIs: boolean
}
export const RoutesLoader: React.FC<PropTypes> = (props: PropsWithChildren<PropTypes>) => {
    const {
        loadRoutesWhenPrivateAttributeIs
    } = props;

    
    const filterFunction = (route: RouteType) => loadRoutesWhenPrivateAttributeIs === route.isPrivate;

    const routes: RouteType[] = appRoutes.filter(filterFunction);
    return (
        <Suspense fallback={LoadingPage}>
            <Switch>
                {
                    routes.map(routeRenderFunction)
                }
            </Switch>
        </Suspense>
    )
}

const routeRenderFunction = (route: RouteType, key: number) => (
    <Route
        key={`route-${key}`}
        exact={route.exact}
        path={route.path}
        component={route.component}
    />
);