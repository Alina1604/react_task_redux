import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../../assets/login-background.png';

const LoginPage: React.FC = () => {
    const [username, setUsername] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const hasTrailingSpaces = (str: string) => /\s+$/.test(str);

    const handleLogin = () => {
        const allowedWord = 'Admin';
        if (username.trim() !== allowedWord) {
            alert(`Вы ввели некорректный логин`);
            return;
        }

        if (username.trim() && !hasTrailingSpaces(username)) {
            dispatch({ type: 'LOGIN', payload: username.trim()});
            navigate('/protected');
        }
    };

    return (
        <div
            className="login-page"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '80vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <div className="login-container">
                <h1>CinematicJourney.com</h1>
                <label
                    htmlFor="username-input"
                    style={{ display: 'block', textAlign: 'left', marginBottom: '8px' }}
                >
                    Логин:
                </label>
                <input
                    id="username-input"
                    type="text"
                    placeholder="Введите имя пользователя"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button onClick={handleLogin}>Авторизоваться</button>
            </div>
        </div>
    );
};

export default LoginPage;

