import React from 'react'

import LoginNav from './loginnav'
import SignupForm from './signupform'

class LoginPage extends React.Component{
    render(){
        return(
            <>
            <LoginNav/>
            <div className='d-flex justify-content-around login-signup'>
              <div className="flex-item m-3 mt-5">
                <h4><b>Facebook helps you connect and share with the people in your life.</b></h4>
                <img src={require("../../assets/data/login.png")} alt="..."/>
              </div>
              <div className='d-flex flex-column justify-content-center signup flex-item m-3 mt-5'>
                 <SignupForm/>
              </div>
            </div>
            <div className='tiny'>Facebook © 2019</div>
            </>
        );
    }
}
export default LoginPage