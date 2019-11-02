import React from 'react'
import { Form,FormGroup,Label } from 'reactstrap'

const form=(props)=>{
    return(
        <Form inline className="d-flex">
            <FormGroup className="mx-2 align-self-start flex-item">
                <Label className='label'>Email or Phone</Label>
                <input></input>
            </FormGroup>
            <FormGroup className="mx-2 flex-item">
                <Label className='label'>Password</Label>
                <input></input>
                <Label className='label'>Forgotten Password?</Label>
            </FormGroup>
            <button onClick={props.login}>Login</button>
         </Form>
    );
}
export default form