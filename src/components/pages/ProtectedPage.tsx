import React from 'react';
import { useSelector } from 'react-redux';
import backgroundImage from '../../assets/protected-page1.png';

const ProtectedPage: React.FC = () => {
    // от any нужно по-возможности избавляться
    const username = useSelector((state: any) => state.auth.username);

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