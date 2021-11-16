import { State } from "./reducer";

type ReducerState = {
    auth: State
}

export const selectAuthenticatedStatus = (state: ReducerState) => (state.auth.isAuthenticated);
export const selectCheckingUserAuthentication = (state: ReducerState) => (state.auth.authenticatingUser);