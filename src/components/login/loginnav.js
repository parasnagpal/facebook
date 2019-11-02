import React from 'react'
import {Navbar,NavbarBrand} from 'reactstrap'
import LoginForm from './loginform'

const LoginNav=(props)=>{
     
        return(
          <Navbar>
              <NavbarBrand>facebook</NavbarBrand>
              <LoginForm login={props.login}/>
          </Navbar>
        );
    
}
export default LoginNav