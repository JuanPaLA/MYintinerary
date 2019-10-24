import './nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import React from 'react';

   

function Nav () {
    return(
        <Container fluid id="supernav">                 
        <nav class=" container-fluid navbar navbar-expand-sm bg-dark navbar-dark">          
          <a class="navbar-brand" href="index.html">Login</a>          
          <ul class="navbar-nav">          
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                Menú
              </a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Senate</a>
                <a class="dropdown-item" href="#">House</a>
              </div>
            </li>
          </ul>
        </nav>


        </Container>
    )
}
    
export default Nav;