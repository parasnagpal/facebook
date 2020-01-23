import React from 'react'
import {Redirect} from 'react-router-dom'

import LoginNav from './components/loginnav'
import SignupForm from './components/signupform'
//import AuthState from '../auth/index'

class LoginPage extends React.Component{

    render(){
        
        console.log()
        if(this.props.loggedin)
          return <Redirect to="/"/>
        return(
            <>
            <LoginNav login={this.props.login}/>
            <div className='d-flex justify-content-around login-signup'>
              <div className="flex-item m-3 mt-5 small_display_off">
                <h4><b>Facebook helps you connect and share with the people in your life.</b></h4>
                <img src={require("../../assets/data/login.png")} alt="..."/>
              </div>
              <div className='d-flex flex-column justify-content-center signup flex-item m-3 mt-5'>
                 <SignupForm login={this.props.login}/>
              </div>
            </div>
            <div className='tiny'>Facebook © 2019</div>
            </>
        );
    }
}
export default LoginPage