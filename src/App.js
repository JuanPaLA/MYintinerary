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
import Header from './Components/Header/header';
import CentralComp from './Components/CentralComponent/centralcomp';

function App() {
  return (
      <div>
      <Container fluid>      
        <Nav />  
        <Header />
        <CentralComp />
        <CarouselA />
      </Container>  
      </div>  
  );
}



export default App;
