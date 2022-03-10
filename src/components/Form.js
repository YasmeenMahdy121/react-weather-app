import React, { Component } from 'react';
import './Styles/Form.scss'
class Form extends Component {
    state = {
        city:'',
        country:''
    }
    // on change input values
    onChange = (e)=>{
        const name=e.target.name;
        const value=e.target.value;
        this.setState({[name]:value})
    }
    // on submit location
    onSubmit = (e)=>{
        e.preventDefault();
        if(this.state.city&&this.state.country){
            this.props.getWeather(this.state)
        }
    }
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input onChange={this.onChange} type='text' name='city' placeholder='Enter any city'/>
                <input onChange={this.onChange} type='text' name='country' placeholder='Enter any country'/>
                <button type='submit'>Submit</button>
            </form>
        );
    }
}

export default Form;