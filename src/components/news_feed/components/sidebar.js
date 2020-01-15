import React from 'react'
import {Nav,NavItem} from 'reactstrap'
import {FaEllipsisH,FaNewspaper} from 'react-icons/fa'

class Comp extends React.Component{
    
    render(){
        return(
            <div className='small_display_off'>
                <Nav className='flex-column sidebar'>
                    <NavItem className='active d-flex justify-content-start align-items-center px-2'>
                        <FaNewspaper/>
                        <a href='/home' className='side-text'>News Feed</a>
                    </NavItem>
                </Nav>
            </div>
        );
    }
};
export default Comp