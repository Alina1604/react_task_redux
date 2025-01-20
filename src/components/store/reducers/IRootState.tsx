import IAuthState from "./IAuthState.tsx";
import IPaginationState from "./IPaginationState.tsx";

export interface IRootState {
    auth: IAuthState;
    pagination: IPaginationState;
}

export default IRootState
