import React, {useCallback, useState} from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../../../assets/login-background.png';

import './login_page.css';

const LoginPage: React.FC = () => {
    const [username, setUsername] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const hasTrailingSpaces = useCallback((str: string) => /\s+$/.test(str), []);

    const handleLogin = useCallback(() => {
        const allowedWord = 'Admin';
        if (username.trim() !== allowedWord) {
            alert(`Вы ввели некорректный логин`);
            return;
        }

        if (username.trim() && !hasTrailingSpaces(username)) {
            dispatch({ type: 'LOGIN', payload: username.trim() });
            navigate('/protected');
        }
    }, [username, dispatch, navigate, hasTrailingSpaces]);

    const changeUserName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    }, []);

    return (
        <div
            className="login-page"
            style={{
                backgroundImage: `url(${backgroundImage})`
            }}
        >
            <div className="login-container">
                <h1>CinematicJourney.com</h1>
                <label
                    htmlFor="username-input"
                >
                    Логин:
                </label>
                <input
                    id="username-input"
                    type="text"
                    placeholder="Введите имя пользователя"
                    value={username}
                    onChange={changeUserName}
                />
                <button onClick={handleLogin}>Авторизоваться</button>
            </div>
        </div>
    );
};

export default LoginPage;

