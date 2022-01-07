import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

export default class NavBar extends Component {
    render() {
        return (
            <div className="center">
                <div className='nav-bar'>
                    <div className='nav-link-wrapper'>
                        <NavLink to="/" activeclassname="nav-link-active">
                            Home
                        </NavLink>
                    </div>

                    <div className='nav-link-wrapper'>
                        <NavLink to="/about" activeclassname="nav-link-active">
                            About
                        </NavLink>
                    </div>

                    <div className='nav-link-wrapper'>
                        <NavLink to="/character-creation" activeclassname="nav-link-active">
                            CC
                        </NavLink>
                    </div>
                </div>

            </div>
        )
    }
}