import React from 'react'

import {Navbar,Nav,NavItem,NavbarBrand,Input,InputGroup,InputGroupAddon,Button} from 'reactstrap'
import {MdNotifications} from 'react-icons/md'
import {FaFacebookMessenger,FaUserFriends,FaSearch,FaFacebookSquare} from 'react-icons/fa'

import * as firebase from 'firebase'

class NavBar extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <Navbar className='navbar navbar_feedpage' >
                <NavbarBrand className='navbar-font-size'>
                    <div className='d-flex justify-content-between'>
                    <FaFacebookSquare className='mr-2'/>
                    <InputGroup>
                        <Input/>
                        <InputGroupAddon addonType='append'>
                            <Button><FaSearch/></Button>
                        </InputGroupAddon>
                    </InputGroup>
                    </div>
                </NavbarBrand>
                <span className="d-flex flex-row align-items-center">
                    <Nav className="mx-2">
                        <NavItem className="navbar-navs">
                            {(firebase.auth().currentUser.displayName)?firebase.auth().currentUser.displayName:0}
                        </NavItem>
                        <NavItem className="navbar-navs">Home</NavItem>
                    </Nav>
                    <Nav>
                        <NavItem className='nav-item navbar-font-size-1 inactive'><FaUserFriends/></NavItem>
                        <NavItem className='nav-item navbar-font-size-1 inactive'><MdNotifications/></NavItem>
                        <NavItem className='nav-item navbar-font-size-1 inactive'><FaFacebookMessenger/></NavItem>
                    </Nav>
                </span>
            </Navbar>
        );
    }
}

export default NavBar