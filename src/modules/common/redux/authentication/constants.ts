import Constant from "../../domain/redux/constant.type";

export const tryAuthenticateUser: Constant = '[auth saga] tryAuthenticateUser';
export const authenticateUser: Constant = '[auth] authenticateUser';
export const startAuthenticatingUser: Constant = '[auth] startAuthenticatingUser';
export const finishUserAuthentication: Constant = '[auth] finishUserAuthentication';
export const closeUserSession: Constant = '[auth] closeUserSession';
export const cleanUserSession: Constant = '[auth] cleanUserSession';
