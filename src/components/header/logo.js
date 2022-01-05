import React, { Component } from 'react';
import Image from "../../assets/images/logos/skyrim-logo.png"

const skyrim_logo = Image

export default class Logo extends Component {
    render() {
        return (
            <div className='image'>
                <img src={skyrim_logo} alt='Logo'/>
            </div>
        )
    }
}