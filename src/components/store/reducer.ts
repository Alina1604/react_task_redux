import { AnyAction } from 'redux';

interface AuthState {
    isAuthenticated: boolean;
    username: string | null;
}

const initialAuthState: AuthState = {
    isAuthenticated: false,
    username: null,
};

export const loginReducer = (state = initialAuthState, action: AnyAction): AuthState => {
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

interface PaginationState {
    currentPage: number;
    itemsPerPage: number;
}

const initialPaginationState: PaginationState = {
    currentPage: 1,
    itemsPerPage: 5,
};

export const paginationReducer = (
    state = initialPaginationState,
    action: AnyAction
): PaginationState => {
    switch (action.type) {
        case 'SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.payload,
            };
        case 'SET_ITEMS_PER_PAGE':
            return {
                ...state,
                itemsPerPage: action.payload,
            };
        default:
            return state;
    }
};
