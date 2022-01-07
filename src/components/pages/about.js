import React, { Component } from 'react';

import NavBar from "../header/center-nav";
import Footer from '../blocks/footer';
import Portrait from "../../assets/images/people/skyrim-portrait.jpg"
import Spacer50 from '../../helpers/spacer50';
import Grid from '../blocks/grid';

export default class About extends Component {
    constructor(props) {
        super(props)

        this.state = {
            page: "ABOUT"
        }
    }

    render() {
        return (
            <div className='about'>
                <div className='header'>
                    <div className="header-bg"/>
                    <div className='skewed-header-wrapper'>
                        <div className='skewed-header-content'>
                            <div className='heading-wrapper'>
                                <h1>About Us</h1>
                            </div>
                            <div className='links-wrapper'>
                                <NavBar/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="page-container">
                    <div className="content-wrapper">
                        <img src={Portrait} alt="featured artist" id="portrait"/>

                        <p><h1>Once Upon a Starless Night</h1>
                            " If you gaze long into the abyss, the abyss also gazes into you " - Friedrich Nietzsche <br/>

                            Once upon a starless night<br/>
                            Neither moon, nor glittering wandering lights<br/>
                            Silence crept in shadow’s guise<br/>
                            with sinister glowing crimson eyes<br/>

                            “It cannot be!” - I insist<br/>
                            Dark elves creeping? - “They don't exist!”<br/>

                            High I held my Gem of Seeing<br/>
                            Eyes now wide, no disbelieving<br/>

                            With flesh the complexion of inky black<br/>
                            And all the affection of a ravenous pack<br/>
                            Billowing, flowing, milky hair<br/>
                            It’s visage, a frowning menacing stare<br/>

                            “How thy scowl, thou foul drow!”<br/>
                            To my dismay, ‘twas I that cowed<br/>
                            As I reached for father’s ancient hammer<br/>
                            Alas, from behind another plunged its dagger<br/>

                            So I smashed upon the floor I bled<br/>
                            Magic gem flashed, all shadows fled<br/>
                            With malice they wander starless nights<br/>
                            From burst of light they've taken flight<br/>

                            With heraldry, and blood, I signed my sigil<br/>
                            Here there be Drow – keep a vigil<br/>
                            With one last gasping desperate breath<br/>
                            “Revenge!” I prayed, and forever slept
                        </p>

                        <p>Displaced in time and unexpectedly reunited with his son Drizzt Do’Urden, Zaknafein has overcome the prejudices ingrained in him as a drow warrior to help his son battle the ambitious Spider Queen and stem the tide of darkness that has been unleashed upon the Forgotten Realms. Though Zaknafein has endured the most difficult battles, survival has come at a terrible cost, and the fight is far from over. Facing demons and driders, Zaknafein carries the entire weight of Menzoberranzan surrounding Gauntlgym on his shoulders once more. But the chances of survival for him and his old friend and mercenary Jarlaxle look bleak. Trapped in a desperate and seemingly hopeless situation, the legendary warriors must reach deep inside themselves to face the impossible. While the burdens Zaknafein bears are more than enough for one of Menzoberrazan’s greatest warriors, fate holds further challenges. When circumstances take an unexpected turn, Zaknafein discovers he must not only conquer the darkness but learn to accept the uncontrollable: life itself.</p>
                    </div>
                </div>
                <Spacer50/>
                <Grid page={this.state.page}/>
                <Footer/>
            </div>
        )
    }
}