import React from 'react'
import Container from 'react-bootstrap/Container';
import './centralcomp.css';
import { Link, NavLink, withRouter } from 'react-router-dom';

const CentralComp = () => {
    return (
        <Container fluid>
            <div id="motto">
                <p>Find your perfect trip, designed by insiders who knows and love their cities</p>
            </div>
            <div id="center">
                <a href="#"> <img id="centerLogo" src="./circled-right-2.png" alt="circled-right"/></a>
                <Link to ="/cities"></Link>
            </div>
        </Container>        
    );
}

export default CentralComp;