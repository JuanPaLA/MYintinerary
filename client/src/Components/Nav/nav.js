import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

const Nav2 = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);


  return (
    <div>
      <Navbar color="light" light expand="md">
      <UncontrolledDropdown nav inNavbar >
        <DropdownToggle nav caret>
        <i class="far fa-user" size="4x" ></i>
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
        <NavbarToggler onClick={toggle} left />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="#">Login</NavLink>
            </NavItem>            
            <NavItem>
              <NavLink href="#">Create Account</NavLink>
            </NavItem>            
          </Nav>
        </Collapse>
       
      </Navbar>
    </div>
  );
}

export default Nav2;