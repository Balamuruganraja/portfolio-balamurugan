import React from 'react'
import {Nav,NavbarContainer,NavLogo,MobileIcon,Image,NavMenu,NavItem,NavLinks} from './NavbarElements'
import {FaBars} from 'react-icons/fa'
import Logo from "../images/logo.png"
function Navbar({toggle}) {
    return (
        <>
        

            <Nav>
            
                <NavbarContainer>
                <NavLogo to='/'>
                   <h2>Bala murugan</h2>
                   </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='header' spy={true} smooth={true} offset={-70} duration={300}>
                                Home
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='about' spy={true} smooth={true} offset={-70} duration={500}>
                                About
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='services' spy={true} smooth={true} offset={-70} duration={500}>
                                Skills
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='portfolio' spy={true} smooth={true} offset={-70} duration={500}>
                                Portfolio
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='contact' spy={true} smooth={true} offset={-70} duration={500}>
                                Contact
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar