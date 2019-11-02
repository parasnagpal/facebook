import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
//components
import NavBar from './navbar'
import SideBar from './sidebar'
import Posts from './news_feed/posts'
//route components
import FeedPage from './news_feed/feedpage'
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
            <Router>
                <Switch>
                    <Route path='/login'>
                       <LoginPage/>
                    </Route>   
                    <Route path='/signup'>
                        <FeedPage/>
                    </Route>  
                </Switch>
            </Router>
        )
        else return <LoginPage login={this.props.login}/>
    }
}   
export default landingpage