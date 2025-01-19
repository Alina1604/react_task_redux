import React from 'react';
import { useSelector } from 'react-redux';
import IRootState from "../../store/reducers/interfaces/IRootState.tsx";
import backgroundImage from '../../../assets/protected-page1.png';

import './protected_page.css';

const ProtectedPage: React.FC = () => {
    const username = useSelector((state: IRootState) => state.auth.username);

    return (
        <div className="protected-page">
            <div className="content">
                <h3>Приветствую, {username}!</h3>
            </div>
            <img className="corner-image" src={backgroundImage} alt="Corner Decoration" />
        </div>

    );
};

export default ProtectedPage;