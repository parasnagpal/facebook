import React from 'react'


import {FaRegThumbsUp,FaShare,FaEdit} from 'react-icons/fa'
import {Input} from 'reactstrap'
import {MdDelete,MdChatBubbleOutline} from 'react-icons/md'
import {PostContext} from './feedpage'

import '../../assets/style/css/style.css'

//Image post layout 
function ImagePost(props){
    let date=new Date()
    return(
            <div className='post p-2' key={props.key}>
                <div className='post-head d-flex justify-content-between'>
                    <div>{date.toDateString()}</div>
                    <div>
                        <MdDelete className='icon mx-2 s-1'/>
                        <FaEdit className='icon s-1'/>
                    </div>
                </div>
                <div className='d-flex flex-column p-4'>
                    <img id='img-post' src={props.image_post}/>
                    <div className=''></div>
                </div>
                <div className='d-flex justify-content-around border-top p-3'>
                    <div className='icon d-flex s-9'><FaRegThumbsUp className='align-self-center'/><div className='align-self-center'>  Like</div></div> 
                    <div className='icon s-9'><MdChatBubbleOutline /> Share</div> 
                </div>
                <div><Input type='text' className='rounded-pill s-7 gray-back' id='comment' placeholder='Comment..' /></div>
            </div>
    );
}
//text post layout
function TextPost(props){
    let date=new Date()
    return (
            <div className='post p-2' key={props.key}>
                <div className='post-head d-flex justify-content-between'>
                  <div>{date.toDateString()}</div>
                  <div>

                      <MdDelete className='icon mx-2 s-1'/>
                      <FaEdit className='icon s-1'/>

                  </div>
                </div>
                
                <div className='d-flex flex-column p-4'>
                    <>{(props.post.text)?props.post.text:props.post}</>
                    <div className=''></div>
                </div>
                <div className='xs'>
                    {(props.post.likes)?<>{props.post.likes} likes</>:<></>}     
                </div>
                <div className='d-flex justify-content-around border-top p-2'>
                    <div className='icon like-comment s-9' onClick={()=>{props.actions(props.post)}}>
                       
                        <FaRegThumbsUp className='align-self-center'/>
                        <div className='align-self-center p-1'>Like</div>
                        
                    </div> 
                    <div className='icon like-comment s-9'>
                        
                        <MdChatBubbleOutline /> 
                        <div className='p-1'>Share</div>

                    </div> 
                </div>
                <div><Input type='text' className='rounded-pill s-7 gray-back' id='comment' placeholder='Write a comment..' /></div>
            </div>
    );
}



const postlayout=(props)=>{

    if(props.image_post)
        return ImagePost(props);
   
    else return TextPost(props);
   
}
export default postlayout