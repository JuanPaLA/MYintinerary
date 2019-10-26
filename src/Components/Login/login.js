import React from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import { Link } from 'react-router-dom'; 
import Header from '../Header/header';
import Nav from '../Nav/nav';
import HomeButt from '../HomeButton/home';

const Login = () => {
    return (
      <div>
        <Nav />
        <Header />
        <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <form>
              <p className="h5 text-center mb-4">Sign in</p>
              <div className="grey-text">
                <MDBInput
                  label="Type your email"
                  icon="envelope"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  label="Type your password"
                  icon="lock"
                  group
                  type="password"
                  validate
                />
              </div>
              <div className="text-center">
                <MDBBtn>Login</MDBBtn> 
                
                <MDBBtn>
                    <Link to ="/">Home</Link>
                </MDBBtn>

                


              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <HomeButt />
      </div>
    );
}

export default Login;
