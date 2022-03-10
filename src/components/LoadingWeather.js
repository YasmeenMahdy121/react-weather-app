import React from 'react';
import './Styles/LoadingWeather.scss'
const LoadingWeather = (props) => {
    return (
        // loader
        <div className={`loader-container ${props.DisplayLoader}`}>
            <div className="loader"></div>
        </div>
    );
}

export default LoadingWeather;