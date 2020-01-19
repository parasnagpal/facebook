import React from 'react'
import {Form,CustomInput,Input,FormGroup,Row,Col} from 'reactstrap'

//import {FirebaseContext} from '../news_feed/feedpage'
import {FirebaseContext} from '../../firebase/index'

function firebase_signup(e,firebase,props){
    e.preventDefault();
    var email=document.getElementById('email').value
    var password=document.getElementById('password').value
    var name=document.getElementById('fname').value+document.getElementById('lname').value

    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then((user)=>{
        console.log(user)
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(()=>{
            let user=firebase.auth().currentUser
            user.updateProfile({
                displayName:name
            })
            props.login()
        })
    })
    .catch(error=>{
        console.log(error.code)
        console.log(error.message)
    })
}

const signupform=(props)=>{
    return(
          <>  
            <h1>Create an account</h1>
            <h5>It's quick and easy.</h5> 
            <Form>
                <FormGroup> 
                    <Row>
                        <Col sm='12' md='6' className="">
                            <Input id="fname" placeholder="First Name"/>
                        </Col>
                        <Col sm='12' md='6' className=''>
                            <Input id="lname" placeholder="Last Name"/>
                        </Col>
                    </Row>
                    <Input id="email" placeholder="Email or Mobile"/>
                    <Input id="password" type='password' placeholder="New Password"/>
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
                <FirebaseContext.Consumer>
                    {(firebase)=>(<button id='signup_button' className='p-2' onClick={(e)=>firebase_signup(e,firebase,props)}>Sign Up</button>)}
                </FirebaseContext.Consumer>
            </Form> 
          </>
    );
}

export default signupform