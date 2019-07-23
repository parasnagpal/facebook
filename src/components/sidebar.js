import React from 'react'
import {Nav,NavItem} from 'reactstrap'

import '../assets/dist/css/bootstrap.min.css'
import '../assets/style/css/style.css'

class Comp extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Nav className='flex-column sidebar'>
                <NavItem>
                    <a href='/home'>Home</a>
                </NavItem>
                <NavItem>
                    <a href='/profile'>Profile</a>
                </NavItem>
            </Nav>
        );
    }
};
export default Comp