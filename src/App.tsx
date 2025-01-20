import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import {Provider, useSelector} from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { loginReducer, paginationReducer } from './components/store/reducer';
import Header from './components/Header';
import LoginPage from './components/pages/LoginPage';
import HomePage from './components/pages/HomePage';
import ProtectedPage from './components/pages/ProtectedPage';
import PaginatedPage from './components/pages/PaginatedPage';
import './index.css';

const rootReducer = combineReducers({
    auth: loginReducer,
    pagination: paginationReducer,
});

const store = createStore(rootReducer);

const App: React.FC = () => {
    return (
            <Provider store={store}>
                <Router>
                    <Header />
                    <Routes>
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/home" element={<ProtectedRoute component={HomePage} />} />
                        <Route path="/protected" element={<ProtectedRoute component={ProtectedPage} />} />
                        <Route path="/paginated" element={<ProtectedRoute component={PaginatedPage} />} />
                        <Route path="*" element={<Navigate to="/login" />} />
                    </Routes>
                </Router>
            </Provider>
    );
};

interface ProtectedRouteProps {
    component: React.FC;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ component: Component }) => {
    const isAuthenticated = useSelector((state: any) => state.auth.isAuthenticated);
    return isAuthenticated ? <Component /> : <Navigate to="/login" />;
};

export default App
