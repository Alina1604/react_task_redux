import React from "react";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import IProtectedRouteProps from "./IProtectedRouteProps.tsx";
import IRootState from "../store/reducers/interfaces/IRootState.tsx";

const ProtectedRoute: React.FC<IProtectedRouteProps> = ({ component: Component }) => {
    const isAuthenticated = useSelector((state: IRootState) => {
        return state.auth.isAuthenticated;
    });
    return isAuthenticated ? <Component /> : <Navigate to="/login" />;
};

export default ProtectedRoute