import React from 'react'
import {Form,CustomInput,Input,FormGroup,Label,Button} from 'reactstrap'
import NavBar from '../navbar'

class LoginPage extends React.Component{
    render(){
        return(
            <>
            <NavBar/>
            <div className='d-flex justify-content-around login-signup'>
              <div className='d-flex flex-column justify-content-center login'>
               <Form>
                  <Label for="username">username</Label>
                  <Input id="username"/>
                  <Label for="password">password</Label>
                  <Input id="password"/>
                  <Button color="primary" onClick={this.props.login}>Login</Button>
                </Form>
              </div>
              <div className='d-flex flex-column justify-content-center signup'>
                 <h1>Create an account</h1>
                 <h3>It's quick and easy.</h3> 
                 <Form>
                    <FormGroup> 
                      <Input id="fname" placeholder="First Name"/>
                      <Input id="lname" placeholder="Last Name"/>
                      <Input id="email" placeholder="Email or Mobile"/>
                      <Input id="password" placeholder="New Password"/>
                      <Input id="dob" type="date"/>
                   </FormGroup>
                   <CustomInput type="radio" name="gender" value="male" label="Male"/> 
                   <CustomInput type="radio" name="gender" value="female" label="Female"/> 
                   <CustomInput type="radio" name="gender" value="other" label="Custom"/> 
                   <Button color="success">Signup</Button>
                 </Form> 
              </div>
            </div>
            <div className='tiny'>Facebook © 2019</div>
            </>
        );
    }
}
export default LoginPage