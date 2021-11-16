import Action from '../../common/domain/redux/action.type';
import * as constants from './constants';

export type State = {
    errors: any
    errorMessage: string
    loading: boolean
}

const initState: State = {
    errors: {},
    errorMessage: '',
    loading: false,
}


const authReducer = (
    state: State = initState,
    action: Action<any>
): State => {
    switch (action.type) {
        default: return initState;
    }
}

export default authReducer;