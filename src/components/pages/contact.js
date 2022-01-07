import React, { Component } from 'react';

import NavBar from "../header/center-nav";
import Footer from '../blocks/footer';

export default class Contact extends Component {
    render() {
        return (
            <div className='contact'>
                <NavBar/>
                <h1>contact</h1>
                <Footer/>
            </div>
        )
    }
}