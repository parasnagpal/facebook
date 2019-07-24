import React from 'react'
import {Button} from 'reactstrap'
import axios from 'axios'

import '../../assets/style/css/style.css'

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
        this.sendPost=this.sendPost.bind(this)
    }
     sendPost(){
        console.log('send')
       /*axios({
          method:'post',
          url:'http://localhost:4000'
          ,
          'Content-type':'application/json',
          body:{
             a:'a'
          }
       })*/
     }

     postHandle(e){
        e.target.parentNode.parentNode.children[0].value=''
        this.props.addpost(this.state.post); 
        this.setState({active:false})
     }
     btn(){
        if(this.state.active)
         return (
         <div className='border-top pt-2'>
          <Button onClick={this.postHandle} color='primary' className='share-post btn-block' onClick={this.sendPost}>Share</Button>
         </div>)
     }
     
     checkActive(e){
       if(e.target.value!=='')
        {
         this.setState({
                         active:true,
                         post:e.target.value
                       })
        }
        else if(this.state.active)
        {
        this.setState({
                       active:false,
                       post:e.target.value
                     })
        } 
     }

     componentDidMount(){
       
     }

     render(){ return(
        <div className="card post">
          <div className="card-header">
             Create Post
          </div>
          <div className="card-body">
          <input type='text' placeholder='Write Something here...' onChange={this.checkActive}/>
          {this.btn()}
         </div>
        </div>
    );}
};
export default Comp