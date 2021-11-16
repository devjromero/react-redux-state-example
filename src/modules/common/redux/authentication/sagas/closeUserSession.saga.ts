import { call, put, takeLatest } from 'redux-saga/effects';
import { clearLocalStorage } from '../../../services/authentication/clearLocalStorage';
import { cleanUserSession, finishUserAuthentication, startAuthenticatingUser } from '../actions';
import * as constants from './../constants';

function* handleSaga(): any {
    yield put(startAuthenticatingUser());
    clearLocalStorage();
    yield put(cleanUserSession());
    yield put(finishUserAuthentication());
}

function* closeUserSessionSaga() {
     yield takeLatest(constants.closeUserSession, handleSaga);
}
export default closeUserSessionSaga;