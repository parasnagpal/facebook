import React from  'react'

//components
import NavBar from '../navbar'
import SideBar from '../sidebar'
import Posts from './posts'

const Page=(props)=>{
    return(
        <>
        <NavBar/>
        <div className='d-flex justify-content-center layout'>
            <SideBar className='col-4'/>
            <Posts posts={this.state.posts['me']} addpost={this.addpost}/>
        </div>
        </>
    );
}

export default Page