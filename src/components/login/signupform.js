import React from 'react'
import {Form,CustomInput,Input,FormGroup,Button} from 'reactstrap'


const signupform=(props)=>{
    return(
          <>  
            <h1>Create an account</h1>
            <h5>It's quick and easy.</h5> 
            <Form>
                <FormGroup> 
                    <Input id="fname" placeholder="First Name"/>
                    <Input id="lname" placeholder="Last Name"/>
                    <Input id="email" placeholder="Email or Mobile"/>
                    <Input id="password" placeholder="New Password"/>
                </FormGroup>
                <b>Birthday</b>
                <Input id="dob" type="date"/>
                <b>Gender</b>
                <Form inline>
                     <CustomInput type="radio" name="gender" value="male" label="Male" className="m-2"/> 
                     <CustomInput type="radio" name="gender" value="female" label="Female" className="m-2"/> 
                     <CustomInput type="radio" name="gender" value="other" label="Custom" className="m-2"/> 
                </Form>
                <p className="xs">By clicking Sign Up, you agree to our Terms, Data Policy and Cookie Policy. You may receive SMS notifications from us and can opt out at any time.</p>
                <Button color="success">Signup</Button>
            </Form> 
          </>
    );
}

export default signupform