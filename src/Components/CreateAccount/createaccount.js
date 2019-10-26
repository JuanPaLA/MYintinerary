import React from 'react'
import Nav from '../Nav/nav';
import Header from '../Header/header';
import { Link } from 'react-router-dom';
import { MDBBtn } from 'mdbreact';
import HomeButt from '../HomeButton/home';


const ccAccount = () => {
    return (
        <div>
            <Nav />
            <Header />
        
        <div className="container">
            <h4 className="center">Create Account</h4>
            <div className="form-group">
                <label htmlFor="userName">Nombre de Usuario</label>
                <input type="text" className="form-control" id="userName"/>
            </div>

            <div className="form-group">
                <label htmlFor="email">Ingrese su correo</label>
                <input type="email" className="form-control" placeholder="Your e-mail" id="email" />
            </div>

            <div className="form-group">
                <label htmlFor="pass">Ingrese su contraseña</label>
                <input type="password" className="form-control" placeholder="Password" id="pass" />
            </div>

            <div className="text-center">
                <MDBBtn>
                    Login
                </MDBBtn> 
                
                <MDBBtn>
                    <Link to ="/">Home</Link>
                </MDBBtn>
              </div>

        </div>
        <HomeButt />
        </div>
    );
}

export default ccAccount;