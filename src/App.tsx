import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './components/store/store'
import Header from './components/pages/header/Header.tsx';
import LoginPage from './components/pages/LoginPage/LoginPage.tsx';
import HomePage from './components/pages/HomePage/HomePage.tsx';
import ProtectedPage from './components/pages/ProtectedPage/ProtectedPage.tsx';
import PaginatedPage from './components/pages/PaginatedPage/PaginatedPage.tsx';
import ProtectedRoute from "./components/routes/protectedRoute.tsx";

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

export default App
