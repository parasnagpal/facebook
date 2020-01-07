import React from 'react'
import { Form,FormGroup,Label} from 'reactstrap'

import {FirebaseContext} from '../firebase/index'

class form extends React.Component{
    constructor(props){
        super(props)
        this.firebase_login=this.firebase_login.bind(this)
    }

    firebase_login(e,firebase){
        e.preventDefault();
        var email=document.getElementById('emailid').value
        var password=document.getElementById('passwordid').value       
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(()=>{
            this.props.login()
        })
        .catch(error=>{
            console.log(error.code)
            console.log(error.message)
        })
    }

    render(){
    return(
        
          
        <Form inline className="d-flex">
            <FormGroup className="mx-2 align-self-start flex-item">
                <Label className='label'>Email or Phone</Label>
                <input id='emailid'></input>
            </FormGroup>
            <FormGroup className="mx-2 flex-item">
                <Label className='label'>Password</Label>
                <input id='passwordid' type='password'></input>
                <Label className='label'>Forgotten Password?</Label>
            </FormGroup>
            <FirebaseContext.Consumer>
                {
                    (firebase)=>(<button onClick={(e)=>{this.firebase_login(e,firebase)}}>Login</button>)
                }
            </FirebaseContext.Consumer>
         </Form>
         
    );
    }
}
export default form