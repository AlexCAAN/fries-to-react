import React, { Component } from 'react';

import NavBar from "../header/center-nav";
import Footer from '../blocks/footer';
import Grid from '../blocks/grid';
import Spacer30 from '../../helpers/spacer30';


export default class CC extends Component {
    render() {
        return (
            <div className='character-creation'>
                <NavBar/>
                <h1>Character Creation</h1>
                <Grid/>
                <Spacer30/>
                <Footer/>
            </div>
        )
    }
}