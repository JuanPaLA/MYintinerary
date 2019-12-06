import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  import { Link } from 'react-router-dom';
import './nav.css';


const Nav2 = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);


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

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
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

export default Nav2;