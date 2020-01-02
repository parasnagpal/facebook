import React from 'react'


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
      this.image_posts=this.image_posts.bind(this)
    }
  
    

    post(x){

        let posts=this.props.posts
        console.log(posts)
        return posts.map((value,index)=>
            <PostLayout actions={x} post={value} key={index} likes={this.state.likes} comments={this.state.comments}/>
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