import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Carousel from 'react-bootstrap/Carousel'
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
    MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from "mdbreact";


function CarouselA()  {    
        return(                
             <Carousel className="carusel">
    <div class="container">
    <div class="row">
      <div class=" col-xs-12 col-md-6">
        <h5>Ciudad 1</h5>
      </div>

      <div class="col-xs-12 col-md-6">
        <h5>Ciudad 2</h5>
      </div>

      <div class="row">
      <div class=" col-xs-12 col-md-6">
        <h5>Ciudad 3</h5>
      </div>

      <div class="col-xs-12 col-md-6">
        <h5>Ciudad 4</h5>
      </div>
    </div>
  </div>
  </div>
  
            </Carousel> 
          
        );        
    }

export default CarouselA;
