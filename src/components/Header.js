import React, { Component } from 'react';
import './Styles/Header.scss';
class Header extends Component {
    render() {
        return (
            <header className='col-lg-4'>
                <h1>Weather Viewer</h1>
                <p>Coded with &#10084;&#65039; By Yasmeen Mahdy</p>
            </header>
        );
    }
}

export default Header;