import { combineReducers } from "redux";
import authReducer from "../../modules/common/redux/authentication/reducer";

export const rootReducer = combineReducers({
    auth: authReducer
});

