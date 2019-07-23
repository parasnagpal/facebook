import React from 'react'

import '../../assets/dist/css/bootstrap.min.css'
import '../../assets/style/css/style.css'
import CreatePost from './createpost'


class Posts extends React.Component{
  
    constructor(props){
      super(props)
      this.post=this.post.bind(this)
    }

    post(){
        return(<div className='post'>POST 1</div>)
    }

    render(){
       return(
         <div className='d-flex flex-column'>
          <CreatePost/>
          <>{this.post()}</>
         </div> 
        );
   }    
};
 
export default Posts