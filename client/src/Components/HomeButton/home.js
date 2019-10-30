import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron';
import './homebutton.css';
import homeIcon from '../../resources/homeIcon.png';
import { Link } from 'react-router-dom';

const HomeButt = () => {
    return (
        <div id="hb">
          <Link to = "/">
            <img id="homeButton" src={homeIcon} alt="homeButton"/>
          </Link>          
        </div>
    );
}

export default HomeButt;
