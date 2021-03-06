import React from 'react'

import {Button,Badge,Input,Label} from 'reactstrap'
import {FaImage} from 'react-icons/fa'

import {FirebaseContext}  from '../../feedpage'
import * as firebase from 'firebase'

class Comp extends React.Component{
   constructor(){
        super()
        this.state={
            active:false,
            post:null
        }
        this.btn=this.btn.bind(this)
        this.checkActive=this.checkActive.bind(this)
        this.postHandle=this.postHandle.bind(this)
        this.photoBadge=this.photoBadge.bind(this)
        this.uploadPhoto=this.uploadPhoto.bind(this)

   }
    

   postHandle(e){
        e.target.parentNode.parentNode.children[0].value=''
        this.props.addpost(this.state.post); 
        this.setState({active:false})   
   }
     
   //renders button
   btn(){
      if(this.state.active)
         return (
            <div className='border-top pt-2'>
               <Button onClick={this.postHandle} color='primary' className='share-post btn-block' >Share</Button>
            </div>
         );   
   }
     
   checkActive(e){
      if(e.target.value!=='' || this.state.active)
        {
            this.setState({
               active:true,
               post:
               {
                  name:firebase.auth().currentUser.displayName,
                  postid:0,
                  text:e.target.value,
                  likes:[],
                  comments:{},
                  date:Date()
               }
            })
        }
        if(document.getElementById('post-lines').value!='')
            document.getElementById('label-createpost').style.visibility='hidden'; 
        else
            document.getElementById('label-createpost').style.visibility='unset';
   }


   uploadPhoto(e,storage){
      let file=e.target.files[0];
      //refernce to storage
      let storageref=storage.ref('image_posts/'+file.name)
      //upload file
      storageref.put(file).then(()=>{
         console.log('uploaded from blob')
         this.props.addpost(file.name,file)
      })
      
   }

   photoBadge(){

      return(
         <Label for="upload">
            <FirebaseContext.Consumer>
               {
                  (firebase)=>{
                     let storage=firebase.storage()
                     return(
                        <>
                           <Input id='upload' type="file" className="d-none p-5" onChange={(e)=>{this.uploadPhoto(e,storage)}}/>
                           <Badge className="pill" color="light" pill >
                              <div className="d-flex">
                                 <div className="d-flex flex-column justify-content-center mr-1">
                                 <FaImage/>
                              </div>
                              Photo/Video
                              </div>
                           </Badge>
                        </>
                     )
                  }
               }
            </FirebaseContext.Consumer>
            
         </Label>
      );

   }

   render(){ return(
        <div className="card post">
            <div className="card-header">
               Create Post
            </div>
            <div className="card-body pb-1">
               <label id='label-createpost' for='post-lines' classname='createpost-label'>Write Something here...</label>   
               <input id='post-lines' type='text' placeholder='यहाँ कुछ लिखें .... ' 
                onChange={this.checkActive} />
               <div className='border-top'>
                  {this.photoBadge()}
                  {this.btn()}
               </div>
            </div>
         </div>
   );}
};
export default Comp