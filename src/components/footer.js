import React, { Component } from 'react';

import RightSide from "./header/right-phone";
import Logo from './header/logo';
import LeftSide from "./header/left-location";
import NavBar from "./header/center-nav";

export default class Footer extends Component {
    render() {
        return (
            <div className='bottom-nav base'>
                <div className='footer'>
                    <Logo/>
                    <div className='info'>
                        <RightSide/>
                        <LeftSide/>
                    </div>

                </div>
                <NavBar/>
                <div className='links copywrite'>
                    <div className="copywrite-wrapper">
                        &copy; 2021 Carlos Leany |
                    </div>
                </div>
            </div>
        )
    }
}