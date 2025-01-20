import React from 'react';
import {Link, useLocation} from 'react-router-dom';

const Header: React.FC = () => {
    const location = useLocation();
    if (location.pathname === '/login') {
        return null;
    }

    return (
        <header className="header">
            <nav>
                <Link to="/login">Авторизация</Link>
                <Link to="/home">Главная страница</Link>
                <Link to="/protected">Защищенная страница</Link>
                <Link to="/paginated">Страница с пагинацией</Link>
            </nav>
        </header>
    );
};

export default Header;
