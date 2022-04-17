import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { NavBarStyled } from './NavBar.styled'

export const NavBar = () => {
  return (
    <NavBarStyled>
      <Navbar sticky="top" expand="lg" className="NavBar">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Link to="/">Home</Link>
              <Link to="/About">About</Link>
              <Link to="/Gallery">Crushes</Link>
              <Link to="/Quiz">Test</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </NavBarStyled>
  )
}
