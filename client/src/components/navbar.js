import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CustomNavbar = () => {
  const navigate = useNavigate();

  return (
    <Navbar bg="light" expand="lg">
       
        <Navbar.Brand>
          <img
            src="/tpLogo1.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Brand Logo"
          />
        </Navbar.Brand>
      <Navbar.Brand onClick={() => navigate('/home')}>SummerShash</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link onClick={() => navigate('/home')}>Home</Nav.Link>
          <Nav.Link onClick={() => navigate('/home')}>Post</Nav.Link>
          <Nav.Link onClick={() => navigate('/register')}>Register</Nav.Link>
          <Nav.Link onClick={() => navigate('/login')}>Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
