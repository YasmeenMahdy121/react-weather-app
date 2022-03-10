import React, { Component } from 'react';
import './Styles/Weather.scss';
import LoadingWeather from './LoadingWeather'
class Weather extends Component {
    render() {
        // destructing data from props
        const {city, weather, temperature, pressure, windSpeed}=this.props.weather.weatherData;
        return (
            <section className='weatherContainer'>
                {/* loader */}
                <LoadingWeather DisplayLoader={this.props.weather.loaderContainer}/>
                {/* error message */}
                {this.props.weather.error&&<p>Sorry this location {this.props.weather.error}</p>}
                {/* table of weather content */}
                <table className={`table table-bordered ${this.props.weather.weatherSection}`}>
                    <tbody>
                        <tr>
                            <th scope="row">City</th>
                            <td>{city}</td>
                        </tr>
                        <tr>
                            <th scope="row">Weather</th>
                            <td>{weather}</td>
                        </tr>
                        <tr>
                            <th scope="row">Temperature</th>
                            <td>{temperature}</td>
                        </tr>
                        <tr>
                            <th scope="row">Pressure</th>
                            <td>{pressure}</td>
                        </tr>
                        <tr>
                            <th scope="row">Wind Speed</th>
                            <td>{windSpeed}</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        );
    }
}

export default Weather;