import React from 'react'
import { MDBBtn } from 'mdbreact';
import { Link } from 'react-router-dom'; 
import Header from '../Header/header';
import Nav from '../Nav/nav';
const Cities = () => {
    return (
      <div>
        
        <Nav />
        <Header />
      <h1>This is a list of cities</h1>
      <ul>
        <li>
          city 1
        </li>
        <li>
          city 2
        </li>
        <li>
          city 3
        </li>
        <li>
          city 4
        </li>
      </ul>
      
      <Link to ="/"><strong>Home</strong></Link>
      
      </div>
    );
}

export default Cities; 