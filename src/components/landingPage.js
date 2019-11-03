import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'

//route components
import FeedPage from './news_feed/feedpage'
import LoginPage from './login/loginpage'



class landingpage extends React.Component{
    
    render(){
        return(
            <>
            <Router>
                <Switch>
                    <Route path='/login'>
                       <LoginPage login={this.props.login} loggedin={this.props.loggedin}/>
                    </Route>   
                    <Route path='/'>
                        <FeedPage loggedin={this.props.loggedin}/>
                    </Route>  
                </Switch>
            </Router>
            </>
        )
    }
}   
export default landingpage