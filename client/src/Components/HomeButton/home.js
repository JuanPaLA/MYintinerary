import React from 'react'
import './homebutton.css';
import homeIcon from '../../resources/homeIcon.png';
import { Link } from 'react-router-dom';
import {Navbar} from 'reactstrap';
const HomeButt = () => {
    return (

         <Navbar id="hb" color="light" light expand="md">
           <Link to="/">
           <img id="homeButton" src={homeIcon} alt="homeButton"/>  
           </Link>           
         </Navbar>
    );
}

export default HomeButt;
