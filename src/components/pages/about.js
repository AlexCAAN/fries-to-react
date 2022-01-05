import React, { Component } from 'react';

import NavBar from "../header/center-nav";
import Footer from '../footer';

export default class About extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <h1>About</h1>
                <Footer/>
            </div>
        )
    }
}