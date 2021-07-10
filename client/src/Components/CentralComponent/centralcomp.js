import React from 'react'
import Container from 'react-bootstrap/Container';
import './centralcomp.css';
import { Link } from 'react-router-dom';
 


const CentralComp = () => {
    return (
        <Container>
            <div id="motto">
                <p>Find your perfect trip, designed by insiders who knows and love their <Link to ="/cities"><strong>cities</strong></Link> </p>
            </div>
            <Link to ="/itineraries">
            <div id="center">
                <img id="centerLogo" src="./circled-right-2.png" alt="circled-right"/>                
            </div>
            </Link>            
        </Container>        
    );
}

export default CentralComp;