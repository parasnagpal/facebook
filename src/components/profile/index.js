import React from 'react';
import {Redirect} from 'react-router-dom'

import {GoGlobe} from 'react-icons/go';
import {MdChatBubbleOutline} from 'react-icons/md'

import CreatePost from '../news_feed/components/posts/createpost'

class Profile extends React.Component{
    constructor(){
        super()
    }
    render(){
        //console.log(this.props)
        if(this.props.loggedin)
            return(
                    <div className='d-flex justify-content-center'>
                        <div className='d-flex flex-column'>

                            <div className='d-flex flex-column'>
                                <div className='cover-photo-container'>
                                    <img className='cover-photo' src={require('../../assets/data/unset-cover-photo.jpg')}/>
                                    <img className='profile-photo-enlarged' src={require('../../assets/data/default-profile-photo.jpg')}/>
                                </div>
                                <div className='cover-photo-footer d-flex flex-column'>
                                    <div className='align-self-center p-2'>
                                        <span className='m-2'>Friends</span>
                                        <span className='m-2'>Photos</span>
                                    </div>
                                </div>
                            </div>

                            <div className='d-flex'>
                                <div className='flex-grow-1'>
                                    <div className='post m-2 ml-0 p-2'>
                                        <div className='d-flex align-items-center'>
                                            <GoGlobe/>
                                            <span className='ml-1'>Intro</span>
                                        </div>
                                        <div className='d-flex flex-column align-items-center'>
                                            <MdChatBubbleOutline/>
                                            <input placeholder='Add a short bio to tell people more about yourself.' className='s'></input>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex-grow-3'>
                                    <CreatePost/>
                                    <b className="s">Posts</b>
                                    <div className='post m-2 mr-0'>ds</div>
                                </div>
                            </div>

                        </div>
                    </div>
                   )
        else 
            return(<Redirect to='/login'/>)
    }
}

export default Profile