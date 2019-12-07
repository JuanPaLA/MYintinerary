import React from 'react'
import Nav from '../Nav/nav';
import HomeButt from '../HomeButton/home';
import {  Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from "axios";
import './createAcount.css'; 

class ccAccount extends React.Component {
    constructor(props){
        super(props);
        this.state = {            
            email : '',
            password: '',
            country: '',
            agreement: false        
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
        
        if(this.state.agreement === false || this.state.email === false || this.state.password === false){
            alert('check agreeement policy')


        }else{
            axios.post('http://localhost:5000/api/user', {
                email: this.state.email,
                password: this.state.password,
                country: this.state.country
            }).then(response => {
                console.log("posted user");
            }).catch(e => {
                console.log(e);
            });
        }        
        event.preventDefault();
    }

    render() {
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
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" value={this.state.email} onChange={this.handleInputChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input type="password" name="password" id="examplePassword" value={this.state.password} onChange={this.handleInputChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="selectedCountry">Select</Label>
                        <Input type="select" name="country" id="selectedCountry" value={this.state.country} onChange={this.handleInputChange}>
                            <option>Spain</option>
                            <option>England</option>
                            <option>Germany</option>
                            <option>Italy</option>
                            <option>United States</option>
                        </Input>
                    </FormGroup>                    
                    <FormGroup check>
                        <Label check>
                        <Input type="checkbox" name="agreement" value={this.state.agreement} onChange={this.handleInputChange}/>
                        I agree to MYtienrary's terms and conditions. 
                        </Label>
                    </FormGroup>
                    <Button color="primary" style={{marginTop: '1vh'}}>Submit</Button>
                    </Form>
                
                    </div>
    
    
                {/* ---------CONFIRMATION-------------- */}
              
                <HomeButt />
                </div>
        );
    }
}

export default ccAccount;