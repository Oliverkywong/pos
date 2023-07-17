import { AuthAction } from "./action";
import { AuthState } from "./state";

const initialState: AuthState = {
    token: 'null'
}

export function authReducer(state: AuthState = initialState, action: AuthAction): AuthState {
    switch (action.type) {
        case '@@auth/CAN_ACCESS':
            return {
                ...state,
                token: action.token
            }
        default:
            return state;
    }
}