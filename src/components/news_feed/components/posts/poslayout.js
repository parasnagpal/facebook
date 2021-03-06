import React from 'react'


import {FaRegThumbsUp,FaEdit,FaEllipsisH} from 'react-icons/fa'
import {Input} from 'reactstrap'
import {MdDelete,MdChatBubbleOutline} from 'react-icons/md'
import * as firebase from 'firebase'

//eventlistener onchange
function comment(e,props){
    if(e.keyCode===13){
        props.post.comment={
            name:firebase.auth().currentUser.displayName,
            text:e.target.value
        }
        props.actions(props.post,'C')
        e.target.value='';
    }
}

//separate
function separate_comments_as_components(comments){
    let comment_array=[];
    console.log(comments)
    for(let comment in comments){
        comment_array.push(comments[comment])
        console.log(comment)
    }
    return (   
            <div className='border-top'>
                {
                comment_array.map((comment)=>
                <div className='m-2'>
                    <span className='comment'>
                        <span className='comment-name m-2'>{comment.name}</span>
                        <span className='comment-text m-2'>{comment.text}</span>
                    </span>
                </div>
                )
                }
            </div>
            );
}

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
                    <div className='icon d-flex s-9'>

                        <FaRegThumbsUp className='align-self-center'/>
                        <div className='align-self-center'>  Like</div>
                    
                    </div> 
                    <div className='icon s-9'>
                        
                        <MdChatBubbleOutline /> 
                        <div>Comment</div>
                    
                    </div> 
                </div>
                <div>
                    <Input type='text' className='rounded-pill s-7 gray-back' id='comment' placeholder='Comment..' />
                </div>
            </div>
    );
}
//text post layout
function TextPost(props){
    let date=new Date()
    console.log(props)
    let default_='https://art-u2.infcdn.net/articles_uploads/2/2094/Design%20Personal%20Logo%20Online.png';
    return (
            <div className='post p-2' key={props.key}>
                <div className='post-head d-flex justify-content-between'>
                    <div className='d-flex'>
                        <img src={(props.post.image)?props.post.image:default_} className='post-image'/>
                        <div className='d-flex flex-column ml-2'>
                            <b className='post-name'>{(props.post.name)?<>{props.post.name}</>:<>unknown</>}</b>
                            <div>{(props.post.date)?props.post.date:date.toDateString()}</div>
                        </div>
                    </div>
                    <div className='align-self-end'>
                        <FaEllipsisH className="icon mx-2 s-1"/>
                    </div>
                </div>
                <div className='d-flex flex-column p-4'>
                    <>{(props.post.text)?props.post.text:props.post}</>
                    <div className=''></div>
                </div>
                <div className='xs'>
                    {(props.post.likes)?<>{props.post.likes || props.post.likes.length} likes</>:<></>}     
                </div>
                <div className='d-flex justify-content-around border-top p-2'>
                    <div className='icon like-comment s-9' onClick={()=>{props.actions(props.post,'L',firebase.auth().currentUser.displayName)}}>   
                        <FaRegThumbsUp className='align-self-center'/>
                        <div className='align-self-center p-1'>Like</div>
                    </div> 
                    <div className='icon like-comment s-9'>
                        <MdChatBubbleOutline /> 
                        <div className='p-1'>Comment</div>
                    </div> 
                </div>
                <div>
                    {(props.post.comments)?separate_comments_as_components(props.post.comments):<></>}
                </div>
                <div>
                    <Input type='text' className='rounded-pill s-7 gray-back' id='comment' placeholder='Write a comment..' 
                     onKeyUp={(e)=>comment(e,props)}/>
                </div>
            </div>
    );
}



const postlayout=(props)=>{

    console.log(props)
    if(props.image_post)
        return ImagePost(props);
   
    else return TextPost(props);
   
}
export default postlayout