import React from 'react';
import {Redirect} from 'react-router-dom'

class Profile extends React.Component{
    constructor(){
        super()
    }
    render(){
        //console.log(this.props)
        if(this.props.loggedin)
            return(
                    <div className='d-flex justify-content-center flex-column'>
                        <div className='cover-photo-container'>
                            <img className='cover-photo' src={require('../../assets/data/unset-cover-photo.jpg')}/>
                        </div>
                        <img className='profile-photo-enlarged' src={require('../../assets/data/default-profile-photo.jpg')}/>
                    </div>
                   )
        else 
            return(<Redirect to='/login'/>)
    }
}

export default Profile