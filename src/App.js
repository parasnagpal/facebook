import React from 'react';

import './App.css';
import {Container} from 'reactstrap'

import SideBar from './components/sidebar'
import Posts from './components/news_feed/posts'
import Bar from './components/navbar'

function App() {
  return (
    <div className="App">
      <Bar/>
      <Container>
      <div className='d-flex justify-content-around'>
      <SideBar className=''/>
      <Posts />
      </div>
      </Container>
      
    </div>
  );
}

export default App;
