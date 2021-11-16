import Action from '../../domain/redux/action.type';
import * as constans from './constants';


export const tryAuthenticateUser = (): Action<null> => ({ type: constans.tryAuthenticateUser });
export const startAuthenticatingUser = (): Action<null> => ({ type: constans.startAuthenticatingUser });
export const finishUserAuthentication = (): Action<null> => ({ type: constans.finishUserAuthentication });
export const authenticateUser = (payload: any): Action<any> => ({
    type: constans.authenticateUser,
    payload
});
export const closeUserSession = (): Action<any> => ({ type: constans.closeUserSession,});
export const cleanUserSession = (): Action<any> => ({ type: constans.cleanUserSession,});