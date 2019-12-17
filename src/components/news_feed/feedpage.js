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

const FirebaseContext=React.createContext(firebase);


class Page extends React.Component{
    constructor(){
        super()
        this.state={
            posts:[],
            image_posts:[],
            image_names:[]
        }
        this.addpost=this.addpost.bind(this)
    }
     
    addpost(post,image){
        let posts=this.state.posts
        let image_posts=this.state.image_posts
        let image_names=this.state.image_names
        if(!posts)
            posts=[]
        if(!image_posts)
            image_posts=[]
        if(!image_names)
            image_names=[]    
        if(!image)
        {
            posts.push(post)
            let firebase_post={};
            firebase_post['/posts']=posts
            firebase.database().ref().update(firebase_post)
            this.setState({posts})
        }
        else{
            image_posts.push(image)
            image_names.push(post)
            let firebase_post={}
            firebase_post['/images']=image_names
            firebase.database().ref().update(firebase_post)
            this.setState({image_posts})
        }
    }
     
    componentDidMount(){
        firebase.auth().createUserWithEmailAndPassword('paras','alkanagpal')
        let fetched_posts
        firebase.database().ref('/posts').once('value').then((snapshot)=>{
            fetched_posts=snapshot.val()
            this.setState({
                posts:fetched_posts
            })
        })
        let images=[]
        //fetch file names
        firebase.database().ref('/images').once('value').then((snapshot)=>{
            fetched_posts=snapshot.val()
            images=fetched_posts
            console.log(images);

            for(let image of images)
            {
                firebase.storage().ref('image_posts/'+image).getDownloadURL().then(async function(url){
                    var data/*blob*/=await fetch(url)
                                .then(r=>r.blob()) 

                    let image_posts=this.state.image_posts
                    image_posts.push(URL.revokeObjectURL(data))
                    console.log(data)
                    this.setState({
                        image_posts:image_posts
                    })
                }).catch(e=>{
                    console.log(e)
                })
            }   
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
                        <Posts posts={this.state.posts} image_posts={this.state.image_posts} addpost={this.addpost} className='col'/>
                    </div>
                </FirebaseContext.Provider>
            );
    }
}

export default Page

export{FirebaseContext}