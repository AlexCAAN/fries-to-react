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

                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae incidunt, porro tempore ducimus rerum obcaecati! Iste pariatur laudantium aut doloremque vel nostrum rem quisquam voluptates aliquid, dolorem similique suscipit culpa a cum tempore ratione? Officia, ab accusantium provident officiis rem, nobis rerum perferendis aspernatur amet minus adipisci consectetur temporibus, praesentium quibusdam molestiae ipsum! Porro at nemo ad ea cupiditate eius aspernatur tempora praesentium inventore eveniet minima corrupti officia, nihil maiores soluta natus quam velit magnam voluptas culpa fugit adipisci! Cum repellat inventore, exercitationem ab laborum veniam maxime velit aut impedit iusto, corrupti perspiciatis assumenda a nulla odio eos aliquid odit facere, quasi beatae perferendis! Debitis neque distinctio natus accusamus a harum minima expedita rem. A, nostrum cum accusamus laudantium mollitia nulla porro! Neque sed vero suscipit ullam sint molestiae consequuntur iste rerum, ex incidunt odit eius architecto excepturi numquam eaque praesentium consectetur alias quisquam. Aspernatur nihil a molestias eveniet excepturi. Pariatur quos at beatae consequuntur! Odit, atque! Illo, cupiditate! Officiis perspiciatis ratione ullam ab architecto odit sint quidem ea, ad maxime minima praesentium quae dolorum voluptate porro eum nulla at, deserunt dolores rerum nemo! Necessitatibus quo accusantium excepturi nostrum quasi, ad odit rem alias labore non sequi in blanditiis vel?</p>

                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem temporibus quam beatae quibusdam sapiente nesciunt nobis ipsam corrupti modi labore. Beatae neque ex, ad deserunt ullam excepturi amet consequatur est nobis! Perferendis amet iure possimus? Molestias maxime in, mollitia quis ea eveniet saepe facere, et nam aliquid ab! Voluptatibus quidem, doloremque quos cumque a alias rem, laboriosam blanditiis ex ut, quisquam architecto atque qui doloribus corrupti expedita maiores. Animi blanditiis a, iste ullam omnis porro amet tenetur rem eveniet provident, harum veniam doloremque. Tempore voluptates nisi sapiente dignissimos debitis recusandae. Delectus vitae aliquid fugiat, sequi repellat rerum sint quibusdam eaque ducimus, molestias culpa quidem sed optio cumque explicabo quo qui cum. Eos, mollitia iure! Officiis nobis non qui vero voluptatem quis ut, commodi nulla facilis iusto exercitationem itaque maiores porro deserunt. Est culpa excepturi veniam quasi a illo, officia iure in consequatur earum possimus iusto nobis nostrum asperiores nemo enim. Itaque accusamus quibusdam quae corporis ad officiis quaerat perspiciatis nulla. Minima nemo dolore blanditiis quod? Iusto error cupiditate mollitia velit quos asperiores sequi modi voluptas adipisci id inventore, doloremque explicabo quam vero dolorum natus, animi aspernatur in. Perspiciatis temporibus fugiat quo, tempora nostrum iste rerum vero officiis, fugit vitae dolorum totam quibusdam! Alias reiciendis assumenda iure dolores aliquam! Esse optio porro dolore, fugit necessitatibus autem, reiciendis est laudantium corrupti molestias repellendus doloremque exercitationem adipisci aliquid maiores atque neque accusantium ut explicabo? Dolor in voluptate molestiae corporis minima libero corrupti deleniti, sint accusantium perferendis quae repellendus atque recusandae totam ut dolore nihil qui ipsam? Tenetur sequi tempora veritatis nisi commodi dolores voluptates, a ratione amet nostrum atque mollitia ducimus in facere, ad deleniti expedita voluptatibus placeat. Voluptatibus iste doloremque corrupti reprehenderit vitae nemo non minus illum accusantium eum veritatis blanditiis obcaecati nesciunt ullam cumque quia iusto ratione vero reiciendis, necessitatibus aperiam maiores rem eius. Aliquam adipisci dignissimos non molestias, error distinctio voluptatum voluptates enim numquam hic dolores quo omnis dolore porro repudiandae eveniet reprehenderit ad accusantium debitis nostrum? Similique voluptatibus enim numquam error voluptatum vel est, repudiandae nam consectetur. Aliquam, est? Nesciunt voluptatum suscipit veniam esse fugiat saepe quibusdam quo soluta?</p>
                    </div>
                </div>
                <Spacer50/>
                <Grid page={this.state.page}/>
                <Footer/>
            </div>
        )
    }
}