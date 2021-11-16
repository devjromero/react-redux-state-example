import { all } from 'redux-saga/effects';
import closeUserSessionSaga from '../../modules/common/redux/authentication/sagas/closeUserSession.saga';
import tryAuthenticateUserSaga from '../../modules/common/redux/authentication/sagas/tryAuthenticateUser.saga';
import loginUserWithCredentialsSaga from '../../modules/login/redux/sagas/loginUserWithCredentials.saga';

export default function* rootSaga() {
    yield all([
        tryAuthenticateUserSaga(),
        loginUserWithCredentialsSaga(),
        closeUserSessionSaga(),
    ]);   
}