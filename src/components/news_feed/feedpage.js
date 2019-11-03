import React from  'react'
import {Redirect}  from 'react-router-dom'

//components
import NavBar from '../navbar'
import SideBar from '../sidebar'
import Posts from './posts'

class Page extends React.Component{
    constructor(){
        super()
        this.state={
         posts:{'me':[]} 
        }
        this.addpost=this.addpost.bind(this)
      }
     
      addpost(post){
       let posts=this.state.posts
       if(!posts['me'])
        posts['me']=[]
       posts['me'].push(post)
       console.log(post)
       this.setState({posts})
      }
     
      

    render(){
        if(!this.props.loggedin)
         return <Redirect to="/login"/>            
        else 
        return(
            <>
            <NavBar/>
            <div className='d-flex justify-content-center layout'>
                <SideBar className='col-4'/>
                <Posts posts={this.state.posts['me']} addpost={this.addpost}/>
            </div>
            </>
        );
    }
}

export default Page