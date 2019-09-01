import React from 'react'

import NavBar from './navbar'
import SideBar from './sidebar'
import Posts from './news_feed/posts'

import LoginPage from './login/loginpage'

class landingpage extends React.Component{

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
        console.log(this.props)
        if(this.props.loggedin)
        return(
            <>
                <NavBar/>
                <div className='d-flex justify-content-center layout'>
                <SideBar className='col-4'/>
                <Posts posts={this.state.posts['me']} addpost={this.addpost}/>
                </div>
            </>
        )
        else return <LoginPage/>
    }
} 
export default landingpage