import React from 'react'

import '../../assets/dist/css/bootstrap.min.css'
import '../../assets/style/css/style.css'
import CreatePost from './createpost'
import PostLayout from './poslayout'


class Posts extends React.Component{
  
    constructor(props){
      super(props)
    
      this.post=this.post.bind(this)
      this.image_posts=this.image_posts.bind(this)
    }
    
    //function for separating individual post components
    post(postactions){

        let posts=this.props.posts
        return posts.map(
          (post,index)=>
              <PostLayout actions={postactions} post={post} key={index}/>
        )
        
    }
    image_posts(){
        let image_posts=this.props.image_posts
        console.log(image_posts)
        return image_posts.map((value,index)=>
            <PostLayout image_post={value} key={index} likes={this.state.likes} comments={this.state.comments}/>
          )
                  
    }

    render(){
       return(
         <div className='d-flex flex-column' id='post-panel'>
          <CreatePost addpost={this.props.addpost}/>
          {this.post(this.props.actions)}
          {this.image_posts()}
         </div> 
        );
   }    
};
 
export default Posts