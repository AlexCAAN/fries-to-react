import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import moment from "moment";

import Home from './pages/home';
import CC from './pages/character-creation';
import About from "./pages/about";
import Contact from "./pages/contact";
import NoMatch from "./pages/no-match";
import Icons from "../helpers/icons";
import "../styles/main.scss";

// const time = (moment().format('LLLL'));

export default class App extends Component {
  constructor() {
    super()
    Icons()
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div className='routes'>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/about' element={<About/>} />
              <Route path='/character-creation' element={<CC/>} />
              <Route path='/contact' element={<Contact/>} />
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}