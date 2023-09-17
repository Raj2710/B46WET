import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap'
import { useLogout } from '../../hooks/useLogout';
import { Link } from 'react-router-dom';
function Menubar({title}) {
    const logout = useLogout()
  return <>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">{title}</Navbar.Brand>
          <Nav className="me-auto">
            <Link to={'/dashboard'} className='nav-link'>Dashboard</Link>
            <Link to={'/create'} className='nav-link'>Create</Link>
            <Button variant='danger' onClick={logout}>Logout</Button>
          </Nav>
        </Container>
      </Navbar>
      </>
}

export default Menubar