import React from 'react';
import backgroundImage from '../../../assets/home-img.png';

import './home_page.css';

const HomePage: React.FC = () => {
    return (
        <div className="home-page">
            <div className="content">
                <h2>Добро пожаловать на CinematicJourney.com </h2>
                <p>Предназначенный для любителей кино онлайн-ресурс представляет собой тщательно подобранный
                    список фильмов, которые должен посмотреть каждый</p>
            </div>
            <img className="background-image" src={backgroundImage} alt="Background"/>
        </div>
    );
};

export default HomePage;