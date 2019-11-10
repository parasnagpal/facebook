import React from  'react'
import {Redirect}  from 'react-router-dom'

//components
import NavBar from '../navbar'
import SideBar from '../sidebar'
import Posts from './posts'

//import firebase
import * as firebase from 'firebase'

const config={
    apiKey: "AIzaSyAXyAewDH7mp6Sc3SemEAIaS1Be_hnIvE4",
    authDomain: "facebook-ad20e.firebaseapp.com",
    databaseURL: "https://facebook-ad20e.firebaseio.com",
    projectId: "facebook-ad20e",
    storageBucket: "facebook-ad20e.appspot.com",
    messagingSenderId: "90830638251",
    appId: "1:90830638251:web:88b06549f438630e68bbee"
}

firebase.initializeApp(config)

const FirebaseContext=React.createContext(null);


class Page extends React.Component{
    constructor(){
        super()
        this.state={
            posts:[]
        }
        this.addpost=this.addpost.bind(this)
    }
     
    addpost(post){
        let posts=this.state.posts
        if(!posts)
            posts=[]
       
        posts.push(post)

        let firebase_post={};
        firebase_post['/posts']=posts
        firebase.database().ref().update(firebase_post)
        
        this.setState({posts})
    }
     
    componentDidMount(){

        let fetched_posts
        firebase.database().ref('/posts').once('value').then((snapshot)=>{
            fetched_posts=snapshot.val()
            this.setState({
                posts:fetched_posts
            })
        })
    } 

    render(){
        if(!this.props.loggedin)
            return <Redirect to="/login"/>            
        else 
            return(
                <FirebaseContext.Provider value={firebase}>
                    <NavBar/>
                    <div className='d-flex justify-content-center layout'>
                        <SideBar className='col-4'/>
                        <Posts posts={this.state.posts} addpost={this.addpost} />
                    </div>
                </FirebaseContext.Provider>
            );
    }
}

export default Page

export{FirebaseContext}