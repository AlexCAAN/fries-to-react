import React, { Component } from 'react';

import NavBar from "../header/center-nav";
import Footer from '../footer';

export default class CC extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <h1>Character Creation</h1>
                <Footer/>
            </div>
        )
    }
}