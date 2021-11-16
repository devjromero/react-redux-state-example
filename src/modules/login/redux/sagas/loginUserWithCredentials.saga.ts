import { call, put, takeLatest } from 'redux-saga/effects';
import * as constants from './../constants';
import loginUserWithCredentialsService from '../../services/loginUserWithCredentials.service';
import { authenticateUser } from '../../../common/redux/authentication/actions';
import { useHistory } from 'react-router';


function* handleSaga(): any {
    
    try {
        // yield put(startAuthenticatingUser());
        const response = yield call(() => loginUserWithCredentialsService({
            code: '123'
        }));
        console.log('login user');
        
        // if (!response) {
        //     // yield put(finishUserAuthentication());
        //     return;
        // }
        
        yield put(authenticateUser({
            name:   response.name,
            uid:    response.uid,
            token:  response.token,
        }));
        
    } catch (e) {
        
    }
}

function* loginUserWithCredentialsSaga() {
     yield takeLatest(constants.loginUser, handleSaga);
}
export default loginUserWithCredentialsSaga;