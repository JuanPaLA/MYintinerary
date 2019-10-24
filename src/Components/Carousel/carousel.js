import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Carousel from 'react-bootstrap/Carousel'


function CarouselA()  {    
        return(                
             <Carousel className="carusel">
                <div className="innerDiv">
                    <div>Barcelona</div>
                    <div>Amsterdam   </div>
                    <div>París </div>
                    <div> Buenos Aires </div>
                </div>
                <div className="innerDiv">
                    <div>Springfield</div>
                    <div>Idaho  </div>
                    <div>Moscú </div>
                    <div> Rio de Janeiro </div>
                </div>
                <div className="innerDiv">
                    <div>Bogotá</div>
                    <div>Reyjkavik   </div>
                    <div>Manaos</div>
                    <div> Comué </div>
                </div>
                <div className="innerDiv">
                    <div>San Francisco</div>
                    <div>Tokio  </div>
                    <div>Berlin </div>
                    <div> Sonderland </div>
                </div>
            </Carousel> 
           
        );        
    }

export default CarouselA;

            // <div>
            //     <div id="carHead">
            //         <h6>Popular MYintineraries</h6>
            //     </div>
            //     { <Carousel>
            //     <div class="Container">
            //         <div class="column">
            //             <div class=" col-xs-12 col-md-6">
            //                 <div className="innerDiv">Barcelona</div>
            //             </div>
            //             <div class=" col-xs-12 col-md-6">
            //                 <div className="innerDiv">Amsterdam</div>
            //             </div>
            //         </div>
            //         <div class="column">
            //             <div class=" col-xs-12 col-md-6">
            //                 <div className="innerDiv">Barcelona</div>
            //             </div>
            //             <div class=" col-xs-12 col-md-6">
            //                 <div className="innerDiv">Amsterdam</div>
            //             </div>
            //         </div>
            //     </div>
            //     </Carousel>
            // </div> 