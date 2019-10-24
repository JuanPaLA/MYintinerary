import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import React from 'react';
import './App.css';
import Footer from './Components/Footer/footer';
import CarouselA from './Components/Carousel/carousel';
import Nav from './Components/Nav/nav';
import Login from './Components/Login/login';
import ccAccount from  './Components/CreateAccount/createaccount';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
      <div>
      <Container fluid>        
        <header></header>
        <div id="motto">
          <p>Find your perfect trip, designed by insiders who knows and love their cities</p>
        </div>
        <div id="center">
          <a href="#"> <img id="centerLogo" src="./circled-right-2.png" alt="circled-right"/></a>
        </div>
        
        <CarouselA />
      </Container>  
      </div>  
  );
}



export default App;
