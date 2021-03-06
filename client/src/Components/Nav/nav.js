import React, { Component } from "react";
import './nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBNavbar, MDBNavbarNav, MDBNavbarToggler, MDBCollapse } from "mdbreact";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Link } from 'react-router-dom';


  class Nav extends Component {
    state = {
      isOpen: false
    };

    toggleCollapse = () => {
      this.setState({ isOpen: !this.state.isOpen });
    }
   
    render() {
      return (
          <Jumbotron fluid className="mainJumbo">
           <MDBNavbarNav left>
            <MDBNavbar color="default-color" dark expand="md">
              <MDBNavbarToggler onClick={this.toggleCollapse} />
                <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>

                  <Link to = "/login">Login</Link> <br></br>
                   <Link to = "/c-account">Create Account</Link>  
         
                </MDBCollapse>
              </MDBNavbar>
          </MDBNavbarNav>
          </Jumbotron>        
        
        );
      }
    }
      
    export default  (Nav);