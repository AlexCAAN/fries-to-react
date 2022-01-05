import React, { Component } from 'react';
import moment from 'moment';

import RightSide from "../header/right-phone";
import Logo from '../header/logo';
import LeftSide from "../header/left-location";
import NavBar from "../header/center-nav";
import Footer from '../footer';

const time = (moment().format('LLLL'));

export default class Home extends Component {
    render() {
        return (
            <div className="App-header">
                <div className='top-nav base'>
                    <div className='heading'>
                        <RightSide/>
                        <Logo/>
                        <LeftSide/>
                    </div>
                    <NavBar/>
                </div>
                <h1>Home</h1>
                {time}
                <Footer/>
            </div>
        )
    }
}