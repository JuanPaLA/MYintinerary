import React from 'react';
import Nav from '../Nav/nav';
import HomeButt from '../HomeButton/home';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from "axios";


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
      if(this.state.email.length == 0 || this.state.password.length == 0){
        alert('complete required fields')    
    }else{      
      axios
        .post("http://localhost:5000/api/user", { 
          email: this.state.email, 
          password: this.state.password})
        .then(res => {        
          console.log(res);
          console.log(res.data);
          alert(res)    
        }).catch((err)=>console.log(err))
          this.setState({ email: "", password: ""});
     
    }
  }

    singGoogle(){
      window.location.href="http://localhost:5000/api/glogin"
    }
  


 render(){    
    return (
      <div>
        <Nav />
        
          <div className="text-center">

                  {/* -----------ENCABEZADO--------------------- */}
            <div className="text-center" id="subheader">
                <div className="container">
                    <p className="lead text-center dark" style={{color:"black"}}><strong>Login </strong></p>
                </div>                    
            </div>    

                {/* -------LOGIN FORM--------- */}
                <div className='container-fluid border my-1 mr-2'>           
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" name="email"  value={this.state.email} onChange={this.handleInputChange}/>
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" name="password" id="examplePassword" value={this.state.password}
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

                <div className='container-fluid border my-1 mr-2'>           
                <div id="BotonGoogle">
               {/* <Link to="http://localhost:5000/api/auth/google"> */}
                
                <label style={{fontSize:"30px", fontStyle:"bold"}}>&nbsp;&nbsp;Log in with Google</label>
               {/* </Link> */}
               </div>
                  <button onClick={this.singGoogle.bind(this)}>Google</button>
            </div>

                


              </div>
            
      
      <HomeButt />
      </div>
      </div>
    );
  };
}

export default Login;
