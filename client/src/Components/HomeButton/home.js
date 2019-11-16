import React from 'react'
import './homebutton.css';
import homeIcon from '../../resources/homeIcon.png';
import { Link } from 'react-router-dom';

const HomeButt = () => {
    return (
        <div id="hb">
          <Link to = "/">
          <div color="light" light expand="md">
          <img id="homeButton" src={homeIcon} alt="homeButton"/>
          </div>
          </Link>          
        </div>
    );
}

export default HomeButt;
