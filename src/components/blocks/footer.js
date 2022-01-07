import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Logo from '../header/logo';
import NavBar from '../header/center-nav';

export default class Footer extends Component {
    render() {
        return (
            <div className='bottom-nav base'>
                <div className='footer'>
                    <Logo/>
                    <div className='info'>
                        <div className='right nav-container'>
                            <div className="phone content">
                                Whats A Phone???
                            </div>
                        </div>
                        <div className='left nav-container'>
                            <div className="hours content">
                                9 AM - 5PM <br/>
                                Morndas - Fredas
                            </div>
                        </div>
                    </div>
                </div>
                <NavBar/>
                <div className='social-links'>
                    <a href={`https://www.instagram.com/skyrim.c/?hl=eng`} target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={['fab', 'instagram']} />
                    </a>
                    <a href={`https://twitter.com/ElderScrolls?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor`} target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={['fab', 'twitter']} />
                    </a>
                    <a href={`https://www.facebook.com/TESVSkyrim/`} target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                    </a>
                </div>
                <div className="copywrite-wrapper">
                    &copy; 2021 Carlos Leany |
                </div>
            </div>
        )
    }
}