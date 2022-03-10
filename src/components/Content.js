import React, { Component } from 'react';
import Form from './Form'
import Weather from './Weather'
import './Styles/Content.scss'
import axios from 'axios';
const API_KEY ='e36ed364400282e43250b6c4c0274d44';
class Content extends Component {
    state = {
        loaderContainer:'d-none',
        weatherSection:'d-none',
        weatherData:{ 
            city:'',
            weather:'',
            temperature:'',
            pressure:'',
            windSpeed:''
         },
        error:'' 
    }
    // get weather function
    getWeather = async location=>{
        // reset data when research
        this.setState({
            loaderContainer:'d-flex', 
            weatherSection:'d-none',
            weatherData:{ 
            city:'',
            weather:'',
            temperature:'',
            pressure:'',
            windSpeed:''
         },
        error:''
        })
        try{
            const {data} = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${location.city}%2C${location.country}&appid=e36ed364400282e43250b6c4c0274d44`);
            // get data that we will show to send it to the weather component through the state
            const weatherData = { 
                city:`${data.name} ${data.sys.country}`,
                weather:data.weather[0].description,
                temperature:`${(data.main.temp - 273.15).toFixed(2)} °C`,
                pressure:`${data.main.pressure} hPa`,
                windSpeed:`${data.wind.speed} m/s`
            } 
            // change state
            this.setState({loaderContainer:'d-none', weatherSection:'d-table', weatherData})
        }catch(error){
            // get error message
            const errorMessage = error.response.statusText;
            this.setState({loaderContainer:'d-none', error:errorMessage})
        }
    }
    render() { 
        return (
            <section className='content col-lg-8'>
                <div className='container'>
                    <Form getWeather={this.getWeather}/>
                    <Weather weather={this.state}/>
                </div>
            </section>
        );
    }
}
 
export default Content;