import React from 'react'
import {Navbar,NavbarBrand} from 'reactstrap'
import LoginForm from '../loginform'

class LoginNav extends React.Component{

    render() {    
        return(
          <Navbar>
              <NavbarBrand>facebook</NavbarBrand>
              <LoginForm login={this.props.login}/>
          </Navbar>
        );
    } 
    
}
export default LoginNav