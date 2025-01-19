import React, {useCallback} from 'react';
import {Link, useLocation} from 'react-router-dom';

import './header.css';

const Header: React.FC = () => {
    const location = useLocation();

    const shouldRenderHeader = useCallback(() => location.pathname !== '/login', [location.pathname]);
    if (!shouldRenderHeader()) {
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
