import React from 'react'

import {Navbar,Nav,NavItem,NavbarBrand,Input,InputGroup,InputGroupAddon,Button} from 'reactstrap'
import {MdNotifications} from 'react-icons/md'
import {FaFacebookMessenger,FaUserFriends,FaSearch,FaFacebookSquare} from 'react-icons/fa'


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
                <Nav>
                    <NavItem className='nav-item navbar-font-size-1 inactive'><FaUserFriends/></NavItem>
                    <NavItem className='nav-item navbar-font-size-1 inactive'><MdNotifications/></NavItem>
                    <NavItem className='nav-item navbar-font-size-1 inactive'><FaFacebookMessenger/></NavItem>
                </Nav>
            </Navbar>
        );
    }
}

export default NavBar
