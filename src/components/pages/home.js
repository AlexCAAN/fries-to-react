import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import BackgroundMap from "../../assets/images/background/skyrim-map.jpg"
import Logo from '../header/logo';
import NavBar from "../header/center-nav";
import Footer from '../blocks/footer';

export default class Home extends Component {
    render() {
        return (
            <div>
                {/* Begining Header of the homepage */}
                <div className='top-nav base'>
                    <div className='heading'>
                        <div className='right nav-container'>
                            <FontAwesomeIcon className="home-icon" icon="phone-volume" />
                            <div className='text-content'>
                                <div className="phone">
                                    Whats A Phone???
                                </div>
                                <div className="hours">
                                    9 AM - 5PM <br/>
                                    Morndas - Fredas
                                </div>
                            </div>

                        </div>
                        <div className='center-column'>
                            <Logo/>
                            <NavBar/>
                        </div>

                        <div className='left nav-container'>
                            <div className="address-wrapper">
                                <a>
                                The Road To Bruma <br/>
                                Tamriel, Skyrim, Whiterun </a>
                            </div>
                            <FontAwesomeIcon className="home-icon" icon="map-marker-alt" />
                        </div>
                    </div>
                </div>
                {/* Ending Header of the homepage */}
                <div className='homepage'>
                    <div className="hero-section">
                        <div className="top-heading">
                            <h1>Skyrim Belongs To The Dark Elves</h1>
                        </div>
                        <div className="bottom-heading">
                            <h3>And Maybe To The Argonians</h3>
                        </div>
                    </div>
                    
                    <div className="features-section">
                        <div className="columns-wrapper">
                            <div className="column">
                                <FontAwesomeIcon className="home-icon" icon="hand-paper" />
                                <p className='poetry'>The Dark <br/> BrotherHood <br/> Still Lives</p>

                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>

                            <div className="column">
                                <FontAwesomeIcon className="home-icon" icon="snowflake" />
                                <p className='poetry'>The Cold Embrace Of<br/>Death Is Warmer Than<br/>The Desolate Lands Of<br/>Skyrim</p>

                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>

                            <div className="column">
                                <FontAwesomeIcon className="home-icon" icon="skull-crossbones" />
                                <p className='poetry'>Death To The <br/> High-Elves<br/> And Their Agents</p>

                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>

                    <div className="map-segment">
                        <img src={BackgroundMap} alt=""/>
                    </div>
                </div>

                <Footer/>
            </div>
        )
    }
}