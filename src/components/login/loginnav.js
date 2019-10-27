import React from 'react'
import {Navbar,NavbarBrand} from 'reactstrap'
import LoginForm from './loginform'

const LoginNav=(props)=>{

        return(
          <Navbar>
              <NavbarBrand>facebook</NavbarBrand>
              <LoginForm/>
          </Navbar>
        );
    
}
export default LoginNav