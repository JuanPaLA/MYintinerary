import React from 'react'
import Nav from '../Nav/nav';
import { Link } from 'react-router-dom';
import { MDBBtn } from 'mdbreact';
import HomeButt from '../HomeButton/home';
import {  Button, Form, FormGroup, Label, Input } from 'reactstrap';

import './createAcount.css'; 


const ccAccount = () => {
    return (
        
        
        <div>
            <Nav />
        
            {/* -----------ENCABEZADO--------------------- */}
            <div className="text-center" id="subheader">
                <div className="container">
                    <p className="lead text-center dark"><strong>Create account</strong></p>  
                    <img  className="avatarPic text-center" src="https://www.huetamo.com.mx/images/directores/avatar-default.png" alt="avatar"/>      
                    <a className='centered' href="#" style={{color: "black" }}>Add photo</a>                          
                </div>                    
            </div>    
            


            {/* -----------FORM-----------*/}
            <div className='container-fluid border my-1'>           
            <Form>
                <FormGroup>
                    <Label for="exampleText">UserName</Label>
                    <Input type="text" name="text" id="usernametext" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                </FormGroup>
                <FormGroup>
                    <Label for="firstname">First Name</Label>
                    <Input type="text" name="text" id="firstname" />
                </FormGroup>
                <FormGroup>
                    <Label for="lastname">Last Name</Label>
                    <Input type="text" name="text" id="lastname" />
                </FormGroup>
                <FormGroup>
                    <Label for="selectedCountry">Select</Label>
                    <Input type="select" name="select" id="selectedCountry">
                        <option>Spain</option>
                        <option>England</option>
                        <option>Germany</option>
                        <option>Italy</option>
                        <option>United States</option>
                    </Input>
                </FormGroup>

                <FormGroup>
                    <Label for="exampleText">Text Area</Label>
                    <Input type="textarea" name="text" id="exampleText" />
                </FormGroup>
                

                <FormGroup check>
                    <Label check>
                    <Input type="checkbox" />{' '}
                    I agree to MY'tienrary's terms and conditions. 
                    </Label>
                </FormGroup>
                <Button>Submit</Button>
                </Form>
            
                </div>








            {/* ---------CONFIRMATION-------------- */}

            <div className="text-center">
                <MDBBtn>
                    Login
                </MDBBtn> 
                
                <MDBBtn>
                    <Link to ="/">Home</Link>
                </MDBBtn>
              </div>

      
            <HomeButt />
            </div>
    );
}

export default ccAccount;