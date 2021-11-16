import Action from "../../common/domain/redux/action.type";
import Credential from "../domain/credential/credential.type";
import * as constans from './constants';

export const loginUser = (credentail: Credential): Action<Credential> => ({
    type: constans.loginUser,
    payload: credentail
});