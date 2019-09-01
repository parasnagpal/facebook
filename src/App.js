import React from 'react';

import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import reducer from './redux/reducer'

import './App.css';

import SideBar from './components/sidebar'
import Home from './redux/redux-components/route'

import './assets/dist/css/bootstrap.min.css'
import './assets/style/css/style.css'

const store=createStore(
   reducer,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

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
    <Provider store={store}>
      <Home/>
    </Provider>
    </div>
  );
}
}

export default App;
