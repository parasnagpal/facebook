import React from  'react'
import {Redirect, useParams}  from 'react-router-dom'

//components
import NavBar from './components/navbar'
import SideBar from './components/sidebar'
import RightBar from './components/rightbar'
import Posts from './components/posts/posts'

//import firebase
import Firebase,{FirebaseContext} from '../firebase/index'
import * as firebase from 'firebase'

new Firebase()

let PostContext

class Page extends React.Component{
    constructor(){
        super()
        this.state={
            posts:[],
            image_posts:[],
            image_names:[]
        }
        this.addpost=this.addpost.bind(this)
        this.postactions=this.postactions.bind(this)
        this.postcontext=this.postcontext.bind(this)
        this.like=this.like.bind(this);
        this.comment=this.comment.bind(this);
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
            post.postid=posts.length
            posts.push(post)
            let firebase_post={};
            firebase_post['/posts']=posts
            firebase.database().ref().update(firebase_post)
            this.setState({posts})
        }
        else{
            //fetch currently uploaded image names
            //synchronization
            firebase.database().ref('/images').once('value').then((snapshot)=>{
                image_names=snapshot.val()
                image_names.push(post)
                let firebase_post={}
                firebase_post['/images']=image_names
            
                //update image names 
                firebase.database().ref().update(firebase_post)
                //set current state of image names
                this.setState({
                    image_names:image_names
                })
            })
            
            //get uploaded photo
            firebase.storage().ref('image_posts/'+post).getDownloadURL()
            .then((data)=>{

                image_posts.push(data)
                this.setState({
                    image_posts:image_posts
                })

            }) 
            .catch(e=>{
                console.log(e)
            })

            this.setState({image_posts})
        }
    }

    like(post,username){
        //fetch post
        let like_updated_post=this.state.posts[post.postid];
        if(!like_updated_post.likes)
            like_updated_post.likes=[];
        //update like
        like_updated_post.likes.push(username);
        let updated_posts=this.state.posts;
        updated_posts[post.postid]=like_updated_post
        //update state
        this.setState({
            posts:updated_posts
        })
        firebase.database().ref('/posts').set(updated_posts)
    }
   
    comment(post,comment_data){
        //fetch post
        let comment_updated_post=this.state.posts[post.postid];
    
        //update comment
        if(!comment_updated_post.comments)
            comment_updated_post.comments={}
        comment_updated_post.comments[Date()]=comment_data; 
        delete comment_updated_post.comment;
        let updated_posts=this.state.posts;
        updated_posts[post.postid]=comment_updated_post
        //update state
        this.setState({
            posts:updated_posts
        },()=>{
            console.log(this.state.posts)
        })
        
        firebase.database().ref('/posts').set(updated_posts)
    }

    postactions(post,code,username){

        switch(code){
            case 'L':this.like(post,username);
                     break;
            case 'C':this.comment(post,post.comment)
                     break;            
        }
    }

    postcontext(){
        let obj={
            data:{
                posts:this.state.posts,
                image_posts:this.state.image_posts,
                image_names:this.state.image_names
            },
            actions:{
                postactions:this.postactions
            }
        }
        PostContext=React.createContext(obj);
        return PostContext;
    }
     
    componentDidMount(){
        //Step 1:
        //fetch text posts
        let fetched_posts
        firebase.database().ref('/posts').once('value').then((snapshot)=>{
            fetched_posts=snapshot.val()
            this.setState({
                posts:fetched_posts
            })
        })

        //Step 2:
        //fetch image posts
        let images=[]
        let image_posts=this.state.image_posts
        //fetch file names
        firebase.database().ref('/images').once('value').then((snapshot)=>{
            fetched_posts=snapshot.val()
            images=fetched_posts
            //fetch urls corresponding to image names
            for(let image of images)
            {
                firebase.storage().ref('image_posts/'+image).getDownloadURL()
                .then((data)=>{
                    image_posts.push(data)
                    this.setState({
                        image_posts:image_posts
                    })
                })
                .catch(e=>{
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
                        <Posts actions={this.postactions} posts={this.state.posts} image_posts={this.state.image_posts} addpost={this.addpost} className='col'/>
                        <RightBar/>
                    </div>
                </FirebaseContext.Provider>
            );
    }
}

export default Page

export{
    FirebaseContext,
    PostContext
}