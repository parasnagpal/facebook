import React from 'react'

import {Button} from 'reactstrap'

class Comp extends React.Component{
    constructor(){
        super()
        this.state={
            active:false
        }
        this.btn=this.btn.bind(this)
        this.checkActive=this.checkActive.bind(this)
    }

     btn(){
        if(this.state.active)
         return (<Button onClick={this.props.addpost}>Post</Button>)
     }
     checkActive(e){
       if(e.target.value!=='')
        this.setState({active:true})
       else if(this.state.active)
        this.setState({active:false}) 
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