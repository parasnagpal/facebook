import React from 'react'


import {FaThumbsUp,FaShare} from 'react-icons/fa'
import {Button,Input} from 'reactstrap'
import {FaEdit} from 'react-icons/fa'
import {MdDelete} from 'react-icons/md'

import '../../assets/style/css/style.css'






const postlayout=(props)=>{
    let date=new Date()
   return (<div className='post p-2' key={props.key}>
             <div className='post-head d-flex justify-content-between'>
               <div>{date.toDateString()}</div>
               <div>
                   <MdDelete className='icon mx-2 s-1'/>
                   <FaEdit className='icon s-1'/>
               </div>
             </div>
             <div className='d-flex flex-column p-4'>
                  <>{props.post}</>
                  <div className=''></div>
             </div>
             <div className='d-flex justify-content-around border-top p-2'>
                 <div className='icon d-flex s-9'><FaThumbsUp className='align-self-center'/><div className='align-self-center'>  Like</div></div> 
                 <div className='icon s-9'><FaShare /> Share</div> 
             </div>
             <div><Input type='text' className='rounded-pill s-7 gray-back' id='comment' placeholder='Comment..' /></div>
          </div>)
  }
  export default postlayout