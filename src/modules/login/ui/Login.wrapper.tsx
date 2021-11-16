

import { PropsWithChildren, useEffect } from 'react'
import { _LoginPresenter } from './Login.presenter'
import { useForm, SubmitHandler, FieldError } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import Credential from '../domain/credential/credential.type';
import CredentialSchema from '../domain/credential/credential.schema';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/actions';


const Login: React.FC<any> = (props: PropsWithChildren<any>) => {
    const dispatch = useDispatch();
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Credential>({
        resolver: yupResolver(CredentialSchema)
    });
    
    const onSubmit: SubmitHandler<Credential> = (data: Credential) => dispatch(loginUser(data));
    
    return (
        <_LoginPresenter
            register    ={register}
            handleSubmit={handleSubmit(onSubmit)}
            errors={errors}
        />
    )
}

export default Login;
