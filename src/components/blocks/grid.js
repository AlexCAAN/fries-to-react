import React, { Component } from 'react';

import Altmer from "../../assets/images/squares/altmer.jpg"
import Argonian from "../../assets/images/squares/argonian.jpg"
import Bosmer from "../../assets/images/squares/bosmer.jpg"
import Breton from "../../assets/images/squares/breton.jpg"
import Dunmer from "../../assets/images/squares/dunmer.jpg"
import Imperial from "../../assets/images/squares/imperial.jpg"
import Khajiit from "../../assets/images/squares/khajiit.jpg"
import Nord from "../../assets/images/squares/nord.jpg"
import Orsimer from "../../assets/images/squares/orsimer.jpg"
import Redguard from "../../assets/images/squares/redguard.jpg"

export default class Grid extends Component {
    render() {
        return (
            <div className='grid'>
                <div className='extra-div'>
                {/* first table of content */}
                    <div className='grid-row'>
                        <div className='grid-image'>
                            <img src={Altmer} alt="altmer" className="race"/>
                        </div>
                        {this.props.page === "ABOUT" ? (
                            <div className='grid-text'>
                                <h1>Death To Those Of The Altmer And Cursed Be Their Schemes</h1>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam earum libero excepturi fugiat exercitationem, aspernatur nesciunt nulla quasi quae autem, nemo praesentium consectetur dolorum ex inventore. At sint cum dolor quaerat iusto! Rerum unde eius molestias! Quos, perspiciatis cum et earum assumenda molestias unde! Neque deleniti voluptates facilis laudantium quam.
                                </p>
                            </div>
                        ) : (
                            <div className='grid-text'>
                                <h1>You Can Be A High-Elf If You Like</h1>
                                <ul>
                                    <li>Don't Be This guy</li>
                                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                    <li>Eaque minus sint nihil quasi ipsa officiis quo!</li>
                                    <li>Laboriosam recusandae, dolor earum deserunt consequatur tenetur consequuntur.</li>
                                    <li>Totam repellat nobis, ut temporibus nulla culpa</li>
                                </ul>
                            </div>
                        )}
                    </div>
                {/* split */}
                    <div className='grid-row'>
                    {this.props.page === "ABOUT" ? (
                            <div className='grid-text'>
                                <h1>Pity To The Argonians, Who's Home Is In Shambles</h1>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam earum libero excepturi fugiat exercitationem, aspernatur nesciunt nulla quasi quae autem, nemo praesentium consectetur dolorum ex inventore. At sint cum dolor quaerat iusto! Rerum unde eius molestias! Quos, perspiciatis cum et earum assumenda molestias unde! Neque deleniti voluptates facilis laudantium quam.
                                </p>
                            </div>
                        ) : (
                            <div className='grid-text'>
                                <h1>Or Maybe An Argonian If You Like Scales</h1>
                                <ul>
                                    <li>This Guy Is Cool</li>
                                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                    <li>Eaque minus sint nihil quasi ipsa officiis quo!</li>
                                    <li>Laboriosam recusandae, dolor earum deserunt consequatur tenetur consequuntur.</li>
                                    <li>Totam repellat nobis, ut temporibus nulla culpa</li>
                                </ul>
                            </div>
                        )}
                        <div className='grid-image'>
                            <img src={Argonian} alt="altmer" className="race"/>
                        </div>
                    </div>
                {/* split */}
                {/* second table of content */}
                    <div className='grid-row'>
                        <div className='grid-image'>
                            <img src={Bosmer} alt="altmer" className="race"/>
                        </div>
                        {this.props.page === "ABOUT" ? (
                            <div className='grid-text'>
                                <h1>Woe To Those Who Pressume Upon The Wood-Elves</h1>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam earum libero excepturi fugiat exercitationem, aspernatur nesciunt nulla quasi quae autem, nemo praesentium consectetur dolorum ex inventore. At sint cum dolor quaerat iusto! Rerum unde eius molestias! Quos, perspiciatis cum et earum assumenda molestias unde! Neque deleniti voluptates facilis laudantium quam.
                                </p>
                            </div>
                        ) : (
                            <div className='grid-text'>
                                <h1>Wood-Elves Are Great If You Want To Hunt</h1>
                                <ul>
                                    <li>Archer Bros!!!</li>
                                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                    <li>Eaque minus sint nihil quasi ipsa officiis quo!</li>
                                    <li>Laboriosam recusandae, dolor earum deserunt consequatur tenetur consequuntur.</li>
                                    <li>Totam repellat nobis, ut temporibus nulla culpa</li>
                                </ul>
                            </div>
                        )}
                    </div>
                {/* split */}
                    <div className='grid-row'>
                    {this.props.page === "ABOUT" ? (
                            <div className='grid-text'>
                                <h1>Be Kind To The Bretons, For They've No-one Who Will</h1>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam earum libero excepturi fugiat exercitationem, aspernatur nesciunt nulla quasi quae autem, nemo praesentium consectetur dolorum ex inventore. At sint cum dolor quaerat iusto! Rerum unde eius molestias! Quos, perspiciatis cum et earum assumenda molestias unde! Neque deleniti voluptates facilis laudantium quam.
                                </p>
                            </div>
                        ) : (
                            <div className='grid-text'>
                                <h1>Bretons Are Mage KIllers, Be Wary</h1>
                                <ul>
                                    <li>Flat Nose Fuck</li>
                                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                    <li>Eaque minus sint nihil quasi ipsa officiis quo!</li>
                                    <li>Laboriosam recusandae, dolor earum deserunt consequatur tenetur consequuntur.</li>
                                    <li>Totam repellat nobis, ut temporibus nulla culpa</li>
                                </ul>
                            </div>
                        )}
                        <div className='grid-image'>
                            <img src={Breton} alt="altmer" className="race"/>
                        </div>
                    </div>
                {/* split */}
                {/* third table of content */}
                    <div className='grid-row'>
                        <div className='grid-image'>
                            <img src={Dunmer} alt="altmer" className="race"/>
                        </div>
                        {this.props.page === "ABOUT" ? (
                            <div className='grid-text'>
                                <h1>Cursed Are We Who Have Eyes The Color Of Blood</h1>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam earum libero excepturi fugiat exercitationem, aspernatur nesciunt nulla quasi quae autem, nemo praesentium consectetur dolorum ex inventore. At sint cum dolor quaerat iusto! Rerum unde eius molestias! Quos, perspiciatis cum et earum assumenda molestias unde! Neque deleniti voluptates facilis laudantium quam.
                                </p>
                            </div>
                        ) : (
                            <div className='grid-text'>
                                <h1>Dark-Elves Are The Killers Of Killers</h1>
                                <ul>
                                    <li>This Guys Is Pog</li>
                                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                    <li>Eaque minus sint nihil quasi ipsa officiis quo!</li>
                                    <li>Laboriosam recusandae, dolor earum deserunt consequatur tenetur consequuntur.</li>
                                    <li>Totam repellat nobis, ut temporibus nulla culpa</li>
                                </ul>
                            </div>
                        )}
                    </div>
                {/* split */}
                    <div className='grid-row'>
                    {this.props.page === "ABOUT" ? (
                            <div className='grid-text'>
                                <h1>Wealthy Are Those Who Can Smell A Septim On The Air</h1>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam earum libero excepturi fugiat exercitationem, aspernatur nesciunt nulla quasi quae autem, nemo praesentium consectetur dolorum ex inventore. At sint cum dolor quaerat iusto! Rerum unde eius molestias! Quos, perspiciatis cum et earum assumenda molestias unde! Neque deleniti voluptates facilis laudantium quam.
                                </p>
                            </div>
                        ) : (
                            <div className='grid-text'>
                                <h1>Imperials Are Richer Than Most Dukes</h1>
                                <ul>
                                    <li>This Guy's Basically A Goblin</li>
                                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                    <li>Eaque minus sint nihil quasi ipsa officiis quo!</li>
                                    <li>Laboriosam recusandae, dolor earum deserunt consequatur tenetur consequuntur.</li>
                                    <li>Totam repellat nobis, ut temporibus nulla culpa</li>
                                </ul>
                            </div>
                        )}
                        <div className='grid-image'>
                            <img src={Imperial} alt="altmer" className="race"/>
                        </div>
                    </div>
                {/* split */}
                {/* fourth table of content */}
                    <div className='grid-row'>
                        <div className='grid-image'>
                            <img src={Khajiit} alt="altmer" className="race"/>
                        </div>
                        {this.props.page === "ABOUT" ? (
                            <div className='grid-text'>
                                <h1>Khajiit Has Wares If You Have Coin</h1>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam earum libero excepturi fugiat exercitationem, aspernatur nesciunt nulla quasi quae autem, nemo praesentium consectetur dolorum ex inventore. At sint cum dolor quaerat iusto! Rerum unde eius molestias! Quos, perspiciatis cum et earum assumenda molestias unde! Neque deleniti voluptates facilis laudantium quam.
                                </p>
                            </div>
                        ) : (
                            <div className='grid-text'>
                                <h1>Khajiit Are As Deadly With And Without Weapons</h1>
                                <ul>
                                    <li>This Cat Dude Isn't A Furry</li>
                                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                    <li>Eaque minus sint nihil quasi ipsa officiis quo!</li>
                                    <li>Laboriosam recusandae, dolor earum deserunt consequatur tenetur consequuntur.</li>
                                    <li>Totam repellat nobis, ut temporibus nulla culpa</li>
                                </ul>
                            </div>
                        )}
                    </div>
                {/* split */}
                    <div className='grid-row'>
                    {this.props.page === "ABOUT" ? (
                            <div className='grid-text'>
                                <h1>Frigid Is The Blood Of The Heartless Nords</h1>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam earum libero excepturi fugiat exercitationem, aspernatur nesciunt nulla quasi quae autem, nemo praesentium consectetur dolorum ex inventore. At sint cum dolor quaerat iusto! Rerum unde eius molestias! Quos, perspiciatis cum et earum assumenda molestias unde! Neque deleniti voluptates facilis laudantium quam.
                                </p>
                            </div>
                        ) : (
                            <div className='grid-text'>
                                <h1>Nords Are A Good Choice If You Like Cold</h1>
                                <ul>
                                    <li>More Cold Blooded Than A Lizard</li>
                                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                    <li>Eaque minus sint nihil quasi ipsa officiis quo!</li>
                                    <li>Laboriosam recusandae, dolor earum deserunt consequatur tenetur consequuntur.</li>
                                    <li>Totam repellat nobis, ut temporibus nulla culpa</li>
                                </ul>
                            </div>
                        )}
                        <div className='grid-image'>
                            <img src={Nord} alt="altmer" className="race"/>
                        </div>
                    </div>
                {/* split */}
                {/* fifth table of content */}
                    <div className='grid-row'>
                        <div className='grid-image'>
                            <img src={Orsimer} alt="altmer" className="race"/>
                        </div>
                        {this.props.page === "ABOUT" ? (
                            <div className='grid-text'>
                                <h1>Powerful Are The Elves Of Trinimac</h1>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam earum libero excepturi fugiat exercitationem, aspernatur nesciunt nulla quasi quae autem, nemo praesentium consectetur dolorum ex inventore. At sint cum dolor quaerat iusto! Rerum unde eius molestias! Quos, perspiciatis cum et earum assumenda molestias unde! Neque deleniti voluptates facilis laudantium quam.
                                </p>
                            </div>
                        ) : (
                            <div className='grid-text'>
                                <h1>Orcs Are Strong Fighters If You Use The Right Tools</h1>
                                <ul>
                                    <li>Good For Mellee If You Swing That Way</li>
                                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                    <li>Eaque minus sint nihil quasi ipsa officiis quo!</li>
                                    <li>Laboriosam recusandae, dolor earum deserunt consequatur tenetur consequuntur.</li>
                                    <li>Totam repellat nobis, ut temporibus nulla culpa</li>
                                </ul>
                            </div>
                        )}
                    </div>
                {/* split */}
                    <div className='grid-row'>
                        {this.props.page === "ABOUT" ? (
                            <div className='grid-text'>
                                <h1>Honor To The Akhviri And Their Knights</h1>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam earum libero excepturi fugiat exercitationem, aspernatur nesciunt nulla quasi quae autem, nemo praesentium consectetur dolorum ex inventore. At sint cum dolor quaerat iusto! Rerum unde eius molestias! Quos, perspiciatis cum et earum assumenda molestias unde! Neque deleniti voluptates facilis laudantium quam.
                                </p>
                            </div>
                        ) : (
                            <div className='grid-text'>
                                <h1>Redguards Are Hearty, But Their Pain Is Beyond Us</h1>
                                <ul>
                                    <li>They've Got Curved Swords!!!!</li>
                                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                    <li>Eaque minus sint nihil quasi ipsa officiis quo!</li>
                                    <li>Laboriosam recusandae, dolor earum deserunt consequatur tenetur consequuntur.</li>
                                    <li>Totam repellat nobis, ut temporibus nulla culpa</li>
                                </ul>
                            </div>
                        )}
                        <div className='grid-image'>
                            <img src={Redguard} alt="altmer" className="race"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}