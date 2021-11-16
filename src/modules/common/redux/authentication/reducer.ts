import * as constants from './constants';
import Action from '../../domain/redux/action.type';

export type State = {
    isAuthenticated: boolean
    name: string
    uid: string
    authenticatingUser: boolean,
    token: string,
}

const initState: State = {
    isAuthenticated: false,
    name: 'Invitado',
    authenticatingUser: true,
    uid: '',
    token:'',
}


const authReducer = (
    state: State = initState,
    action: Action<any>
):State => {
    switch (action.type) {
        case constants.authenticateUser: return {
            ...state, 
            name:               action?.payload?.name,
            uid:                action?.payload?.uid,
            token:              action?.payload?.token,
            isAuthenticated:    true,
            authenticatingUser: false,
        }
        case constants.startAuthenticatingUser: return {
            ...state,
            authenticatingUser: true,
        }
        case constants.finishUserAuthentication: return {
            ...state,
            authenticatingUser: false,
        }
        case constants.cleanUserSession: return {
            ...initState,
            isAuthenticated: false,
            authenticatingUser: false,
        }
        default: return initState;
    }
}

export default authReducer;