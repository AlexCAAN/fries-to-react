import React, { Component } from 'react';

import NavBar from "../header/center-nav";
import Footer from '../blocks/footer';
import Grid from '../blocks/grid';
import Spacer30 from '../../helpers/spacer30';


export default class CC extends Component {
    render() {
        return (
            <div className='character-creation'>
                <div className='header'>
                    <div className="header-bg"/>
                    <div className='skewed-header-wrapper'>
                        <div className='skewed-header-content'>
                            <div className='heading-wrapper'>
                                <h1>Character Creation</h1>
                            </div>
                            <div className='links-wrapper'>
                                <NavBar/>
                            </div>
                        </div>
                    </div>
                </div>
                <Grid/>
                <Spacer30/>
                <Footer/>
            </div>
        )
    }
}