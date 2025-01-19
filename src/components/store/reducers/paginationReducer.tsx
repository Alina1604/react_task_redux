import IPaginationState from "./interfaces/IPaginationState.tsx";
import IRootAction from "./interfaces/IRootAction.tsx";

const initialPaginationState: IPaginationState = {
    currentPage: 1,
    itemsPerPage: 5,
};

export const paginationReducer = (
    state = initialPaginationState,
    action: IRootAction
) : IPaginationState => {
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

export default paginationReducer