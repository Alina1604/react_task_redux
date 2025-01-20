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


// следует разделять функциональные части друг от друга, 
// в данном случае два редьюсера занимаются разныеми задачами, 
// а значит их точно необходимо разъеденить по соответствующим файлам: `store/reducers/paginationReducer` и `store/reducers/loginReducer`

// далее эту конструкцию из App.tsx (ниже) унести в store/reducers/index.tsx:
// const rootReducer = combineReducers({
//     auth: loginReducer,
//     pagination: paginationReducer,
// });


// для сведения: можно для названия интерфейсов использоваться префикс I (IPaginationState)
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
