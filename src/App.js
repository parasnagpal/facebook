import React from 'react';
import logo from './logo.svg';
import './App.css';

import SideBar from './components/sidebar'
import Posts from './components/news_feed/posts'
import Bar from './components/navbar'

function App() {
  return (
    <div className="App">
      <Bar/>
      <div className='d-flex justify-content-around'>
      <SideBar className='p-4'/>
      <Posts />
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        
      </header>
    </div>
  );
}

export default App;
