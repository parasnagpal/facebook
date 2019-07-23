import React from 'react'
import {Navbar,Nav,NavItem,NavbarBrand} from 'reactstrap'

import '../assets/style/css/style.css'

class Bar extends React.Component{
  render(){
      return(
          <Navbar className='navbar'>
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