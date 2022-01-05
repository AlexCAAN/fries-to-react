import React, { Component } from 'react';

import NavBar from "../header/center-nav";
import Footer from '../footer';

export default class Contact extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <h1>contact</h1>
                <Footer/>
            </div>
        )
    }
}