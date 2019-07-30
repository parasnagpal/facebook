import React from 'react';

import './App.css';
import {Container} from 'reactstrap'

import SideBar from './components/sidebar'
import Posts from './components/news_feed/posts'
import Bar from './components/navbar'

class App extends React.Component{
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
  return (
    <div className="App">
      <Bar/>
      <Container>
      <div className='d-flex justify-content-around'>
      <SideBar className=''/>
      <Posts posts={this.state.posts['me']} addpost={this.addpost}/>
      </div>
      </Container>
      
    </div>
  );
}
}

export default App;
