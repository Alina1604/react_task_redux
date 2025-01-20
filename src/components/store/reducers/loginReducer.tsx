import IAuthState from "./IAuthState.tsx";
import IRootAction from "./IRootAction.tsx";

const initialAuthState: IAuthState = {
    isAuthenticated: false,
    username: null,
};

export const loginReducer = (state = initialAuthState, action: IRootAction) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                isAuthenticated: true,
                username: action.payload,
            };
        case 'LOGOUT':
            return initialAuthState;
        default:
            return state;
    }
};

export default loginReducer