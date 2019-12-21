import React from 'react';
import queryString from 'query-string';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  import { Link } from 'react-router-dom';
import './nav.css';


class Nav2 extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isOpen: false,
      setIsOpen: false
    }
    this.toggle = this.toggle.bind(this)
  }
  toggle () {
        this.setState({
          setIsOpen: !this.state.setIsOpen
        })
    }
 
    async componentDidMount () {
      var param = queryString.parse(this.props.location.search)

      if(param){
        localStorage.setItem("token", param.token)
      }
    }

//------------EN FORMA DE CONSTANTE-----------
// const Nav2 = (props) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => setIsOpen(!isOpen);

render(){
  return (
    <div>
      <Navbar color="light" light expand="md">
      
      <UncontrolledDropdown nav inNavbar>   
        <DropdownToggle nav caret>
          <i className="fas fa-user fa-2x"></i>
          {/* <img id="litUser" src="http://www.iconarchive.com/download/i94391/bokehlicia/captiva/user.ico" alt="lticon"/> */}
        </DropdownToggle>
        
          <DropdownMenu>
            <DropdownItem>
              Option 1
            </DropdownItem>
            <DropdownItem>
              Option 2
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>

        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.setIsOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
            <Link to="/c-account">
                Create Account
              </Link>
            </NavItem>            
            <NavItem>
            <Link to="/login">
                Login
            </Link>
            </NavItem>            
          </Nav>
        </Collapse>
       
      </Navbar>
    </div>
  );
}
}

export default Nav2;