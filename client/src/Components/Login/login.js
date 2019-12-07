import React from 'react'
import {  MDBBtn } from 'mdbreact';
import Nav from '../Nav/nav';
import HomeButt from '../HomeButton/home';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';



class Login extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
          email: '',
          password: '',
          login: false
      };
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(evt) {
      const value =
  evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;    
      this.setState({
        ...this.state,
        [evt.target.name] : value
      });
    }

    handleSubmit(event){
      
    }    

 render(){    
    return (
      <div>
        <Nav />
        
          <div className="text-center">

                  {/* -----------ENCABEZADO--------------------- */}
            <div className="text-center" id="subheader">
                <div className="container">
                    <p className="lead text-center dark" style={{color:"black"}}><atrong>Login </atrong></p>
                </div>                    
            </div>    

                {/* -------LOGIN FORM--------- */}
                <div className='container-fluid border my-1 mr-2'>           
            <Form>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" name="email" />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" name="password" id="examplePassword" checked={this.state.isGoing}
            onChange={this.handleInputChange} />
                </FormGroup>
                

                <FormGroup check>
                    <Label check>
                    <Input type="checkbox" />{' '}
                    Remember me.
                    </Label>
                </FormGroup>
                <Button style={{margin: "1vh"}} color="primary">Login</Button>
                </Form>


                


              </div>
            
      
      <HomeButt />
      </div>
      </div>
    );
  };
}

export default Login;
