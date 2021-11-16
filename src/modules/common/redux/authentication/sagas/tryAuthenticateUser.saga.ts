import { call, put, takeLatest } from "redux-saga/effects";
import getAuthorizationService from "../../../services/authentication/getAuthorization.service";
import { authenticateUser, finishUserAuthentication, startAuthenticatingUser } from "../actions";
import { tryAuthenticateUser } from '../constants';

function* handleSaga():any {
    try {
        yield put(startAuthenticatingUser());
        const response = yield call(() => getAuthorizationService({
            code: '123'
        }));

        // if (!response) {
            yield put(finishUserAuthentication());
        //     return;
        // }
        // authenticate user
        // yield put(authenticateUser({
        //     name:   response.name,
        //     uid:    response.uid,
        //     token:  response.token,
        // }));
        
    } catch (e) {
        
    }

}

function* tryAuthenticateUserSaga() {
    yield takeLatest(tryAuthenticateUser, handleSaga);
}

export default tryAuthenticateUserSaga;