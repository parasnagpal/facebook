import React from 'react'

import '../../assets/dist/css/bootstrap.min.css'
import '../../assets/style/css/style.css'
import CreatePost from './createpost'


class Posts extends React.Component{
  
    constructor(props){
      super(props)
      this.state={
        posts:[]
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
        return posts.map((value)=><div className='post' key={value}>{value}</div>)
    }

    render(){
       return(
         <div className='d-flex flex-column'>
          <CreatePost addpost={this.addpost}/>
          <div>{this.post()}</div>
         </div> 
        );
   }    
};
 
export default Posts