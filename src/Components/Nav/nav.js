import './nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

   

function Nav () {
    return(
        <Container fluid id="supernav">                 
        <nav class=" container-fluid navbar navbar-expand-sm bg-dark navbar-dark">          
          <a class="navbar-brand" href="index.html">Menú</a>          
          <ul class="navbar-nav">          
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                Account
              </a>              
              <div class="dropdown-menu">
              <ul>
                <li><Link to = "/c-account">Create Account|</Link></li>
                <li><Link to = "/login">Login</Link></li>
              </ul>
              </div>
            </li>
          </ul>
        </nav>


        </Container>
    )
}
    
export default Nav;