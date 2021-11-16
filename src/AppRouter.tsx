    
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import { RoutesLoader } from './config/routes/RoutesLoader';
import { LoadingPage } from './modules/common/components/loading/loadingPage.wrapper';
import { selectAuthenticatedStatus, selectCheckingUserAuthentication } from './modules/common/redux/authentication/selectors';
import { useEffect } from 'react';
import { tryAuthenticateUser } from './modules/common/redux/authentication/actions';


export const AppRouter: React.FC<any> = () => {
    const dispatch = useDispatch();
    const loading: boolean = useSelector(selectCheckingUserAuthentication);
    const userAuthenticated: boolean = useSelector(selectAuthenticatedStatus);
    useEffect(() => {
        dispatch(tryAuthenticateUser())
    }, [])
    if (loading) {
        return (<LoadingPage />);
    }
    return (
        <div className='w-screen h-screen font-montserrat fixed'>
            <BrowserRouter>
                {
                    userAuthenticated
                        ? (<PrivateRoutesWrapper/>)
                        : (<PublicRoutesWrapper/>)
                }
            </BrowserRouter>
        </div>
    )
}

const PublicRoutesWrapper:React.FC<any> = () =>  (<RoutesLoader loadRoutesWhenPrivateAttributeIs={false}/>);
const PrivateRoutesWrapper: React.FC<any> = () => (<RoutesLoader loadRoutesWhenPrivateAttributeIs={true}/>);

