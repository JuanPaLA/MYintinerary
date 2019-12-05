import React from 'react'
import {  MDBBtn } from 'mdbreact';
import Nav from '../Nav/nav';
import HomeButt from '../HomeButton/home';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';



class Login extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
          userName: '',
          password: '',
          login: false
      };
      this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'text' ? target.checked : target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
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
                    <Label for="exampleText">UserName</Label>
                    <Input type="text" name="text" id="usernametext"             checked={this.state.isGoing}
            onChange={this.handleInputChange}/>
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder=""             checked={this.state.isGoing}
            onChange={this.handleInputChange} />
                </FormGroup>
                

                <FormGroup check>
                    <Label check>
                    <Input type="checkbox" />{' '}
                    Remember me.
                    </Label>
                </FormGroup>
                <Button>OK</Button>
                </Form>




                <MDBBtn>
                  Login
                </MDBBtn> 
                


                


              </div>
            
      
      <HomeButt />
      </div>
      </div>
    );
  };
}

export default Login;
