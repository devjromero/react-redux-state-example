import { LazyExoticComponent, FC } from "react";

export type Route = {
    name: string
    path: string
    exact: boolean
    component: LazyExoticComponent<FC<any>>
    icon?: any
    isPrivate: boolean
    noShowInMenu?: boolean
}

