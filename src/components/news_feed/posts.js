import React from 'react'
import axios from 'axios'

import '../../assets/dist/css/bootstrap.min.css'
import '../../assets/style/css/style.css'
import CreatePost from './createpost'
import PostLayout from './poslayout'




class Posts extends React.Component{
  
    constructor(props){
      super(props)
      this.state={
        likes:0,
        comments:[]
      }
      this.post=this.post.bind(this)
      
    }
    componentDidMount(){
      axios({
        method:"get",
        url:'http://localhost:4000/get',
        headers:{
        'Content-Type':'application/x-www-form-urlencoded'
        }
      })
    }
    

    post(){

        let posts=this.props.posts
      
        return posts.map((value,index)=>
                     <PostLayout post={value} key={index} likes={this.state.likes} comments={this.state.comments} />
                   )
    }

    render(){
       return(
         <div className='d-flex flex-column'>
          <CreatePost addpost={this.props.addpost}/>
          {this.post()}
         </div> 
        );
   }    
};
 
export default Posts