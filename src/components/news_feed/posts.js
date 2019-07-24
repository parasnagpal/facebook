import React from 'react'

import '../../assets/dist/css/bootstrap.min.css'
import '../../assets/style/css/style.css'
import CreatePost from './createpost'
import PostLayout from './poslayout'


class Posts extends React.Component{
  
    constructor(props){
      super(props)
      this.state={
        posts:[],
        likes:0,
        comments:[]
      }
      this.post=this.post.bind(this)
      this.addpost=this.addpost.bind(this)
    }
    addpost(post){
      let posts=this.state.posts
      posts.push(post)
      console.log(post)
      this.setState({posts})
    }

    

    post(){
        let posts=this.state.posts
    return posts.map((value,index)=>
                     <PostLayout post={value} key={index} likes={this.state.likes} comments={this.state.comments} />
                   )
    }

    render(){
       return(
         <div className='d-flex flex-column'>
          <CreatePost addpost={this.addpost}/>
          {this.post()}
         </div> 
        );
   }    
};
 
export default Posts