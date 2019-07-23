import React from 'react'
import {Navbar,Nav,NavItem,NavbarBrand} from 'reactstrap'

class Bar extends React.Component{
  render(){
      return(
          <Navbar>
              <NavbarBrand>facebook</NavbarBrand>
              <Nav>
                  <NavItem className='nav-item'>Notifications</NavItem>
                  <NavItem className='nav-item'>Home</NavItem>
                  <NavItem className='nav-item'>Requests</NavItem>
              </Nav>
          </Navbar>
      );
  }
};
export default Bar