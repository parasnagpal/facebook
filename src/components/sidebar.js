import React from 'react'
import {Nav,NavItem} from 'reactstrap'
import {FaEllipsisH} from 'react-icons/fa'

import '../assets/dist/css/bootstrap.min.css'
import '../assets/style/css/style.css'

class Comp extends React.Component{
    
    render(){
        return(
            <div className='small_display_off'>
                <Nav className='flex-column sidebar'>
                    <NavItem className='active d-flex justify-content-between'>
                        <a href='/home' className='side-text'>Home</a>
                        <FaEllipsisH/>
                    </NavItem>
                    <NavItem>
                        <a href='/profile'>Profile</a>
                    </NavItem>
                    <NavItem>
                        <a>Friends</a>
                    </NavItem>
                </Nav>
            </div>
        );
    }
};
export default Comp