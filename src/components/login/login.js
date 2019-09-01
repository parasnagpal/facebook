import React from 'react'
import {Navbar,NavbarBrand,Form,Button} from 'reactstrap'


class Login extends React.Component{
    render(){
        return(
            <Navbar expand="lg" className="d-flex justify-content-between">
               <NavbarBrand>facebook</NavbarBrand>
               <div className="login-form">
               <Form inline className="m-1">
                 <label for="username">username</label>
                 <input id="username"/>
                </Form>
                <Form inline className="m-1">
                 <label for="password">password</label>
                 <input type="password" id="password"/>
               </Form>
               <button className="mt-4 mb-1">Login</button>
              
               </div>
            </Navbar>
        );
    }
}
export default Login